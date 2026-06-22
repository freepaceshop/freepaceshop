// 💡 FPS 道具部：全套終極版商品資料庫
const db = {
    favicon: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/favicon.png",

    // 🔥 火舞道具
    fire_staff_cyl: {
        title: "火長棍 (圓柱火頭)", cat: "fire",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-contact-roll.jpg",
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
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-contact-twista.jpg",
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
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-short-roll.jpg",
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
    fire_short_twi: {
        title: "火短棍 (Twista火頭)", cat: "fire",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-short-twista.jpg",
        details: "● <b>核心優勢：</b>短棍尺寸、巨型火勢！融合 Twista 的超強蓄油力。<br>● <b>操作性能：</b>轉動慣性分布極佳，完美切合指尖花式與高速拋接動作。",
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
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-leviwand.jpg",
        details: "● <b>極致隱形：</b>專為漂浮設計的控制線與精準配重，讓火光如同魔法般在身邊舞動。",
        sub: {
            "火漂浮棍-5cm圓柱火頭": { price: 1000, ship: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-staff-short-roll5.jpg" }
        },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加厚一層": { plus: 200, img: "" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
            "控制繩規格": { "短繩-繩圈": { plus: 0, img: "" }, "短繩-握把": { plus: 250, img: "" },"長繩": { plus: 400, img: "" } },
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} }
        }
    },
    fire_staff_shuriken: {
        title: "火手裡劍", cat: "fire",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-shuriken.jpg",
        details: "● <b>獨特視覺：</b>手裡劍火頭編織造型，提供極具張力的旋轉火光殘影。",
        sub: {
            "火手裡劍-6cm標準Twista": { price: 1100, ship: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-staff-short-twistanormal6.jpg" }
        },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加長2cm": { plus: 200, img: "" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} }
        }
    },
    fire_poi_single: {
        title: "火Poi (純火頭單賣)", cat: "fire", hideExtraSpecs: true,
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-head-twista6.jpg",
        details: "● <b>DIY替換專區：</b>此品項僅販售單顆火頭，不包含連接繩與握把，適合已有配件的玩家。",
        sub: {
            "火Poi(純火頭)-6cm豆干": { price: 500, ship: 'small', img: "" },
            "火Poi(純火頭)-8cm豆干": { price: 600, ship: 'small', img: "" },
            "火Poi(純火頭)-6cm Twista": { price: 650, ship: 'small', img: "" },
            "火Poi(純火頭)-8cm Twista": { price: 800, ship: 'small', img: "" },
            "火Poi(純火頭)-6cm 圓球": { price: 700, ship: 'small', img: "" },
            "火Poi(純火頭)-8cm 圓球": { price: 900, ship: 'small', img: "" },
            "火Poi(純火頭)-6cm 猴子球": { price: 750, ship: 'small', img: "" },
            "火Poi(純火頭)-8cm 猴子球": { price: 1000, ship: 'small', img: "" }
        },
        specs: {} 
    },
    fire_poi_det_1: {
        title: "火Poi - 可拆式 (含配件)", cat: "fire",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-thumbnail.jpg",
        details: "● <b>完整套裝：</b>包含快接環、連接繩與專業握把，收到即可直接使用。<br>● <b>靈活可拆卸：</b>未來若火頭燒耗，可單獨購買火頭替換，節省成本。",
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
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-one-thumbnail.jpg",
        details: "● <b>無五金結構：</b>繩索與火頭一體成型編織，消滅拋接燙傷與金屬異物感風險。",
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
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-poi-meteor-thumbnail.jpg",
        details: "● <b>靈活配置：</b>包含兩顆火頭與一條流星專用長繩。<br>● <b>多元玩法：</b>可拆式設計讓您可以隨時更換火頭，或當作一般 Poi 揮舞。",
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
        title: "小火棒", cat: "fire",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-torch25.jpg",
        details: "● <b>隨身點綴：</b>輕巧便攜，適合食火、身體接觸或做為火焰效果點綴。",
        sub: {
            "小火棒-2.5cm圓柱": { price: 100, ship: 'small', img: "" },
            "小火棒-5cm圓柱": { price: 200, ship: 'small', img: "" },
            "小火棒-3cm Twista": { price: 350, ship: 'small', img: "" },
        },
        specs: {}
    },

    // ✨ 練習道具
    prac_staff_std: {
        title: "練習長棍 (標準版)", cat: "prac",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-contact-normal.jpg",
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
    prac_staff_contact: {
        title: "練習長棍 (Contact接觸版)", cat: "prac",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-contact-90.jpg",
        details: "● <b>接觸專用：</b>兩側加裝高密度配重塊，大幅提升轉動慣性。<br>● <b>流暢滑行：</b>在頸部、手臂滑行時極度穩定，Contact Staff 玩家必備。",
        sub: { "練習長棍-接觸版": { price: 1500, ship: 'long', img: "" } },
        specs: {
            "棍身種類": { "一體式": { plus: 0, ship_override: 'long', img: "" }, "組合式": { plus: 600, ship_override: 'medium', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-staff-contact-collapsible.jpg" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
            "總長度": { "120cm":{plus:0}, "125cm":{plus:0}, "130cm":{plus:0}, "135cm":{plus:0}, "140cm":{plus:0}, "145cm":{plus:0}, "150cm":{plus:0} },
            "組合數量": { "單長組": { mult: 1, img: "" }, "雙長組": { mult: 1.96, img: "" } }
        }
    },
    prac_staff_short_std: {
        title: "練習短棍 (標準版)", cat: "prac",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-short-normal.jpg",
        details: "● <b>堅固耐用：</b>專為多棍拋接設計，採用高韌性管材，經得起無數次掉落。",
        sub: { "練習短棍-標準版": { price: 600, ship: 'medium', img: "" } },
        specs: {
            "兩端加大": { "不需加大": { plus: 0, img: "" }, "加大": { plus: 100, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-option-staff-short-normal.jpg" } },
            "握把規格": { "標準款": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-normal.jpg" }, "加厚款": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-grip-thick.jpg" } },
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} },
            "組合數量": { "單短組": { mult: 1, img: "" }, "雙短組": { mult: 1.96, img: "" }, "三短組": { mult: 2.85, img: "" } }
        }
    },
    prac_staff_short_light: {
        title: "練習短棍 (TPU 極致輕量版)", cat: "prac",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-short-light-tpunormal.jpg",
        details: "● <b>超低負擔：</b>極致輕量化設計，專為高轉速指尖花式與連續拋接打造。<br>● <b>多樣視覺：</b>可選安全 TPU 軟管或炫彩織帶外觀。",
        sub: { "練習短棍-輕量版": { price: 500, ship: 'medium', img: "" } },
        specs: {
            "外觀規格": { "TPU (僅白色)": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-option-light-tpu.jpg" }, "織帶 (多色)": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-option-light-color.jpg" } },
            "握把規格": { "標準": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-short-light-tpunormal.jpg" }, "全熱縮套 (多色)": { plus: 50, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-short-light-fullcolor.jpg" } },
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} },
            "組合數量": { "單短組": { mult: 1, img: "" }, "雙短組": { mult: 1.96, img: "" }, "三短組": { mult: 2.85, img: "" } }
        }
    },
    prac_poi_std: {
        title: "練習Poi (標準版)", cat: "prac",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-poi-normal.jpg",
        details: "● <b>最佳手感：</b>柔軟布料包覆配重塊，打到身體不易疼痛，適合新手入門。",
        sub: { "練習Poi-標準版": { price: 550, ship: 'small', img: "" } },
        specs: {
            "培林規格": { "不加裝培林": { plus: 0, img: "" }, "加裝培林": { plus: 100, img: "" } },
            "握把規格": { "小握把": { plus: 0, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-small.jpg" }, "大握把": { plus: 200, img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-big.jpg" } },
            "總長度": { "45cm":{plus:0}, "50cm":{plus:0}, "55cm":{plus:0}, "60cm":{plus:0} },
            "組合數量": { "單球組": { mult: 1, img: "" }, "雙球組": { mult: 1.96, img: "" }, "三球組": { mult: 2.85, img: "" } }
        }
    },
    prac_poi_contact: {
        title: "練習Poi (Contact接觸版)", cat: "prac",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-poi-contact90.jpg",
        details: "● <b>接觸專用：</b>使用完美的 90mm 接觸球，重心平穩，特別適合身體滾動（Body Roll）。",
        sub: { "練習Poi-接觸版 (90mm)": { price: 800, ship: 'small', img: "" } },
        specs: {
            "總長度": { "45cm":{plus:0}, "50cm":{plus:0}, "55cm":{plus:0}, "60cm":{plus:0} },
            "組合數量": { "單球組": { mult: 1, img: "" }, "雙球組": { mult: 1.96, img: "" }, "三球組": { mult: 2.85, img: "" } }
        }
    },
    prac_meteor: {
        title: "練習流星", cat: "prac",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-meteor.jpg",
        details: "● <b>全方位演練：</b>經典軟質配重端，連接柔軟高強度編織繩，適合各類流星技法。",
        sub: { "練習流星-標準版": { price: 1000, ship: 'small', img: "" } },
        specs: { "總長度": { "140cm":{plus:0}, "150cm":{plus:0}, "160cm":{plus:0}, "170cm":{plus:0}, "180cm":{plus:0} } }
    },

    // 🛠️ 周邊與材料
    set: {
        title: "培林握把與高拉力鐵鍊", cat: "material",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-big.jpg",
        details: "● <b>專屬研發配件：</b>提供高速培林旋轉握把，以及抗拉扯、抗高溫的連接繩索與鐵鍊。",
        sub: {
            "培林小握把(僅白色)": { price: 180, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-small.jpg" },
            "培林大握把(顏色現貨)": { price: 300, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-big.jpg" },
            "克維拉編織繩": { price: 500, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-poi-blackkevlar.jpg" },
            "Technora編織繩": { price: 700, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-poi-technora.jpg" },
            "流星克維拉繩": { price: 700, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-meteor-kevlar.jpg" },
            "流星鐵鍊連接繩": { price: 100, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-meteor-nochain.jpg" },
            "鐵鍊組": { price: 130, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-chain.jpg" }
        },
        specs: {}
    },
    accessories: {
        title: "耗材配件 (握把布/快接環)", cat: "material",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-quicklink.jpg",
        details: "● <b>日常補給站：</b>更換吸汗握把布，或補充高強度 M3 快接環、不鏽鋼培林。",
        sub: {
            "握把布 (普通款)": { price: 20, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-grip-normal.jpg" },
            "握把布 (厚款)": { price: 60, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-grip-thick.jpg" },
            "握把球-小": { price: 100, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-knob-small.jpg" },
            "握把球-大": { price: 200, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-knob-big.jpg" },
            "鐵鍊 (35cm)": { price: 70, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-chain.jpg" },
            "快接環 (M3)": { price: 35, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-quicklink.jpg" },
            "培林 (#7 拉力250kg)": { price: 20, ship: 'small', img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-bearings.jpg" }
        },
        specs: {}
    },
    materials: {
        title: "管材與防火布", cat: "material",
        main_img: "https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-chain.jpg",
        details: "● <b>職人素材：</b>提供堅固的 7075 鋁合金管材與純克維拉耐高溫防火布，自由打造夢想道具。",
        sub: {
            "7075鋁棍 19*17mm(150cm)": { price: 500, ship: 'long', img: "" },
            "7075鋁棍 15*13mm(100cm)": { price: 250, ship: 'medium', img: "" },
            "7075鋁棍 13*11mm(100cm)": { price: 250, ship: 'medium', img: "" },
            "防火布 13mm (每公尺)": { price: 100, ship: 'small', img: "" },
            "防火布 19mm (每公尺)": { price: 120, ship: 'small', img: "" },
            "防火布 25mm (每公尺)": { price: 140, ship: 'small', img: "" },
            "防火布 50mm (每公尺)": { price: 200, ship: 'small', img: "" },
            "防火布 10mm圓繩 (每公尺)": { price: 150, ship: 'small', img: "" }
        },
        specs: {}
    }
};

// 💡 購物車核心邏輯
let cart = JSON.parse(localStorage.getItem('fps_cart')) || [];

function saveCart() {
    localStorage.setItem('fps_cart', JSON.stringify(cart));
}

function toggleCart(show) {
    const drawer = document.getElementById('cartDrawer');
    if(drawer) {
        if(show) drawer.classList.add('open');
        else drawer.classList.remove('open');
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
}

function renderCart() {
    const list = document.getElementById('cartList');
    const navCount = document.getElementById('navCartCount');
    if(navCount) navCount.innerText = cart.length;

    if(!list) return; // 確保在有購物車 UI 的頁面才執行渲染

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

    let fee = 0;
    let desc = [];

    if(longQty > 0) { fee += (longQty * 100); desc.push(`長棍獨立包裹 × ${longQty}支`); }
    if(medQty > 0) { let boxes = Math.ceil(medQty / 6); fee += (boxes * 100); desc.push(`中型道具包裹 × ${boxes}箱`); }
    if(smallQty > 0) { fee += 60; desc.push(`小型包裹`); }

    if(longQty >= 5 || fee >= 300) {
        return { fee: 300, desc: "🚛 訂單大宗：自動優化改走大榮貨運 (大箱收費)" };
    }

    return { fee: fee, desc: `優化物流組合：${desc.join(' + ')}` };
}

function updatePrices(sub, ship, desc) {
    if(document.getElementById('subTotal')) document.getElementById('subTotal').innerText = `NT$ ${sub.toLocaleString()}`;
    if(document.getElementById('shipFee')) document.getElementById('shipFee').innerText = `NT$ ${ship.toLocaleString()}`;
    if(document.getElementById('shipDesc')) document.getElementById('shipDesc').innerText = desc;
    if(document.getElementById('grandTotal')) document.getElementById('grandTotal').innerText = `NT$ ${(sub + ship).toLocaleString()}`;
    
    if(document.getElementById('shipFill')) {
        const percent = Math.min((sub / 5000) * 100, 100);
        document.getElementById('shipFill').style.width = percent + '%';
        document.getElementById('shipMsg').innerText = sub >= 5000 ? "🎉 已享受免運費優惠！" : `還差 NT$ ${(5000 - sub).toLocaleString()} 即可享有免運優惠`;
    }
}

function copyOrder() {
    if(cart.length === 0) return alert("清單是空的，請先加入道具！");
    let total = document.getElementById('grandTotal').innerText;
    let sub = document.getElementById('subTotal').innerText;
    let ship = document.getElementById('shipFee').innerText;
    let shipD = document.getElementById('shipDesc').innerText;

    let text = "【FPS 道具部 - 客製化估價清單】\n----------------------------------\n";
    cart.forEach((i, idx) => {
        text += `${idx + 1}. ● ${i.name} × ${i.qty}\n   規格明細：${i.specs}\n   小計金額：NT$ ${(i.price * i.qty).toLocaleString()}\n\n`;
    });
    text += `----------------------------------\n商品小計：${sub}\n物流運費：${ship} (${shipD})\n預估應付總額：${total}\n\n※ 此明細為線上客製化試算，最終項目確認與出貨時間以粉專私訊溝通為準。`;
    
    navigator.clipboard.writeText(text).then(() => {
        document.getElementById('customModal').style.display = 'flex';
    }).catch(err => {
        alert("複製失敗，請手動全選明細複製。");
    });
}

function closeModal() {
    document.getElementById('customModal').style.display = 'none';
}

// 啟動時自動渲染上方導覽列數字與購物車
document.addEventListener("DOMContentLoaded", renderCart);
