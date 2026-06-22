// 💡 FPS 道具部：全套終極版商品資料庫 (支援多圖預覽與獨立配件)
const db = {
    // 🔥 火舞道具
    fire_staff_cyl: {
        title: "火長棍 (圓柱火頭)", cat: "fire",
        // 💡 升級為陣列，支援多張照片！
        images: [
            "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-contact-roll.jpg",
            "https://via.placeholder.com/400x300?text=火頭細節特寫",
            "https://via.placeholder.com/400x300?text=握把材質特寫"
        ],
        details: "● <b>核心材質：</b>航太級 7075-T6 加厚高強度鋁合金棍身，防撞抗彎性極佳。<br>● <b>火頭工藝：</b>嚴選 Kevlar 防火布緊密圓柱層疊捲繞。<br>● <b>握把配備：</b>加厚吸汗止滑 EPDM 握把布，適合 Contact 技術磨練。",
        sub: {
            "火長棍-10cm圓柱火頭": { price: 1900, ship: 'long', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-staff-contact-roll10.jpg" },
            "火長棍-15cm圓柱火頭": { price: 2300, ship: 'long', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-staff-contact-roll15.jpg" }
        },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加厚一層": { plus: 400, img: "" } },
            "棍身種類": { "一體式": { plus: 0, ship_override: 'long', img: "" }, "組合式": { plus: 600, ship_override: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-contact-collapsible.jpg" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
            "總長度": { "120cm":{plus:0}, "125cm":{plus:0}, "130cm":{plus:0}, "135cm":{plus:0}, "140cm":{plus:0}, "145cm":{plus:0}, "150cm":{plus:0} },
            "組合數量": { "單長組": { mult: 1, img: "" }, "雙長組": { mult: 1.96, img: "" } }
        }
    },
    fire_staff_twi: {
        title: "火長棍 (Twista火頭)", cat: "fire",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-contact-twista.jpg", "https://via.placeholder.com/400x300?text=Twista編織細節"],
        details: "● <b>火頭工藝：</b>獨家 Twista 空心立體編織技法，燃燒時火焰更具侵略性！<br>● <b>防護機制：</b>交接處採耐高溫全包覆防護，大幅延長棍身壽命。<br>● <b>手感特點：</b>動態風阻配重特殊優化，適合大火勢與高速迴旋。",
        sub: {
            "火長棍-12cm 標準Twista": { price: 2700, ship: 'long', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-staff-contact-twistanormal12.jpg" },
            "火長棍-12cm 細Twista": { price: 2500, ship: 'long', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-staff-contact-twistathin12.jpg" }
        },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加長2cm": { plus: 300, img: "" } },
            "棍身種類": { "一體式": { plus: 0, ship_override: 'long', img: "" }, "組合式": { plus: 600, ship_override: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-contact-collapsible.jpg" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
            "總長度": { "120cm":{plus:0}, "125cm":{plus:0}, "130cm":{plus:0}, "135cm":{plus:0}, "140cm":{plus:0}, "145cm":{plus:0}, "150cm":{plus:0} },
            "組合數量": { "單長組": { mult: 1, img: "" }, "雙長組": { mult: 1.96, img: "" } }
        }
    },
    fire_short_cyl: {
        title: "火短棍 (圓柱火頭)", cat: "fire",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-short-roll.jpg"],
        details: "● <b>核心材質：</b>15mm 高硬度輕薄鋁管，完美平衡多棍控制負擔。<br>● <b>適用技巧：</b>專為雙短棍及三短棍技巧研發，軸向轉動極度輕靈。",
        sub: {
            "火短棍-5cm圓柱火頭": { price: 950, ship: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-staff-short-roll5.jpg" },
            "火短棍-10cm圓柱火頭": { price: 1250, ship: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-staff-short-roll10.jpg" }
        },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加厚一層": { plus: 200, img: "" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} },
            "組合數量": { "單短組": { mult: 1, img: "" }, "雙短組": { mult: 1.96, img: "" }, "三短組": { mult: 2.85, img: "" } }
        }
    },

    // ✨ 練習道具 (部分省略示範，實際運用請依此邏輯補齊)
    prac_staff_std: {
        title: "練習長棍 (標準版)", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-contact-normal.jpg"],
        details: "● <b>安全防護：</b>兩端採高品質避震結構包覆，掉落不易造成損傷或噪音。<br>● <b>極佳手感：</b>比照真火長棍重量與平衡點設計，肌肉記憶無縫接軌。",
        sub: { "練習長棍-標準版": { price: 1200, ship: 'long', img: "" } },
        specs: {
            "兩端加大": { "不需加大": { plus: 0, img: "" }, "加大": { plus: 200, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-option-staff-contact-normal.jpg" } },
            "棍身種類": { "一體式": { plus: 0, ship_override: 'long', img: "" }, "組合式": { plus: 600, ship_override: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-contact-collapsible.jpg" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
            "總長度": { "120cm":{plus:0}, "125cm":{plus:0}, "130cm":{plus:0}, "135cm":{plus:0}, "140cm":{plus:0}, "145cm":{plus:0}, "150cm":{plus:0} },
            "組合數量": { "單長組": { mult: 1, img: "" }, "雙長組": { mult: 1.96, img: "" } }
        }
    },

    // 📦 專業套組 (拆分獨立)
    set_knob_small: {
        title: "培林小握把 (白)", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-small.jpg"],
        details: "● 提供最高速的培林旋轉體驗，適合 Poi 玩家。",
        sub: { "培林小握把": { price: 180, ship: 'small', img: "" } }, specs: {}
    },
    set_knob_big: {
        title: "培林大握把", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-big.jpg"],
        details: "● 圓潤飽滿的握持感，適合進階拋接。",
        sub: { "培林大握把": { price: 300, ship: 'small', img: "" } }, specs: {}
    },
    set_chain_kit: {
        title: "專業鐵鍊組", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-chain.jpg"],
        details: "● 包含安全快接與抗高溫鐵鍊。",
        sub: { "鐵鍊組": { price: 130, ship: 'small', img: "" } }, specs: {}
    },
    
    // ⚙️ 耗材配件 (拆分獨立)
    parts_grip_normal: {
        title: "握把布 (普通款)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-grip-normal.jpg"],
        details: "● 日常更換耗材，保持最佳手感。",
        sub: { "普通握把布": { price: 20, ship: 'small', img: "" } }, specs: {}
    },
    parts_grip_thick: {
        title: "握把布 (加厚吸汗款)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-grip-thick.jpg"],
        details: "● 強效吸汗防滑，Contact 玩家首選。",
        sub: { "加厚握把布": { price: 60, ship: 'small', img: "" } }, specs: {}
    },
    parts_quicklink: {
        title: "快接環 (M3)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-quicklink.jpg"],
        details: "● 安全穩固的金屬連接環。",
        sub: { "M3快接環": { price: 35, ship: 'small', img: "" } }, specs: {}
    },

    // 🛠️ 管材防火布 (拆分獨立)
    mats_alu_19: {
        title: "7075鋁合金管 (19*17mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=7075鋁管"],
        details: "● 航太級高強度鋁管，長度 150cm。",
        sub: { "19mm鋁管": { price: 500, ship: 'long', img: "" } }, specs: {}
    },
    mats_kevlar_50: {
        title: "純 Kevlar 防火布 (50mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=防火布"],
        details: "● 寬度 50mm，單位：每公尺。",
        sub: { "50mm防火布": { price: 200, ship: 'small', img: "" } }, specs: {}
    }
};

// 💡 購物車核心邏輯保持不變
let cart = JSON.parse(localStorage.getItem('fps_cart')) || [];

function saveCart() { localStorage.setItem('fps_cart', JSON.stringify(cart)); }
function toggleCart(show) {
    const drawer = document.getElementById('cartDrawer');
    if(drawer) { if(show) drawer.classList.add('open'); else drawer.classList.remove('open'); }
}
function removeFromCart(id) { cart = cart.filter(i => i.id !== id); saveCart(); renderCart(); }

function renderCart() {
    const list = document.getElementById('cartList');
    const navCount = document.getElementById('navCartCount');
    if(navCount) navCount.innerText = cart.reduce((sum, i) => sum + i.qty, 0);

    if(!list) return;

    let subTotal = 0;
    if(cart.length === 0) {
        list.innerHTML = `<p style="color:#999; text-align:center; padding: 20px 0;">詢價清單尚無道具</p>`;
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
            <span class="btn-remove" onclick="removeFromCart(${i.id})">移除</span>
        </div>`;
    }).join('');

    const shipInfo = calcShippingEngine(cart, subTotal);
    updatePrices(subTotal, shipInfo.fee, shipInfo.desc);
}

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
    return { fee: fee, desc: `優化物流：${desc.join(' + ')}` };
}

function updatePrices(sub, ship, desc) {
    if(document.getElementById('subTotal')) document.getElementById('subTotal').innerText = `NT$ ${sub.toLocaleString()}`;
    if(document.getElementById('shipFee')) document.getElementById('shipFee').innerText = `NT$ ${ship.toLocaleString()}`;
    if(document.getElementById('shipDesc')) document.getElementById('shipDesc').innerText = desc;
    if(document.getElementById('grandTotal')) document.getElementById('grandTotal').innerText = `NT$ ${(sub + ship).toLocaleString()}`;
    if(document.getElementById('shipFill')) {
        const percent = Math.min((sub / 5000) * 100, 100);
        document.getElementById('shipFill').style.width = percent + '%';
        document.getElementById('shipMsg').innerText = sub >= 5000 ? "🎉 已享受免運費優惠！" : `還差 NT$ ${(5000 - sub).toLocaleString()} 即可享有免運`;
    }
}

function copyOrder() {
    if(cart.length === 0) return alert("清單是空的，請先加入道具！");
    let total = document.getElementById('grandTotal').innerText, sub = document.getElementById('subTotal').innerText;
    let ship = document.getElementById('shipFee').innerText, shipD = document.getElementById('shipDesc').innerText;

    let text = "【FPS 道具部 - 客製化估價清單】\n----------------------------------\n";
    cart.forEach((i, idx) => { text += `${idx + 1}. ● ${i.name} × ${i.qty}\n   規格明細：${i.specs}\n   小計金額：NT$ ${(i.price * i.qty).toLocaleString()}\n\n`; });
    text += `----------------------------------\n商品小計：${sub}\n物流運費：${ship} (${shipD})\n預估應付總額：${total}\n\n※ 此明細為線上估價試算，最終確認以粉專溝通為準。`;
    
    navigator.clipboard.writeText(text).then(() => { document.getElementById('customModal').style.display = 'flex'; })
    .catch(err => { alert("複製失敗，請手動全選明細複製。"); });
}

function closeModal() { document.getElementById('customModal').style.display = 'none'; }
document.addEventListener("DOMContentLoaded", renderCart);
