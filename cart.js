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
                    <li>搭配運動用止滑握把布</li>
                    <li>適合新手入門、或是追求輕量速度級玩家</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>19mm * 17mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>10cm 圓柱、5層</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款 ※加厚+25g</li>
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
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長140cm]約470g(火頭10cm)</li>
                </ul>
            </div>
        `,
        sub: {
            "火長棍-10cm圓柱火頭": { price: 1900, ship: 'long', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-staff-contact-roll10.jpg" },
            "火長棍-15cm圓柱火頭": { price: 2300, ship: 'long', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-staff-contact-roll15.jpg" }
        },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加厚一層": { plus: 400, img: "" } },
            "棍身種類": { "一體式": { plus: 0, ship_override: 'long', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-contact-onepiece.jpg" }, "組合式": { plus: 500, ship_override: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-contact-collapsible.jpg" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
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
                    <li>搭配運動用止滑握把布</li>
                    <li>標準款具高吸油量與大火焰特色，適合經驗者；細身款中和重量與火量，約等於15公分圓柱長棍</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>19mm * 17mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>12cm Twista編織（標準款：2.5cm火布／細款：2cm火布）</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款 ※加厚+25g</li>
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
            "棍身種類": { "一體式": { plus: 0, ship_override: 'long', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-contact-onepiece.jpg" }, "組合式": { plus: 500, ship_override: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-contact-collapsible.jpg" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
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
                    <li>搭配運動用止滑握把布</li>
                    <li>5cm適合新手入門及大部分使用場合；10cm光軌突出，適合進階經驗者</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>15mm * 13mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>圓柱（5cm：5層／10cm：4層）</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款 ※加厚+12g</li>
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
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
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
                    <li>搭配運動用止滑握把布</li>
                    <li>標準款具高吸油量與大火焰特色，適合進階經驗者；細身款中和重量與火量，約等於5公分圓柱短棍</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>15mm * 13mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>Twista編織（標準款：2cm火布,長6cm／細款：1.3cm火布,長7cm）</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款 ※加厚+12g/li>
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
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
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
                    <li>搭配運動用止滑握把布</li>
                    <li>操縱繩採用200磅克維拉風箏線</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>15mm * 13mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>圓柱5cm：5層</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款 ※加厚+12g/li>
                    <li style="margin-bottom: 4px;">◆ <b>操縱繩長度：</b>短繩：45cm（不含線圈/握把）／長繩：300cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長90cm]約210g</li>
                </ul>
            </div>
        `,
        sub: { "火漂浮棍-5cm圓柱火頭": { price: 1000, ship: 'medium', img: "" } },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加厚一層": { plus: 200, img: "" } },
            "握把規格": { "標準款": { plus: 0, img: "" }, "加厚款": { plus: 0, img: "" } },
            "控制繩規格": { "短繩-繩圈": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-leviwand-shortring.jpg" }, "短繩-握把": { plus: 200, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-leviwand-shortknob.jpg" },"長繩": { plus: 100, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-leviwand-long.jpg" } },
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
                    <li>搭配運動用止滑握把布</li>
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
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款 ※加厚+12g</li>
                    <li style="margin-bottom: 4px;">◆ <b>操縱繩長度：</b>135cm（不含握把）</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長90cm]約450g</li>
                </ul>
            </div>
        `,
        sub: { "火手裡劍-6cm標準Twista": { price: 1100, ship: 'medium', img: "" } },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加長2cm": { plus: 200, img: "" } },
            "握把規格": { "標準款": { plus: 0, img: "" }, "加厚款": { plus: 0, img: "" } },
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} }
        }
    },
    fire_poi_single: {
        title: "火Poi (僅火頭)", cat: "fire", hideExtraSpecs: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-twista6.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>火頭為 KEVLAR 防火布製作，完整縫製</li>
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
            "火Poi(純火頭)-6cm豆干": { price: 500, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-cathedral6.jpg" },
            "火Poi(純火頭)-8cm豆干": { price: 600, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-cathedral8.jpg" },
            "火Poi(純火頭)-6cm Twista": { price: 650, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-twista6.jpg" },
            "火Poi(純火頭)-8cm Twista": { price: 800, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-twista8.jpg" },
            "火Poi(純火頭)-6cm 圓球": { price: 700, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-ball6.jpg" },
            "火Poi(純火頭)-8cm 圓球": { price: 900, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-ball8.jpg" },
            "火Poi(純火頭)-6cm 猴子球": { price: 750, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-monkey6.jpg" },
            "火Poi(純火頭)-8cm 猴子球": { price: 1000, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-monkey8.jpg" }
        }, specs: {}
    },
    fire_poi_det_1: {
        title: "火Poi - 可拆式 (含配件)", cat: "fire",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-thumbnail.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>火頭為 KEVLAR 防火布製作，完整縫製</li>
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
                    <li style="margin-bottom: 4px;">◆ <b>握把：</b>有培林（小握把僅白色、大握把顏色以現貨為主）</li>
                    <li style="margin-bottom: 4px;">◆ <b>客製長度：</b>鐵鍊長度35cm；除非特殊要求，否則一律不裁剪</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 編織繩組預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>總配置：火頭 — 快接環+編織繩+握把</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把：</b>有培林（小握把僅白色、大握把顏色以現貨為主）</li>
                    <li style="margin-bottom: 4px;">◆ <b>客製長度：</b>依據個人臂長調配 (45cm - 60cm)</li>
                </ul>
            </div>
        `,
        sub: {
            "火Poi可拆式-6cm豆干": { price: 500, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-cathedral6.jpg" },
            "火Poi可拆式-8cm豆干": { price: 600, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-cathedral8.jpg" },
            "火Poi可拆式-6cm Twista": { price: 650, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-twista6.jpg" },
            "火Poi可拆式-8cm Twista": { price: 800, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-twista8.jpg" },
            "火Poi可拆式-6cm 圓球": { price: 700, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-ball6.jpg" },
            "火Poi可拆式-8cm 圓球": { price: 900, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-ball8.jpg" },
            "火Poi可拆式-6cm 猴子球": { price: 750, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-monkey6.jpg" },
            "火Poi可拆式-8cm 猴子球": { price: 1000, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-monkey8.jpg" }
        },
        specs: {
            "繩鍊規格": { "鐵鍊組": { plus: 250, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-poi-chain.jpg" }, "克維拉編織繩": { plus: 400, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-poi-blackkevlar.jpg" }, "Technora編織繩": { plus: 600, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-poi-technora.jpg" } },
            "握把規格": { "小握把": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-knob-small-s.jpg" }, "大握把": { plus: 100, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-knob-big-s.jpg" } },
            "總長度": { "45cm":{plus:0}, "50cm":{plus:0}, "55cm":{plus:0}, "60cm":{plus:0} },
            "組合數量": { "單球組": { mult: 1, img: "" }, "雙球組": { mult: 1.96, img: "" }, "三球組": { mult: 2.85, img: "" } }
        }
    },
    fire_poi_one: {
        title: "火Poi - 一體式 (含配件)", cat: "fire",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-one-monkey.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>一體成型編織，採用無五金結構</li>
                    <li>繩鍊採用10mm克維拉高張力繩，手感偏硬</li>
                    <li>繩鍊與火頭交接處以寬5cm防火布縫紉強化，降低斷裂風險</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>8cm 圓球 或 猴子球</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把：</b>大型、無培林（顏色以現貨為主）</li>
                    <li style="margin-bottom: 4px;">◆ <b>客製長度：</b>依據個人臂長調配 (45cm - 60cm)</li>
                </ul>
            </div>
        `,
        sub: {
            "火Poi一體式-8cm 圓球": { price: 1150, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-one-ball.jpg" },
            "火Poi一體式-8cm 猴子球": { price: 1250, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-one-monkey.jpg" }
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
                    <li>克維拉粗繩組：10mm克維拉高張力繩</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 鐵鍊組預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>總配置：火頭 — 快接環 — 鐵鍊 — 快接環+連接繩+快接環 — 鐵鍊 — 火頭</li>
                    <li style="margin-bottom: 4px;">◆ <b>鐵鍊連接繩：</b>11mm白色登山繩 ※白繩根據進貨狀況偶有點綴配色變動</li>
                    <li style="margin-bottom: 4px;">◆ <b>客製長度：</b>連接繩80cm、鐵鍊長度35cm；除非特殊要求，否則一律不裁剪</li>
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
            "火流星組-6cm豆干": { price: 1000, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-cathedral6.jpg" },
            "火流星組-8cm豆干": { price: 1200, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-cathedral8.jpg" },
            "火流星組-6cm Twista": { price: 1300, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-twista6.jpg" },
            "火流星組-8cm Twista": { price: 1600, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-twista8.jpg" },
            "火流星組-6cm 圓球": { price: 1400, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-ball6.jpg" },
            "火流星組-8cm 圓球": { price: 1800, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-ball8.jpg" },
            "火流星組-6cm 猴子球": { price: 1500, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-monkey6.jpg" },
            "火流星組-8cm 猴子球": { price: 2000, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-monkey8.jpg" }
        },
        specs: {
            "繩鍊規格": { "鐵鍊+連接繩": { plus: 300, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-meteor-chain.jpg" }, "克維拉粗繩": { plus: 500, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-meteor-kevlar.jpg" } },
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
                    <li>棍身採用航太級 7075 高強度鋁棍</li>
                    <li>搭配運動用止滑握把布</li>
                    <li>頭端以3D列印打造，採用高韌性耐磨TPU材質</li>
                    <li>頂部完全覆蓋，無金屬外露</li>
                    <li>靈活拆裝配重環，適用多種需求</li>
                    <li style="list-style: none; text-indent: -1.2em; margin-top: 8px;">※為延長其壽命，建議保持乾燥，表面可使用清水或一般酒精清潔，並存放於乾燥陰涼處</li>
                    <li style="list-style: none; text-indent: -1.2em;">※長期使用後表面微幅泛黃、粗糙與毛邊，係屬正常現象，不影響實際強度</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>19mm * 17mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>3D列印 TPU印製；直徑6cm，標準款長10cm／配重環長5cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款 ※加厚+25g</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長140cm]約480g(標準款)；單邊火頭約120g，單個配重環50g</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">⛓️ 組合棍規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>端頭：</b>19mm * 17mm , 45cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>中段：</b>17mm * 15mm , 46~70cm（總長度120~144cm）</li>
                    <li style="margin-bottom: 4px;">◆ <b>實際握把長度：</b>30~54cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長140cm]約510g(標準款)</li>
                </ul>
            </div>
        `,
        sub: { "練習長棍-標準版": { price: 1100, ship: 'long', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-contact-normal.jpg" } },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加大": { plus: 200, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-dayprop-staff-contact-weight.jpg" } },
            "棍身種類": { "一體式": { plus: 0, ship_override: 'long', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-contact-onepiece.jpg" }, "組合式": { plus: 500, ship_override: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-contact-collapsible.jpg" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
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
                    <li>棍身採用航太級 7075 高強度鋁棍</li>
                    <li>搭配運動用止滑握把布</li>
                    <li>頭端以3D列印打造，採用高韌性耐磨TPU材質</li>
                    <li>頂部完全覆蓋，無金屬外露</li>
                    <li>球型端頭大幅提升離心力，擬龍棍手感</li>
                    <li style="list-style: none; text-indent: -1.2em; margin-top: 8px;">※為延長其壽命，建議保持乾燥，表面可使用清水或一般酒精清潔，並存放於乾燥陰涼處</li>
                    <li style="list-style: none; text-indent: -1.2em;">※長期使用後表面微幅泛黃、粗糙與毛邊，係屬正常現象，不影響實際強度</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>19mm * 17mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>3D列印 TPU印製；直徑90mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款 ※加厚+25g</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長140cm]約600g；單邊火頭約180g</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">⛓️ 組合棍規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>端頭：</b>19mm * 17mm , 45cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>中段：</b>17mm * 15mm , 46~70cm（總長度120~144cm）</li>
                    <li style="margin-bottom: 4px;">◆ <b>實際握把長度：</b>30~54cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長140cm]約630g</li>
                </ul>
            </div>
        `,
        sub: { "練習長棍-接觸版": { price: 1600, ship: 'long', img: "" } },
        specs: {
            "棍身種類": { "一體式": { plus: 0, ship_override: 'long', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-contact-onepiece.jpg" }, "組合式": { plus: 500, ship_override: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-contact-collapsible.jpg" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
            "總長度": { "120cm":{plus:0}, "125cm":{plus:0}, "130cm":{plus:0}, "135cm":{plus:0}, "140cm":{plus:0}, "145cm":{plus:0}, "150cm":{plus:0} },
            "組合數量": { "單長組": { mult: 1, img: "" }, "雙長組": { mult: 1.96, img: "" } }
        }
    },
    prac_staff_short_std: {
        title: "練習短棍", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-short-normal.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>棍身採用航太級 7075 高強度鋁棍</li>
                    <li>搭配運動用止滑握把布</li>
                    <li>頭端以3D列印打造，採用高韌性耐磨TPU材質</li>
                    <li>頂部完全覆蓋，無金屬外露</li>
                    <li>靈活拆裝配重環，適用多種需求</li>
                    <li style="list-style: none; text-indent: -1.2em; margin-top: 8px;">※為延長其壽命，建議保持乾燥，表面可使用清水或一般酒精清潔，並存放於乾燥陰涼處</li>
                    <li style="list-style: none; text-indent: -1.2em;">※長期使用後表面微幅泛黃、粗糙與毛邊，係屬正常現象，不影響實際強度</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>棍身：</b>15mm * 13mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>3D列印 TPU印製；直徑5cm，本體長5cm／配重環長2.5cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把布：</b>一般標準防滑款 ※加厚+12g、熱縮套+50g</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長90cm]約250g（標準款）；單個配重環30g</li>
                </ul>
            </div>
        `,
        sub: { "練習短棍": { price: 600, ship: 'medium', img: "" } },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加大": { plus: 100, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-dayprop-staff-short-weight.jpg" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" }, "全熱縮套": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-short-color.jpg" } },
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} },
            "組合數量": { "單短組": { mult: 1, img: "" }, "雙短組": { mult: 1.96, img: "" }, "三短組": { mult: 2.85, img: "" } }
        }
    },
    prac_poi_contact: {
        title: "練習Poi (接觸版)", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-poi-contact90.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>球型端頭，適用雜耍及接觸技玩家</li>
                    <li>繩鍊採用11mm高張力登山繩</li>
                    <li>頭端以3D列印打造，採用高韌性耐磨TPU材質</li>
                    <li style="list-style: none; text-indent: -1.2em; margin-top: 8px;">※白繩根據進貨狀況偶有點綴配色變動</li>
                    <li style="list-style: none; text-indent: -1.2em; margin-top: 8px;">※為延長其壽命，建議保持乾燥，表面可使用清水或一般酒精清潔，並存放於乾燥陰涼處</li>
                    <li style="list-style: none; text-indent: -1.2em;">※長期使用後表面微幅泛黃、粗糙與毛邊，係屬正常現象，不影響實際強度</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>3D列印 TPU印製；直徑90mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把：</b>大型、無培林</li>
                    <li style="margin-bottom: 4px;">◆ <b>客製長度：</b>總長度60cm，可自行調整</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約180g（本體）、約210g（含繩+握把）</li>
                </ul>
            </div>
        `,
        sub: { "練習Poi-接觸版 (90mm)": { price: 950, ship: 'small', img: "" } },
        specs: {
            "總長度": { "45cm":{plus:0}, "50cm":{plus:0}, "55cm":{plus:0}, "60cm":{plus:0} },
            "組合數量": { "單球組": { mult: 1, img: "" }, "雙球組": { mult: 1.96, img: "" }, "三球組": { mult: 2.85, img: "" } }
        }
    },
        prac_poi_flow: {
        title: "練習Poi (標準版)", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-poi-normal.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>流線型外觀，適合新手入門</li>
                    <li>頭端以3D列印打造，採用高韌性耐磨TPU材質</li>
                    <li style="list-style: none; text-indent: -1.2em; margin-top: 8px;">※為延長其壽命，建議保持乾燥，表面可使用清水或一般酒精清潔，並存放於乾燥陰涼處</li>
                    <li style="list-style: none; text-indent: -1.2em;">※長期使用後表面微幅泛黃、粗糙與毛邊，係屬正常現象，不影響實際強度</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>3D列印 TPU印製；直徑70mm、高度80mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把：</b>小型、有培林</li>
                    <li style="margin-bottom: 4px;">◆ <b>繩鍊規格：</b>小型、有培林</li>
                    <li style="margin-bottom: 4px;">◆ <b>長度：</b>總長度60cm，可自行調整</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約120g（本體）、約150g（含繩+握把）</li>
                </ul>
            </div>
        `,
        sub: { "練習Poi(標準版)": { price: 500, ship: 'small', img: "" } },
        specs: {
            "繩鍊規格": { "5mm高張力登山繩": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-dayprop-tether-5mm.jpg" }, "9mm高張力登山繩": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-dayprop-tether-9mm.jpg" }, "6mm彈性軟繩": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-dayprop-tether-6mm.jpg" } },
            "握把規格": { "小握把": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-knob-small.jpg" }, "大握把": { plus: 100, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-knob-big.jpg" }  },
            "組合數量": { "單球組": { mult: 1, img: "" }, "雙球組": { mult: 1.96, img: "" }, "三球組": { mult: 2.85, img: "" } }
        }
    },
    prac_meteor: {
        title: "練習流星", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-meteor-b.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>流線型外觀</li>
                    <li>繩鍊採用高張力登山繩</li>
                    <li>頭端以3D列印打造，採用高韌性耐磨TPU材質</li>
                    <li style="list-style: none; text-indent: -1.2em; margin-top: 8px;">※白繩根據進貨狀況偶有點綴配色變動</li>
                    <li style="list-style: none; text-indent: -1.2em; margin-top: 8px;">※為延長其壽命，建議保持乾燥，表面可使用清水或一般酒精清潔，並存放於乾燥陰涼處</li>
                    <li style="list-style: none; text-indent: -1.2em;">※長期使用後表面微幅泛黃、粗糙與毛邊，係屬正常現象，不影響實際強度</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>3D列印 TPU印製；直徑70mm、高度80mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約120g（本體）、約300g（含繩）</li>
                </ul>
            </div>
        `,
        sub: { "練習流星-標準版": { price: 1000, ship: 'small', img: "" } },
        specs: {
            "繩鍊規格": { "9mm黑繩": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-dayprop-tether-9mm.jpg" }, "11mm白繩": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-dayprop-tether-11mm.jpg" } },
            "總長度": { "140cm":{plus:0}, "150cm":{plus:0}, "160cm":{plus:0}, "170cm":{plus:0}, "180cm":{plus:0} }
        }
    },
        prac_head_long_standard: {
        title: "練習頭-s", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-head-staff-standard.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>頭端以3D列印打造，採用高韌性耐磨TPU材質</li>
                    <li>可積木式自由排列，5公分為一單位</li>
                    <li>適用外徑19mm棍身</li>
                    <li style="list-style: none; text-indent: -1.2em; margin-top: 8px;">※為延長其壽命，建議保持乾燥，表面可使用清水或一般酒精清潔，並存放於乾燥陰涼處</li>
                    <li style="list-style: none; text-indent: -1.2em;">※長期使用後表面微幅泛黃、粗糙與毛邊，係屬正常現象，不影響實際強度</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>3D列印 TPU印製；含本體、中心柱(適用內徑17mm)、螺絲+螺帽</li>
                    <li style="margin-bottom: 4px;">◆ <b>長度：</b>直徑60mm、高度100mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>本體約90g、10cm中心柱約30g／單個配重環50g</li>
                </ul>
            </div>
        `,
        sub: { "練習頭-s": { price: 500, ship: 'small', img: "" } },
        specs: {
            "棍身外徑": { "19mm": { plus: 0, img: "" }, "22mm": { plus: 0, img: "" } },
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加大": { plus: 150, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-dayprop-staff-contact-weight.jpg" } },
            "組合數量": { "單頭": { mult: 1, img: "" }, "雙頭": { mult: 1.8, img: "" } }
        }
    },
    prac_head_long_contact: {
        title: "練習頭-c", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-head-staff-contact.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>頭端以3D列印打造，採用高韌性耐磨TPU材質</li>
                    <li>適用外徑19mm或22mm棍身</li>
                    <li>如需其他規格，歡迎私訊洽詢</li>
                    <li>球型端頭大幅提升離心力，擬龍棍手感</li>
                    <li style="list-style: none; text-indent: -1.2em; margin-top: 8px;">※為延長其壽命，建議保持乾燥，表面可使用清水或一般酒精清潔，並存放於乾燥陰涼處</li>
                    <li style="list-style: none; text-indent: -1.2em;">※長期使用後表面微幅泛黃、粗糙與毛邊，係屬正常現象，不影響實際強度</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>3D列印 TPU印製；含本體、中心柱(適用內徑17mm或19mm)、螺絲+螺帽</li>
                    <li style="margin-bottom: 4px;">◆ <b>長度：</b>直徑90mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>本體+中心柱約180g</li>
                </ul>
            </div>
        `,
        sub: { "練習頭-c": { price: 750, ship: 'small', img: "" } },
        specs: {
            "棍身外徑": { "19mm": { plus: 0, img: "" }, "22mm": { plus: 0, img: "" } },
            "組合數量": { "單頭": { mult: 1, img: "" }, "雙頭": { mult: 1.8, img: "" } }
        }
    },    
    prac_head_short: {
        title: "練習頭-ss", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-head-staff-short.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 道具介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>頭端以3D列印打造，採用高韌性耐磨TPU材質</li>
                    <li>可積木式自由排列，2.5公分為一單位</li>
                    <li>適用外徑13mm或15mm棍身</li>
                    <li>如需其他規格，歡迎私訊洽詢</li>
                    <li style="list-style: none; text-indent: -1.2em; margin-top: 8px;">※為延長其壽命，建議保持乾燥，表面可使用清水或一般酒精清潔，並存放於乾燥陰涼處</li>
                    <li style="list-style: none; text-indent: -1.2em;">※長期使用後表面微幅泛黃、粗糙與毛邊，係屬正常現象，不影響實際強度</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 預設規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>火頭：</b>3D列印 TPU印製；含本體、中心柱(適用內徑11mm或13mm)、螺絲+螺帽</li>
                    <li style="margin-bottom: 4px;">◆ <b>長度：</b>直徑50mm、高度50mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>本體約50g、7.5cm中心柱約15g／單個配重環30g</li>
                </ul>
            </div>
        `,
        sub: { "練習頭-ss": { price: 250, ship: 'small', img: "" } },
        specs: {
            "棍身外徑": { "13mm": { plus: 0, img: "" }, "15mm": { plus: 0, img: "" } },
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加大": { plus: 100, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-dayprop-staff-short-weight.jpg" } },
        }
    },
    
    // 📦 套組 (拆分獨立項目)
    set_knob_small: {
        title: "培林小握把", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-small.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>橢圓橡膠小握把，適合小手玩家</li>
                    <li>可做orbital等繩索扭轉招式</li>
                    <li>培林最高拉力250kg</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>握把尺寸：</b>橢圓形，直徑35mm、高度25mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把顏色：</b>僅白色</li>
                    <li style="margin-bottom: 4px;">◆ <b>總長度：</b>約10cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約28g</li>
                </ul>
            </div>
        `,
        sub: { "培林小握把": { price: 150, ship: 'small', img: "" } }, specs: {}
    },
    set_knob_big: {
        title: "培林大握把", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-big.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>圓形矽膠大握把，適合拋接玩家</li>
                    <li>可做orbital等繩索扭轉招式</li>
                    <li>培林最高拉力250kg</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>握把尺寸：</b>圓形，直徑40mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把顏色：</b>黃、粉、橘、紅、綠、青、藍、紫、白（以現貨為主）</li>
                    <li style="margin-bottom: 4px;">◆ <b>總長度：</b>約10cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約44g</li>
                </ul>
            </div>
        `,
        sub: { "培林大握把": { price: 250, ship: 'small', img: "" } }, specs: {}
    },
    set_chain_small: {
        title: "Poi 鐵鍊組", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-poitether-chain-small.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>#12 白鐵全焊鱔魚目鍊，堅固不壞、永垂不朽</li>
                    <li>使用 M3 快接環連接，可靈活拆卸</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>握把尺寸：</b>[小]橢圓形，直徑35mm、高度25mm；[大]圓形，直徑40mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把顏色：</b>[小]純白色；[大]黃、粉、橘、紅、綠、青、藍、紫、白（以現貨為主）</li>
                    <li style="margin-bottom: 4px;">◆ <b>總長度：</b>約40cm - 70cm ※不含火頭</li>
                </ul>
            </div>
        `,
        sub: { "Poi 鐵鍊組": { price: 300, ship: 'small', img: "" } }, 
        specs: {
            "握把規格": { "小握把": { plus: 0, img: "" }, "大握把": { plus: 100, img: "" } },
            "鐵鍊長度": { "25cm":{plus:0}, "30cm":{plus:0}, "35cm":{plus:0}, "40m":{plus:50}, "45m":{plus:50}, "50m":{plus:50} },
        }
    },
    set_chain_kevlar: {
        title: "Poi 克維拉編織繩", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-poitether-blackkevlar.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>降低與金屬接觸風險，減少燙傷機率</li>
                    <li>抗拉、耐高溫之長纖克維拉編織</li>
                    <li>防火PU塗層，提高繩鍊壽命</li>
                    <li>使用 M3 快接環連接，可靈活拆卸</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>握把尺寸：</b>圓形，直徑40mm；無培林</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把顏色：</b>黃、粉、橘、紅、綠、青、藍、紫、白（以現貨為主）</li>
                    <li style="margin-bottom: 4px;">◆ <b>總長度：</b>40cm - 60cm ※不含火頭</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約65g</li>
                </ul>
            </div>
        `,
        sub: { "克維拉編織繩": { price: 500, ship: 'small', img: "" } }, 
        specs: {
            "繩鍊長度": { "35cm":{plus:0}, "40cm":{plus:0}, "45cm":{plus:0}, "50cm":{plus:0}, "55cm":{plus:50}, "60cm":{plus:50} },
        }
    },
    set_chain_technora: {
        title: "Poi Technora編織繩", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-poitether-technora.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>降低與金屬接觸風險，減少燙傷機率</li>
                    <li>航太級材料，比克維拉更耐磨、更耐高溫</li>
                    <li>手感較克維拉編織繩更柔軟</li>
                    <li>使用 M3 快接環連接，可靈活拆卸</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>握把尺寸：</b>圓形，直徑40mm；無培林</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把顏色：</b>黃、粉、橘、紅、綠、青、藍、紫、白（以現貨為主）</li>
                    <li style="margin-bottom: 4px;">◆ <b>客製長度：</b>40cm - 60cm ※不含火頭</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約67g</li>
                </ul>
            </div>
        `,
        sub: { "Technora編織繩": { price: 700, ship: 'small', img: "" } }, 
        specs: {
            "繩鍊長度": { "35cm":{plus:0}, "40cm":{plus:0}, "45cm":{plus:0}, "50cm":{plus:0}, "55cm":{plus:50}, "60cm":{plus:50} },
        }
    },
    set_meteor_kevlar: {
        title: "流星克維拉繩", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-meteor-kevlar.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>降低與金屬接觸風險，減少燙傷機率</li>
                    <li>10mm克維拉高張力繩，手感偏硬</li>
                    <li>使用 M3 快接環連接，可靈活拆卸</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>總長度：</b>130cm - 170cm ※不含火頭</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約156g</li>
                </ul>
            </div>
        `,
        sub: { "流星克維拉繩": { price: 700, ship: 'small', img: "" } }, 
        specs: {
            "繩鍊長度": { "130cm":{plus:0}, "135cm":{plus:0}, "140cm":{plus:0}, "145cm":{plus:0}, "150cm":{plus:0}, "155cm":{plus:50}, "160cm":{plus:50} },
        }
    },
    set_meteor_nochain: {
        title: "流星鐵鍊連接繩", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-meteor-nochain.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>鐵鍊組專用流星連接繩</li>
                    <li style="list-style: none; text-indent: -1.2em; margin-top: 8px;">※不含鐵鍊</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>鐵鍊連接繩：</b>11mm白色登山繩 ※白繩根據進貨狀況偶有點綴配色變動</li>
                    <li style="margin-bottom: 4px;">◆ <b>總長度：</b>70cm，可自行調整</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>112g</li>
                </ul>
            </div>
        `,
        sub: { "流星鐵鍊連接繩": { price: 100, ship: 'small', img: "" } }, specs: {}
    },
    set_collapsible: {
        title: "組合棍棍體", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-collapsible.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 套組介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li>棍身採用航太級 7075 高強度鋁棍</li>
                    <li>彈扣結構固定</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>端頭：</b>19mm * 17mm , 45cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>中段：</b>17mm * 15mm , 46~70cm（總長度120~144cm）</li>
                    <li style="margin-bottom: 4px;">◆ <b>實際握把長度：</b>30~54cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[總長140cm]約250g</li>
                </ul>
            </div>
        `,
        sub: { "組合棍棍體": { price: 600, ship: 'small', img: "" } }, 
        specs: {
            "握把規格": { "無握把": { plus: 0, img: "" }, "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
            "總長度": { "120cm":{plus:0}, "125cm":{plus:0}, "130cm":{plus:0}, "135cm":{plus:0}, "140cm":{plus:0}, "144cm":{plus:0} },
        }
    },

    // ⚙️ 耗材配件 (拆分獨立項目)
    parts_grip_normal: {
        title: "握把布 (普通款)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-grip-normal.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 配件介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️配件類商品以現貨庫存為主</li>
                    <li>運動用止滑握把布</li>
                    <li>適用各種棍類道具</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>規格：</b>厚0.7mm／寬27mm／長105mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約9g</li>
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
                    <li style="list-style: none; text-indent: -1.2em;">⚠️配件類商品以現貨庫存為主</li>
                    <li>輪胎紋路提升止滑性</li>
                    <li>持握舒適度提升，適合接觸技玩家</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>規格：</b>厚1.6mm／寬25mm／長110mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約21g</li>
                </ul>
            </div>
        `,
        sub: { "握把布 (厚款)": { price: 60, ship: 'small', img: "" } }, specs: {}
    },
    parts_knob_small: {
        title: "握把球 - 小", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-knob-small.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 配件介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️配件類商品以現貨庫存為主</li>
                    <li style="list-style: none; text-indent: -1.2em;">※此項不含培林</li>
                    <li>橢圓橡膠小握把，適合小手玩家</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>握把尺寸：</b>橢圓形，直徑35mm、高度25mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把顏色：</b>僅白色</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約19g</li>
                </ul>
            </div>
        `,
        sub: { "握把球-小": { price: 100, ship: 'small', img: "" } }, specs: {}
    },
    parts_knob_big: {
        title: "握把球 - 大", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-knob-big.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 配件介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️配件類商品以現貨庫存為主</li>
                    <li style="list-style: none; text-indent: -1.2em;">※此項不含培林</li>
                    <li>圓形矽膠大握把，適合拋接玩家</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>握把尺寸：</b>圓形，直徑40mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>握把顏色：</b>黃、粉、橘、紅、綠、青、藍、紫、白（以現貨為主）</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約37g</li>
                </ul>
            </div>
        `,
        sub: { "握把球-大": { price: 200, ship: 'small', img: "" } }, specs: {}
    },
    parts_chain_35: {
        title: "鐵鍊", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-chain.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 配件介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️配件類商品以現貨庫存為主</li>
                    <li>#12 白鐵全焊鱔魚目鍊</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>總長度：</b>35cm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約48g</li>
                </ul>
            </div>
        `,
        sub: { "鐵鍊": { price: 70, ship: 'small', img: "" } }, specs: {}
    },
    parts_quicklink: {
        title: "快接環", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-quicklink.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 配件介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️配件類商品以現貨庫存為主</li>
                    <li> M3 金屬快拆環</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>尺寸：</b>線徑3mm、</li>
                    <li style="margin-bottom: 4px;">◆ <b>總長度：</b>36mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約5g</li>
                </ul>
            </div>
        `,
        sub: { "快接環": { price: 35, ship: 'small', img: "" } }, specs: {}
    },
    parts_bearings: {
        title: "培林", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-bearings.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 配件介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️配件類商品以現貨庫存為主</li>
                    <li>#7 雙培林不鏽鋼轉環</li>
                    <li>最高拉力250kg</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>總長度：</b>34mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>約5g</li>
                </ul>
            </div>
        `,
        sub: { "培林 (#7)": { price: 20, ship: 'small', img: "" } }, specs: {}
    },

    // 🛠️ 管材與防火布 (拆分獨立項目)
    mats_alu_19: {
        title: "7075 鋁棍 (19*17mm)", cat: "mats", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/material-pipe-19mm.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️材料類商品以現貨庫存為主</li>
                    <li>7075-T6 鋁合金</li>
                    <li>外徑19mm、內徑17mm</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[150cm]約236g</li>
                </ul>
            </div>
        `,
        sub: { "7075鋁棍 19*17mm": { price: 500, ship: 'long', img: "" } }, 
        specs: {
            "總長度": { "120cm":{plus:0}, "125cm":{plus:0}, "130cm":{plus:0}, "135cm":{plus:0}, "140cm":{plus:0}, "145cm":{plus:0}, "150cm":{plus:0} },
        }
    },
    mats_alu_15: {
        title: "7075 鋁棍 (15*13mm)", cat: "mats", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/material-pipe-15mm.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️材料類商品以現貨庫存為主</li>
                    <li>7075-T6 鋁合金</li>
                    <li>外徑15mm、內徑13mm</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[100cm]約125g</li>
                </ul>
            </div>
        `,
        sub: { "7075鋁棍 15*13mm": { price: 250, ship: 'medium', img: "" } }, 
        specs: {
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} }
        }
    },
    mats_alu_13: {
        title: "7075 鋁棍 (13*11mm)", cat: "mats", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/material-pipe-13mm.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️材料類商品以現貨庫存為主</li>
                    <li>7075-T6 鋁合金</li>
                    <li>外徑13mm、內徑11mm</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>總重量：</b>[100cm]約108g</li>
                </ul>
            </div>
        `,
        sub: { "7075鋁棍 13*11mm": { price: 250, ship: 'medium', img: "" } }, 
        specs: {
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} }
        }
    },
    mats_cloth_13: {
        title: "扁火布 (13mm)", cat: "mats", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/material-wick-13mm.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️材料類商品以現貨庫存為主</li>
                    <li>100% Kevlar 純克維拉纖維織帶</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>規格：</b>厚3mm／寬13mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>計價單位：</b>每 1 公尺 (100cm)</li>
                </ul>
            </div>
        `,
        sub: { "防火布 13mm (每公尺)": { price: 100, ship: 'small', img: "" } }, specs: {}
    },
    mats_cloth_19: {
        title: "扁火布 (19mm)", cat: "mats", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/material-wick-19mm.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️材料類商品以現貨庫存為主</li>
                    <li>100% Kevlar 純克維拉纖維織帶</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>規格：</b>厚3mm／寬19mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>計價單位：</b>每 1 公尺 (100cm)</li>
                </ul>
            </div>
        `,
        sub: { "防火布 19mm (每公尺)": { price: 120, ship: 'small', img: "" } }, specs: {}
    },
    mats_cloth_25: {
        title: "扁火布 (25mm)", cat: "mats", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/material-wick-25mm.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️材料類商品以現貨庫存為主</li>
                    <li>100% Kevlar 純克維拉纖維織帶</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>規格：</b>厚3mm／寬25mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>計價單位：</b>每 1 公尺 (100cm)</li>
                </ul>
            </div>
        `,
        sub: { "防火布 25mm (每公尺)": { price: 140, ship: 'small', img: "" } }, specs: {}
    },
    mats_cloth_50: {
        title: "扁火布 (50mm)", cat: "mats", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/material-wick-50mm.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️材料類商品以現貨庫存為主</li>
                    <li>100% Kevlar 純克維拉纖維織帶</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>規格：</b>厚3mm／寬50mm</li>
                    <li style="margin-bottom: 4px;">◆ <b>計價單位：</b>每 1 公尺 (100cm)</li>
                </ul>
            </div>
        `,
        sub: { "防火布 50mm (每公尺)": { price: 200, ship: 'small', img: "" } }, specs: {}
    },
    mats_rope_10: {
        title: "圓火繩 (10mm)", cat: "mats", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/material-wick-10mm.jpg"],
        details: `
            <div style="margin-bottom: 20px;">
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">✨ 材料介紹</strong>
                <ul style="padding-left: 18px; margin: 0; line-height: 1.7; color: #444;">
                    <li style="list-style: none; text-indent: -1.2em;">⚠️材料類商品以現貨庫存為主</li>
                    <li>100% Kevlar 純克維拉纖維織帶</li>
                </ul>
            </div>
            <hr style="border: 0; border-top: 1px dashed var(--border-color); margin: 15px 0;">
            <div>
                <strong style="color: #111; display: block; margin-bottom: 10px; font-size: 0.95rem;">📐 產品規格</strong>
                <ul style="list-style: none; padding-left: 0; margin: 0; line-height: 1.7; color: #444;">
                    <li style="margin-bottom: 4px;">◆ <b>規格：</b>直徑10mm</li>
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
