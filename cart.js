// 💡 FPS 道具部：全套終極版商品資料庫 (全品項導入專業雙欄/分層排版)
window.db = {
    // 🔥 火舞道具
    fire_staff_cyl: {
        title: "火長棍 (圓柱火頭)", cat: "fire",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-contact-roll.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>棍身採用航太級 7075 高強度鋁棍</li>
                    <li>火頭為 KEVLAR 防火布製作，完整縫製</li>
                    <li>棍身以矽膠膠帶進行防燙處理</li>
                    <li>搭配運動用止滑握把布，方便持握</li>
                    <li>適合新手入門、或是追求輕量速度級玩家</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>19mm * 17mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>10cm 圓柱、5層</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長140cm]約440g(火頭10cm)、500g(火頭15cm)</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">⛓️ 組合棍規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>端頭：</b>19mm * 17mm , 45cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>中段：</b>17mm * 15mm , 46~70cm（總長度120~144cm）</li>
                    <li style="margin-bottom: 4px;">◆ <b>實際握把長度：</b>30~54cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長140cm]約440g(火頭10cm)</li>
                </ul>
            </div>
        `,
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
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-contact-twista.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>棍身採用航太級 7075 高強度鋁棍</li>
                    <li>火頭為 KEVLAR 防火布製作，完整縫製</li>
                    <li>棍身以矽膠膠帶進行防燙處理</li>
                    <li>搭配運動用止滑握把布，方便持握</li>
                    <li>標準款具高吸油量與大火焰特色，適合經驗者；細身款中和重量與火量，約等於15公分圓柱長棍</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>19mm * 17mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>12cm Twista編織（標準款：2.5cm火布／細款：2cm火布）</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長140cm]約565g(標準款)、500g(細款)</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">⛓️ 組合棍規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>端頭：</b>19mm * 17mm , 45cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>中段：</b>17mm * 15mm , 46~70cm（總長度120~144cm）</li>
                    <li style="margin-bottom: 4px;">◆ <b>實際握把長度：</b>30~54cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長140cm]約600g(標準款)</li>
                </ul>
            </div>
        `,
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
        details:`
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>棍身採用航太級 7075 高強度鋁棍</li>
                    <li>火頭為 KEVLAR 防火布製作，完整縫製</li>
                    <li>棍身以矽膠膠帶進行防燙處理</li>
                    <li>搭配運動用止滑握把布，方便持握</li>
                    <li>5cm適合新手入門及大部分使用場合；10cm光軌突出，適合進階經驗者</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>15mm * 13mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>圓柱（5cm：5層／10cm：4層）</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長90cm]約210g(火頭5cm)、255g(火頭10cm)</li>
                </ul>
            </div>
        `,
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
    fire_short_twi: {
        title: "火短棍 (Twista火頭)", cat: "fire",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-short-twista.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>棍身採用航太級 7075 高強度鋁棍</li>
                    <li>火頭為 KEVLAR 防火布製作，完整縫製</li>
                    <li>棍身以矽膠膠帶進行防燙處理</li>
                    <li>搭配運動用止滑握把布，方便持握</li>
                    <li>標準款具高吸油量與大火焰特色，適合進階經驗者；細身款中和重量與火量，約等於5公分圓柱短棍</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>15mm * 13mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>Twista編織（標準款：2cm火布,長6cm／細款：1.3cm火布,長7cm）</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長90cm]約250g(標準款)、215g(細款)</li>
                </ul>
            </div>
        `,
        sub: {
            "火短棍-6cm標準Twista": { price: 1100, ship: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-staff-short-twistanormal6.jpg" },
            "火短棍-7cm細Twista": { price: 1100, ship: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-staff-short-twistathin7.jpg" }
        },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加長2cm": { plus: 200, img: "" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} },
            "組合數量": { "單短組": { mult: 1, img: "" }, "雙短組": { mult: 1.96, img: "" }, "三短組": { mult: 2.85, img: "" } }
        }
    },
    fire_staff_levi: {
        title: "火漂浮棍", cat: "fire",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-leviwand.jpg"],
        details:  `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>棍身採用航太級 7075 高強度鋁棍</li>
                    <li>火頭為 KEVLAR 防火布製作，完整縫製</li>
                    <li>棍身以矽膠膠帶進行防燙處理</li>
                    <li>搭配運動用止滑握把布，方便持握</li>
                    <li>操縱繩採用200磅克維拉風箏線</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>15mm * 13mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>圓柱5cm：5層</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款</li>
                    <li style="margin-bottom: 4px;">◆ <b>操縱繩長度：</b>短繩：45cm（不含線圈/握把）／長繩：300cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長90cm]約210g</li>
                </ul>
            </div>
        `,
        sub: { "火漂浮棍-5cm圓柱火頭": { price: 1000, ship: 'medium', img: "" } },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加厚一層": { plus: 200, img: "" } },
            "握把規格": { "標準款": { plus: 0, img: "" }, "加厚款": { plus: 50, img: "" } },
            "控制繩規格": { "短繩-繩圈": { plus: 0, img: "" }, "短繩-握把": { plus: 200, img: "" },"長繩": { plus: 100, img: "" } },
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} }
        }
    },
    fire_staff_shuriken: {
        title: "火手裡劍", cat: "fire",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-shuriken.jpg"],
        details:  `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>棍身採用2mm+1.5mm加厚型6063鋁棍嵌套製作</li>
                    <li>火頭為 KEVLAR 防火布製作，完整縫製</li>
                    <li>棍身以矽膠膠帶進行防燙處理</li>
                    <li>搭配運動用止滑握把布，方便持握</li>
                    <li>9號大培林穩固內嵌</li>
                    <li>操縱繩採用5mm高張力登山繩</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>（外）19mm * 16mm、（內）16mm * 12mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>2cm火布 Twista編織</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款</li>
                    <li style="margin-bottom: 4px;">◆ <b>操縱繩長度：</b>135cm（不含握把）</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長90cm]約450g</li>
                </ul>
            </div>
        `,
        sub: { "火手裡劍-6cm標準Twista": { price: 1100, ship: 'medium', img: "" } },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加長2cm": { plus: 200, img: "" } },
            "握把規格": { "標準款": { plus: 0, img: "" }, "加厚款": { plus: 50, img: "" } },
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} }
        }
    },
    fire_poi_single: {
        title: "火Poi (純火頭單賣)", cat: "fire", hideExtraSpecs: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-twista6.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>此品項僅販售單顆火頭主體</li>
                    <li>不包含任何繩鍊及握把</li>
                    <li>適用於替換可拆式 Poi 火頭</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>火頭樣式：</b>豆干 / Twista / 圓球 / 猴子球</li>
                    <li style="margin-bottom: 4px;">◆ <b>尺寸選擇：</b>6cm / 8cm</li>
                </ul>
            </div>
        `,
        sub: {
            "火Poi(純火頭)-6cm豆干": { price: 500, ship: 'small', img: "" },
            "火Poi(純火頭)-8cm豆干": { price: 600, ship: 'small', img: "" },
            "火Poi(純火頭)-6cm Twista": { price: 650, ship: 'small', img: "" },
            "火Poi(純火頭)-8cm Twista": { price: 800, ship: 'small', img: "" },
            "火Poi(純火頭)-6cm 圓球": { price: 700, ship: 'small', img: "" },
            "火Poi(純火頭)-8cm 圓球": { price: 900, ship: 'small', img: "" },
            "火Poi(純火頭)-6cm 猴子球": { price: 750, ship: 'small', img: "" },
            "火Poi(純火頭)-8cm 猴子球": { price: 1000, ship: 'small', img: "" }
        }, specs: {}
    },
    fire_poi_det_1: {
        title: "火Poi - 可拆式 (含配件)", cat: "fire",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-thumbnail.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>完整套裝，包含火頭、繩索與握把</li>
                    <li>使用 M3 快接環連接，可靈活拆卸</li>
                    <li>鐵鍊組：白鐵全焊鱔魚目鍊，堅固不壞、永垂不朽</li>
                    <li>克維拉編織繩組：含PU塗層、長纖克維拉編織，手感較為硬挺</li>
                    <li>Technora編織繩組：比克維拉更耐磨、更耐熱，手感較為柔軟</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 鐵鍊組預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>總配置：火頭 — 快接環 — 鐵鍊 — 快接環 — 培林握把</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把：</b>有培林</li>
                    <li style="margin-bottom: 4px;">◆ <b>客製長度：</b>鐵鍊長度35cm；除非特殊要求，否則一律不裁減</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 編織繩組預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>總配置：火頭 — 快接環+編織繩+握把</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把：</b>無培林</li>
                    <li style="margin-bottom: 4px;">◆ <b>客製長度：</b>依據個人臂長調配 (45cm - 60cm)</li>
                </ul>
            </div>
        `,
        sub: {
            "火Poi可拆式-6cm豆干": { price: 500, ship: 'small', img: "" },
            "火Poi可拆式-8cm豆干": { price: 600, ship: 'small', img: "" },
            "火Poi可拆式-6cm Twista": { price: 650, ship: 'small', img: "" },
            "火Poi可拆式-8cm Twista": { price: 800, ship: 'small', img: "" },
            "火Poi可拆式-6cm 圓球": { price: 700, ship: 'small', img: "" },
            "火Poi可拆式-8cm 圓球": { price: 900, ship: 'small', img: "" },
            "火Poi可拆式-6cm 猴子球": { price: 750, ship: 'small', img: "" },
            "火Poi可拆式-8cm 猴子球": { price: 1000, ship: 'small', img: "" }
        },
        specs: {
            "繩練規格": { "鐵鍊(有培林)": { plus: 300, img: "" }, "克維拉編織繩": { plus: 500, img: "" }, "Technora編織繩": { plus: 700, img: "" } },
            "握把規格": { "小握把": { plus: 0, img: "" }, "大握把": { plus: 200, img: "" } },
            "總長度": { "45cm":{plus:0}, "50cm":{plus:0}, "55cm":{plus:0}, "60cm":{plus:0} },
            "組合數量": { "單球組": { mult: 1, img: "" }, "雙球組": { mult: 1.96, img: "" }, "三球組": { mult: 2.85, img: "" } }
        }
    },
    fire_poi_one: {
        title: "火Poi - 一體式 (含配件)", cat: "fire",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-one-thumbnail.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>一體成型編織，採用無五金結構</li>
                    <li>繩練採用10mm長纖克維拉繩</li>
                    <li>繩鍊與火頭交接處以寬5cm防火布縫紉強化，降低斷裂風險</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>8cm 圓球 或 猴子球</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把：</b>無培林</li>
                    <li style="margin-bottom: 4px;">◆ <b>客製長度：</b>依據個人臂長調配 (45cm - 60cm)</li>
                </ul>
            </div>
        `,
        sub: {
            "火Poi一體式-8cm 圓球": { price: 1150, ship: 'small', img: "" },
            "火Poi一體式-8cm 猴子球": { price: 1250, ship: 'small', img: "" }
        },
        specs: {
            "握把規格": { "預設大握把": { plus: 0, img: "" } },
            "總長度": { "45cm":{plus:0}, "50cm":{plus:0}, "55cm":{plus:0}, "60cm":{plus:0} },
            "組合數量": { "單球組": { mult: 1, img: "" }, "雙球組": { mult: 1.96, img: "" }, "三球組": { mult: 2.85, img: "" } }
        }
    },
    fire_meteor_det: {
        title: "火流星 - 可拆式", cat: "fire",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-meteor-thumbnail.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>完整套裝，包含火頭、繩索</li>
                    <li>使用 M3 快接環連接，可靈活拆卸</li>
                    <li>鐵鍊組：白鐵全焊鱔魚目鍊</li>
                    <li>克維拉粗繩組：10mm長纖克維拉繩</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 鐵鍊組預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>總配置：火頭 — 快接環 — 鐵鍊 — 快接環+連接繩+快接環 — 鐵鍊 — 火頭</li>
                    <li style="margin-bottom: 4px;">◆ <b>連接繩：</b>10mm全白登山繩</li>
                    <li style="margin-bottom: 4px;">◆ <b>客製長度：</b>連接繩80cm、鐵鍊長度35cm；除非特殊要求，否則一律不裁減</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 編織繩組預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>總配置：火頭 — 快接環+粗繩+快接環 — 火頭</li>
                    <li style="margin-bottom: 4px;">◆ <b>客製長度：</b>依據個人需求調配 (140 - 180cm)</li>
                </ul>
            </div>
        `,
        sub: {
            "火流星組-6cm豆干": { price: 1000, ship: 'small', img: "" },
            "火流星組-8cm豆干": { price: 1200, ship: 'small', img: "" },
            "火流星組-6cm Twista": { price: 1300, ship: 'small', img: "" },
            "火流星組-8cm Twista": { price: 1600, ship: 'small', img: "" },
            "火流星組-6cm 圓球": { price: 1400, ship: 'small', img: "" },
            "火流星組-8cm 圓球": { price: 1800, ship: 'small', img: "" },
            "火流星組-6cm 猴子球": { price: 1500, ship: 'small', img: "" },
            "火流星組-8cm 猴子球": { price: 2000, ship: 'small', img: "" }
        },
        specs: {
            "繩練規格": { "鐵鍊+連接繩": { plus: 300, img: "" }, "克維拉粗繩": { plus: 500, img: "" } },
            "總長度": { "140cm":{plus:0}, "150cm":{plus:0}, "160cm":{plus:0}, "170cm":{plus:0}, "180cm":{plus:0} }
        }
    },
    fire_mini: {
        title: "小火棒", cat: "fire", hideExtraSpecs: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-torch25.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>點綴型輔助道具</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>總長度：</b>25cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭款式：</b>2.5cm圓柱 / 5cm圓柱 / 3cm Twista</li>
                </ul>
            </div>
        `,
        sub: {
            "小火棒-2.5cm圓柱": { price: 100, ship: 'small', img: "" },
            "小火棒-5cm圓柱": { price: 200, ship: 'small', img: "" },
            "小火棒-3cm Twista": { price: 300, ship: 'small', img: "" },
        }, specs: {}
    },

    // ✨ 練習道具
    prac_staff_std: {
        title: "練習長棍 (標準版)", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-contact-normal.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>兩端採高品質避震結構包覆，掉落不易損傷且降低噪音</li>
                    <li>比照真火長棍的重量與平衡點設計</li>
                    <li>肌肉記憶無縫接軌，室內外皆適宜的絕佳練習夥伴</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>19mm * 17mm (航太 7075 鋁合金)</li>
                    <li style="margin-bottom: 4px;">◆ <b>配重端：</b>耐摔緩衝材質 (可選配加大)</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款</li>
                </ul>
            </div>
        `,
        sub: { "練習長棍-標準版": { price: 1200, ship: 'long', img: "" } },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加大": { plus: 200, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-option-staff-contact-normal.jpg" } },
            "棍身種類": { "一體式": { plus: 0, ship_override: 'long', img: "" }, "組合式": { plus: 600, ship_override: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-contact-collapsible.jpg" } },
            "握把規格": { "標準款": { plus: 0, img: "" }, "加厚款": { plus: 50, img: "" } },
            "總長度": { "120cm":{plus:0}, "125cm":{plus:0}, "130cm":{plus:0}, "135cm":{plus:0}, "140cm":{plus:0}, "145cm":{plus:0}, "150cm":{plus:0} },
            "組合數量": { "單長組": { mult: 1, img: "" }, "雙長組": { mult: 1.96, img: "" } }
        }
    },
    prac_staff_contact: {
        title: "練習長棍 (接觸版)", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-contact-90.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>專為 Contact 玩家設計的高動態慣性版</li>
                    <li>兩側加裝高密度 90mm 配重塊，大幅提升離心力</li>
                    <li>在頸部、手臂滑行時極度穩定，軌跡不易偏移</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>19mm * 17mm (航太 7075 鋁合金)</li>
                    <li style="margin-bottom: 4px;">◆ <b>配重端：</b>90mm 高密度緩衝配重球</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款 (建議選配加厚款)</li>
                </ul>
            </div>
        `,
        sub: { "練習長棍-接觸版": { price: 1500, ship: 'long', img: "" } },
        specs: {
            "棍身種類": { "一體式": { plus: 0, ship_override: 'long', img: "" }, "組合式": { plus: 600, ship_override: 'medium', img: "" } },
            "握把規格": { "標準款": { plus: 0, img: "" }, "加厚款": { plus: 50, img: "" } },
            "總長度": { "120cm":{plus:0}, "125cm":{plus:0}, "130cm":{plus:0}, "135cm":{plus:0}, "140cm":{plus:0}, "145cm":{plus:0}, "150cm":{plus:0} },
            "組合數量": { "單長組": { mult: 1, img: "" }, "雙長組": { mult: 1.96, img: "" } }
        }
    },
    prac_staff_short_std: {
        title: "練習短棍 (標準版)", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-short-normal.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>專為多棍拋接（Double/Triple）頻繁掉落設計</li>
                    <li>採用高韌性輕量管材，堅固耐用</li>
                    <li>兩端配置耐衝擊防護結構，保護道具與地板</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>15mm * 13mm (輕量高硬度鋁管)</li>
                    <li style="margin-bottom: 4px;">◆ <b>配重端：</b>標準緩衝包覆 (可選配加大)</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款</li>
                </ul>
            </div>
        `,
        sub: { "練習短棍-標準版": { price: 600, ship: 'medium', img: "" } },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加大": { plus: 100, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-option-staff-short-normal.jpg" } },
            "握把規格": { "標準款": { plus: 0, img: "" }, "加厚款": { plus: 50, img: "" } },
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} },
            "組合數量": { "單短組": { mult: 1, img: "" }, "雙短組": { mult: 1.96, img: "" }, "三短組": { mult: 2.85, img: "" } }
        }
    },
    prac_staff_short_light: {
        title: "練習短棍 (輕量版)", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-short-light-tpunormal.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>極致輕量化設計，大幅降低長時間訓練的手腕負擔</li>
                    <li>專為高轉速指尖花式與連續拋接打造</li>
                    <li>提供安全純白 TPU 軟管 或 多色炫彩織帶外觀可選</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>核心：</b>超輕量彈性結構</li>
                    <li style="margin-bottom: 4px;">◆ <b>外觀選項：</b>純白 TPU 軟管 / 多色耐磨織帶</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把選項：</b>標準防滑布 / 全版面包覆熱縮套</li>
                </ul>
            </div>
        `,
        sub: { "練習短棍-輕量版": { price: 500, ship: 'medium', img: "" } },
        specs: {
            "火頭規格": { "TPU (僅白色)": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-option-light-tpu.jpg" }, "織帶 (多色可選)": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-option-light-color.jpg" } },
            "握把規格": { "標準": { plus: 0, img: "" }, "全熱縮套": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-short-light-fullcolor.jpg" } },
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} },
            "組合數量": { "單短組": { mult: 1, img: "" }, "雙短組": { mult: 1.96, img: "" }, "三短組": { mult: 2.85, img: "" } }
        }
    },
    prac_poi_std: {
        title: "練習Poi (標準版)", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-poi-normal.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>採用柔軟布料包覆配重，提供最安心的練習手感</li>
                    <li>失誤打到身體不易疼痛，極度安全</li>
                    <li>非常適合新手入門與開發高難度新招式</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>配重端：</b>高緩衝軟質布料包覆</li>
                    <li style="margin-bottom: 4px;">◆ <b>培林選項：</b>可加購防纏繞高速培林</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把選項：</b>小握把 或 大握把</li>
                    <li style="margin-bottom: 4px;">◆ <b>客製長度：</b>依需求客製 (45cm - 60cm)</li>
                </ul>
            </div>
        `,
        sub: { "練習Poi-標準版": { price: 550, ship: 'small', img: "" } },
        specs: {
            "培林規格": { "不加裝培林": { plus: 0, img: "" }, "加裝培林": { plus: 100, img: "" } },
            "握把規格": { "小握把": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-small.jpg" }, "大握把": { plus: 200, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-big.jpg" } },
            "總長度": { "45cm":{plus:0}, "50cm":{plus:0}, "55cm":{plus:0}, "60cm":{plus:0} },
            "組合數量": { "單球組": { mult: 1, img: "" }, "雙球組": { mult: 1.96, img: "" }, "三球組": { mult: 2.85, img: "" } }
        }
    },
    prac_poi_contact: {
        title: "練習Poi (接觸版 90mm)", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-poi-contact90.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>採用 90mm 接觸專用實心球，重心極度平穩</li>
                    <li>轉動慣性絕佳，提供飽滿的拋接手感</li>
                    <li>特別適合身體滾動（Body Roll）與高階拋接招式</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>球體：</b>90mm Contact 專用配重球</li>
                    <li style="margin-bottom: 4px;">◆ <b>總長度：</b>依需求客製 (45cm - 60cm)</li>
                </ul>
            </div>
        `,
        sub: { "練習Poi-接觸版 (90mm)": { price: 800, ship: 'small', img: "" } },
        specs: {
            "總長度": { "45cm":{plus:0}, "50cm":{plus:0}, "55cm":{plus:0}, "60cm":{plus:0} },
            "組合數量": { "單球組": { mult: 1, img: "" }, "雙球組": { mult: 1.96, img: "" }, "三球組": { mult: 2.85, img: "" } }
        }
    },
    prac_meteor: {
        title: "練習流星 (標準版)", cat: "prac", hideExtraSpecs: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-meteor.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>配備經典軟質配重端，打到身體不易受傷</li>
                    <li>連接柔軟且親膚的高強度編織繩，纏繞不刮手</li>
                    <li>適合各類流星技法（Meteor Dart）全方位演練</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>配重端：</b>高緩衝軟質防護球</li>
                    <li style="margin-bottom: 4px;">◆ <b>繩材：</b>親膚抗拉高強度編織繩</li>
                    <li style="margin-bottom: 4px;">◆ <b>客製總長：</b>140cm - 180cm 自由選擇</li>
                </ul>
            </div>
        `,
        sub: { "練習流星-標準版": { price: 1000, ship: 'small', img: "" } },
        specs: { "總長度": { "140cm":{plus:0}, "150cm":{plus:0}, "160cm":{plus:0}, "170cm":{plus:0}, "180cm":{plus:0} } }
    },

    // 📦 專業套組 (拆分獨立項目)
    set_knob_small: {
        title: "培林小握把 (僅白色)", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-small.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>內建專業培林轉速結構，徹底消滅繩索纏繞問題</li>
                    <li>提供 Poi 玩家最滑順的極致運轉感</li>
                    <li>體積精巧，適合指尖控制與細膩操作</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>款式：</b>小尺寸橢圓結構</li>
                    <li style="margin-bottom: 4px;">◆ <b>顏色：</b>純白色</li>
                    <li style="margin-bottom: 4px;">◆ <b>五金：</b>內含高轉速微型培林</li>
                </ul>
            </div>
        `,
        sub: { "培林小握把": { price: 180, ship: 'small', img: "" } }, specs: {}
    },
    set_knob_big: {
        title: "培林大握把 (顏色隨機)", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-big.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>經典圓形大球握把，配重極佳</li>
                    <li>提供拋接（Toss）時最飽滿扎實的抓取手感</li>
                    <li>內含培林結構，高速旋轉不打結</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>款式：</b>大尺寸正圓結構</li>
                    <li style="margin-bottom: 4px;">◆ <b>顏色：</b>依現場庫存隨機出貨</li>
                    <li style="margin-bottom: 4px;">◆ <b>五金：</b>內含高轉速微型培林</li>
                </ul>
            </div>
        `,
        sub: { "培林大握把": { price: 300, ship: 'small', img: "" } }, specs: {}
    },
    set_chain_kevlar: {
        title: "克維拉編織繩", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-poi-blackkevlar.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>高抗拉、耐高溫火燒的專用克維拉（Kevlar）繩索</li>
                    <li>取代傳統鐵鍊，手感柔軟不生鏽</li>
                    <li>減少纏繞手臂時的金屬摩擦與燙傷風險</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>材質：</b>純 Kevlar 防火編織</li>
                    <li style="margin-bottom: 4px;">◆ <b>適用：</b>火 Poi 連接替換</li>
                </ul>
            </div>
        `,
        sub: { "克維拉編織繩": { price: 500, ship: 'small', img: "" } }, specs: {}
    },
    set_chain_technora: {
        title: "Technora編織繩", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-poi-technora.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>航太級 Technora 進階黑繩，擁有極致高拉力與抗熱性</li>
                    <li>比傳統克維拉更耐磨耗，壽命更長</li>
                    <li>黑色外觀在舞台上具備更好的隱形視覺效果</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>材質：</b>Technora 高分子耐熱纖維</li>
                    <li style="margin-bottom: 4px;">◆ <b>外觀：</b>進階霧黑質感</li>
                </ul>
            </div>
        `,
        sub: { "Technora編織繩": { price: 700, ship: 'small', img: "" } }, specs: {}
    },
    set_meteor_kevlar: {
        title: "流星克維拉繩", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-meteor-kevlar.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>火流星專用的加厚抗拉克維拉編織粗繩</li>
                    <li>提供身體纏繞（Wraps）時最舒適的安全防護</li>
                    <li>耐火高溫，取代全鐵鍊帶來的手感負擔</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>材質：</b>Kevlar 防火編織加粗版</li>
                    <li style="margin-bottom: 4px;">◆ <b>適用：</b>火流星專用長繩</li>
                </ul>
            </div>
        `,
        sub: { "流星克維拉繩": { price: 700, ship: 'small', img: "" } }, specs: {}
    },
    set_meteor_nochain: {
        title: "流星鐵鍊連接繩", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-meteor-nochain.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>火流星基礎轉接專用之高強度連接繩索</li>
                    <li>適合習慣將鐵鍊與軟繩拼接混用的流星玩家</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>材質：</b>高強度混紡拉力繩</li>
                    <li style="margin-bottom: 4px;">◆ <b>適用：</b>銜接五金鐵鍊用之中段繩</li>
                </ul>
            </div>
        `,
        sub: { "流星鐵鍊連接繩": { price: 100, ship: 'small', img: "" } }, specs: {}
    },
    set_chain_normal: {
        title: "高強度鐵鍊組", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-chain.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>職人專用抗高溫不鏽鋼連接鐵鍊組</li>
                    <li>提供最經典、耐用的火舞道具銜接方案</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>材質：</b>抗高溫金屬處理</li>
                    <li style="margin-bottom: 4px;">◆ <b>內含：</b>鐵鍊本體及兩端銜接用快拆金屬件</li>
                </ul>
            </div>
        `,
        sub: { "鐵鍊組": { price: 130, ship: 'small', img: "" } }, specs: {}
    },

    // ⚙️ 耗材配件 (拆分獨立項目)
    parts_grip_normal: {
        title: "握把布 (普通款)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-grip-normal.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 配件介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>長棍與各類道具日常補給之基本款防滑把手布</li>
                    <li>手汗或污漬磨耗後，可自行輕鬆更換保持最佳手感</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>款式：</b>標準薄款防滑</li>
                    <li style="margin-bottom: 4px;">◆ <b>出貨包裝：</b>單捲裝</li>
                </ul>
            </div>
        `,
        sub: { "握把布 (普通款)": { price: 20, ship: 'small', img: "" } }, specs: {}
    },
    parts_grip_thick: {
        title: "握把布 (厚款)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-grip-thick.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 配件介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>內襯發泡吸震層，大幅提升抓握舒適度</li>
                    <li>超強吸汗防滑，Contact 身體接觸玩家極致推薦</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>款式：</b>加厚吸汗龍骨結構</li>
                    <li style="margin-bottom: 4px;">◆ <b>出貨包裝：</b>單捲裝</li>
                </ul>
            </div>
        `,
        sub: { "握把布 (厚款)": { price: 60, ship: 'small', img: "" } }, specs: {}
    },
    parts_knob_small: {
        title: "握把球 - 小 (橢圓)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-knob-small.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 配件介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>精巧好捏的基礎橢圓握把塑料球</li>
                    <li>可供玩家替換遺失或破損之原有握把，此版本【無內建培林】</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>結構：</b>純塑料殼體 (無培林)</li>
                    <li style="margin-bottom: 4px;">◆ <b>造型：</b>小巧橢圓</li>
                </ul>
            </div>
        `,
        sub: { "握把球-小": { price: 100, ship: 'small', img: "" } }, specs: {}
    },
    parts_knob_big: {
        title: "握把球 - 大 (顏色隨機)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-knob-big.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 配件介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>圓形飽滿大把手球，增加拋接穩固性</li>
                    <li>可供玩家替換耗損品，顏色以現場實際庫存隨機出貨，此版本【無內建培林】</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>結構：</b>純橡膠/塑料殼體 (無培林)</li>
                    <li style="margin-bottom: 4px;">◆ <b>造型：</b>大尺寸正圓</li>
                </ul>
            </div>
        `,
        sub: { "握把球-大": { price: 200, ship: 'small', img: "" } }, specs: {}
    },
    parts_chain_35: {
        title: "不鏽鋼鐵鍊 (35cm)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-chain.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 配件介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>抗拉耐高溫專用不鏽鋼鐵鍊條</li>
                    <li>適合 DIY 玩家自行裁切修改道具長度</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>材質：</b>不鏽鋼金屬</li>
                    <li style="margin-bottom: 4px;">◆ <b>出貨長度：</b>單條固定 35cm</li>
                </ul>
            </div>
        `,
        sub: { "鐵鍊 (35cm)": { price: 70, ship: 'small', img: "" } }, specs: {}
    },
    parts_quicklink: {
        title: "抗拉快接環 (M3)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-quicklink.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 配件介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>道具銜接極度穩固的 M3 規格金屬快拆環</li>
                    <li>帶螺帽鎖緊機制，確保高速離心力下不會鬆脫飛出</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>規格：</b>M3 尺寸</li>
                    <li style="margin-bottom: 4px;">◆ <b>出貨包裝：</b>單顆計價</li>
                </ul>
            </div>
        `,
        sub: { "快接環 (M3)": { price: 35, ship: 'small', img: "" } }, specs: {}
    },
    parts_bearings: {
        title: "高拉力培林 (#7)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-bearings.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 配件介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>專為高強度拋接把手設計之轉速核心</li>
                    <li>抗拉力高達 250kg，確保 Poi 於極限迴旋時的安全與順暢</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>型號：</b>#7 工業級培林</li>
                    <li style="margin-bottom: 4px;">◆ <b>安全係數：</b>抗拉 250kg</li>
                </ul>
            </div>
        `,
        sub: { "培林 (#7)": { price: 20, ship: 'small', img: "" } }, specs: {}
    },

    // 🛠️ 管材與防火布 (拆分獨立項目)
    mats_alu_19: {
        title: "7075 航太級鋁棍 (19*17mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=7075+Aluminum+19mm"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>航太級高強度鋁管，抗彎折與耐衝擊性能優異</li>
                    <li>適合 DIY 職人自行製作火長棍、練習長棍之中軸</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>材質：</b>7075-T6 鋁合金</li>
                    <li style="margin-bottom: 4px;">◆ <b>外徑/內徑：</b>19mm / 17mm (管壁 1mm 加強)</li>
                    <li style="margin-bottom: 4px;">◆ <b>出貨長度：</b>最高 150cm (依物流規範)</li>
                </ul>
            </div>
        `,
        sub: { "7075鋁棍 19*17mm": { price: 500, ship: 'long', img: "" } }, specs: {}
    },
    mats_alu_15: {
        title: "7075 航太級鋁棍 (15*13mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=7075+Aluminum+15mm"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>15mm 輕量化規格，完美兼顧硬度與重量負擔</li>
                    <li>College 短棍、雙短棍等多棍技巧道具之高規格首選管材</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>材質：</b>7075-T6 鋁合金</li>
                    <li style="margin-bottom: 4px;">◆ <b>外徑/內徑：</b>15mm / 13mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>出貨長度：</b>最高 100cm</li>
                </ul>
            </div>
        `,
        sub: { "7075鋁棍 15*13mm": { price: 250, ship: 'medium', img: "" } }, specs: {}
    },
    mats_alu_13: {
        title: "7075 航太級鋁棍 (13*11mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=7075+Aluminum+13mm"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>內徑特殊加厚的高彈性細管結構</li>
                    <li>適用於需要極端輕巧或特殊拼接需求的道具改裝</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>材質：</b>7075-T6 鋁合金</li>
                    <li style="margin-bottom: 4px;">◆ <b>外徑/內徑：</b>13mm / 11mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>出貨長度：</b>最高 100cm</li>
                </ul>
            </div>
        `,
        sub: { "7075鋁棍 13*11mm": { price: 250, ship: 'medium', img: "" } }, specs: {}
    },
    mats_cloth_13: {
        title: "頂級克維拉防火布 (13mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=Kevlar+Wick+13mm"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>100% Kevlar 純克維拉纖維高壓編織防火織帶</li>
                    <li>吸油率高、耐燃燒次數極大化，不輕易炭化粉碎</li>
                    <li>13mm 細寬度適合做小型點綴、手指火把或細部編織</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>寬度：</b>13mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>計價單位：</b>每 1 公尺 (100cm)</li>
                </ul>
            </div>
        `,
        sub: { "防火布 13mm (每公尺)": { price: 100, ship: 'small', img: "" } }, specs: {}
    },
    mats_cloth_19: {
        title: "頂級克維拉防火布 (19mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=Kevlar+Wick+19mm"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>100% Kevlar 純克維拉纖維高壓編織防火織帶</li>
                    <li>吸油率高、耐燃燒次數極大化，不輕易炭化粉碎</li>
                    <li>19mm 為最常見泛用寬度，適合製作 Poi 或火短棍</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>寬度：</b>19mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>計價單位：</b>每 1 公尺 (100cm)</li>
                </ul>
            </div>
        `,
        sub: { "防火布 19mm (每公尺)": { price: 120, ship: 'small', img: "" } }, specs: {}
    },
    mats_cloth_25: {
        title: "頂級克維拉防火布 (25mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=Kevlar+Wick+25mm"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>100% Kevlar 純克維拉纖維高壓編織防火織帶</li>
                    <li>吸油率高、耐燃燒次數極大化，不輕易炭化粉碎</li>
                    <li>25mm 寬度適合編織中大型猴子球或纏繞火棍</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>寬度：</b>25mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>計價單位：</b>每 1 公尺 (100cm)</li>
                </ul>
            </div>
        `,
        sub: { "防火布 25mm (每公尺)": { price: 140, ship: 'small', img: "" } }, specs: {}
    },
    mats_cloth_50: {
        title: "頂級克維拉防火布 (50mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=Kevlar+Wick+50mm"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>100% Kevlar 純克維拉纖維高壓編織防火織帶</li>
                    <li>吸油率高、耐燃燒次數極大化，不輕易炭化粉碎</li>
                    <li>50mm 加寬版面，適合快速疊代捲繞巨型火長棍火頭</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>寬度：</b>50mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>計價單位：</b>每 1 公尺 (100cm)</li>
                </ul>
            </div>
        `,
        sub: { "防火布 50mm (每公尺)": { price: 200, ship: 'small', img: "" } }, specs: {}
    },
    mats_rope_10: {
        title: "耐火克維拉圓繩 (10mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=Kevlar+Rope+10mm"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>高密度克維拉實心圓繩，吸油極度飽滿</li>
                    <li>立體結構非常適合 DIY 玩家自行編織火猴子球 (Monkey Fist) 或其他特殊火頭</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>結構：</b>10mm 實心圓型編織</li>
                    <li style="margin-bottom: 4px;">◆ <b>計價單位：</b>每 1 公尺 (100cm)</li>
                </ul>
            </div>
        `,
        sub: { "防火布 10mm圓繩 (每公尺)": { price: 150, ship: 'small', img: "" } }, specs: {}
    }
};

// 💡 購物車底層邏輯
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
