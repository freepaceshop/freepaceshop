// 核心公共大腦：FPS 詢價購物車系統
let cart = [];

// 側邊欄開關
function toggleCart(open) {
    const drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.classList.toggle('open', open);
}

// 記憶口袋：儲存與讀取 localStorage
function saveCart() {
    localStorage.setItem('fps_cart', JSON.stringify(cart));
}

function loadCart() {
    cart = JSON.parse(localStorage.getItem('fps_cart')) || [];
    renderCart();
}

// 渲染購物車畫面 (萬用版)
function renderCart() {
    const list = document.getElementById('cartList');
    const countEl = document.getElementById('navCartCount');
    let subTotal = 0;

    if (countEl) {
        countEl.innerText = cart.reduce((sum, i) => sum + i.qty, 0);
    }
    
    if (!list) return; // 如果該頁面沒有設計購物車 HTML 結構，就靜默結束

    if (cart.length === 0) {
        list.innerHTML = `<p style="color:#999; text-align:center; padding: 20px 0;">清單內尚無道具。</p>`;
        updatePrices(0, 0, "");
        return;
    }

    list.innerHTML = cart.map(i => {
        subTotal += (i.price * i.qty);
        return `<div class="cart-item">
            <div class="cart-item-info">
                <span class="cart-item-name">${i.name} × ${i.qty}</span>
                <span class="cart-item-spec">${i.specs}</span>
                <div class="cart-item-price">NT$ ${(i.price * i.qty).toLocaleString()}</div>
            </div>
            <span class="btn-remove" onclick="removeGlobalCart(${i.id})">移除</span>
        </div>`;
    }).join('');

    const shipInfo = calcShippingEngine(cart, subTotal);
    updatePrices(subTotal, shipInfo.fee, shipInfo.desc);
}

function removeGlobalCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
}

// 核心運費與免運演算法
function calcShippingEngine(items, total) {
    if(total >= 5000) return { fee: 0, desc: "🎉 達 NT$5,000 免運門檻！" };
    const longQty = items.filter(i => i.ship === 'long').reduce((s, i) => s + i.qty, 0);
    const medQty = items.filter(i => i.ship === 'medium').reduce((s, i) => s + i.qty, 0);
    const smallQty = items.filter(i => i.ship === 'small').reduce((s, i) => s + i.qty, 0);
    let fee = 0, desc = [];
    if(longQty > 0) { fee += (longQty * 100); desc.push(`長棍獨立包裹 × ${longQty}支`); }
    if(medQty > 0) { let boxes = Math.ceil(medQty / 6); fee += (boxes * 100); desc.push(`中型道具包裹 × ${boxes}箱`); }
    if(smallQty > 0) { fee += 60; desc.push(`小型包裹`); }
    if(longQty >= 5 || fee >= 300) return { fee: 300, desc: "🚛 訂單大宗：優化改走大榮貨運" };
    return { fee: fee, desc: `物流：${desc.join(' + ')}` };
}

function updatePrices(sub, ship, desc) {
    if(document.getElementById('subTotal')) document.getElementById('subTotal').innerText = `NT$ ${sub.toLocaleString()}`;
    if(document.getElementById('shipFee')) document.getElementById('shipFee').innerText = `NT$ ${ship.toLocaleString()}`;
    if(document.getElementById('shipDesc')) document.getElementById('shipDesc').innerText = desc;
    if(document.getElementById('grandTotal')) document.getElementById('grandTotal').innerText = `NT$ ${(sub + ship).toLocaleString()}`;
    
    const fill = document.getElementById('shipFill');
    const msg = document.getElementById('shipMsg');
    if (fill) fill.style.width = Math.min((sub / 5000) * 100, 100) + '%';
    if (msg) msg.innerText = sub >= 5000 ? "🎉 已享受免運優惠！" : `還差 NT$ ${(5000 - sub).toLocaleString()} 免運`;
}

// 複製並呼叫自訂彈出視窗
function copyOrder() {
    if(cart.length === 0) return;
    let total = document.getElementById('grandTotal').innerText;
    let sub = document.getElementById('subTotal').innerText;
    let ship = document.getElementById('shipFee').innerText;
    let shipD = document.getElementById('shipDesc').innerText;

    let text = "【FPS 道具部 - 客製化估價清單】\n----------------------------------\n";
    cart.forEach((i, idx) => { text += `${idx + 1}. ● ${i.name} × ${i.qty}\n   規格明細：${i.specs}\n   小計金額：NT$ ${(i.price * i.qty).toLocaleString()}\n\n`; });
    text += `----------------------------------\n商品小計：${sub}\n物流運費：${ship} (${shipD})\n預估應付總額：${total}\n\n※ 複製明細後，請私訊粉專下單。`;
    
    navigator.clipboard.writeText(text).then(() => {
        const modal = document.getElementById('customModal');
        if (modal) modal.style.display = 'flex';
    });
}

function closeModal() { 
    const modal = document.getElementById('customModal');
    if (modal) modal.style.display = 'none'; 
}

// 初始化自動讀取
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
});
