// 💡 FPS 道具部：全套終極版商品資料庫 (改為 window.db 確保全域跨檔案讀取 100% 成功)
window.db = {
    // 🔥 火舞道具
    fire_staff_cyl: {
        title: "火長棍 (圓柱火頭)", cat: "fire",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-contact-roll.jpg"],
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
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-contact-twista.jpg"],
        details: "● <b>火頭工藝：</b>獨家 Twista 空心立體編織技法，燃燒時火焰更具侵略性！<br>● <b>防護機制：</b>交接處採耐高溫全包覆防護，大幅延長棍身壽命。",
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
        details: "● <b>核心材質：</b>15mm 高硬度輕薄鋁管，專為雙短棍及三短棍技巧研發。",
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
        details: "● <b>操作性能：</b>轉動慣性分布極佳，完美切合指尖花式與高速拋接動作。",
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
        details: "● <b>專業配重：</b>極致隱形的控制線，讓火光如同魔法般在身邊舞動。",
        sub: { "火漂浮棍-5cm圓柱火頭": { price: 1000, ship: 'medium', img: "" } },
        specs: {
            "火頭加大": { "不需加大": { plus: 0, img: "" }, "加厚一層": { plus: 200, img: "" } },
            "握把規格": { "標準款": { plus: 0, img: "" }, "加厚款": { plus: 50, img: "" } },
            "控制繩規格": { "短繩-繩圈": { plus: 0, img: "" }, "短繩-握把": { plus: 250, img: "" },"長繩": { plus: 400, img: "" } },
            "總長度": { "80cm":{plus:0}, "85cm":{plus:0}, "90cm":{plus:0}, "95cm":{plus:0}, "100cm":{plus:0} }
        }
    },
    fire_staff_shuriken: {
        title: "火手裡劍", cat: "fire",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/fire-staff-shuriken.jpg"],
        details: "● <b>造型火頭：</b>獨特的手裡劍火頭編織造型，旋轉火光殘影極具張力。",
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
        details: "● <b>DIY替換專區：</b>此品項僅販售單顆火頭，不包含連接繩、鐵鍊與培林握把。",
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
        details: "● <b>快拆設計：</b>使用高強度 M3 快接環連接，未來火頭燒耗可單獨購買換新。",
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
        details: "● <b>無五金結構：</b>繩索與火頭一體成型編織，完全消滅拋接燙傷風險。",
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
        details: "● <b>流星套組：</b>包含兩顆火頭與一條流星專用長繩，手感細膩流暢。",
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
        details: "● 適合食火、身體接觸或做為火焰效果點綴之用。",
        sub: {
            "小火棒-2.5cm圓柱": { price: 100, ship: 'small', img: "" },
            "小火棒-5cm圓柱": { price: 200, ship: 'small', img: "" },
            "小火棒-3cm Twista": { price: 350, ship: 'small', img: "" },
        }, specs: {}
    },

    // ✨ 練習道具
    prac_staff_std: {
        title: "練習長棍 (標準版)", cat: "prac",
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-staff-contact-normal.jpg"],
        details: "● <b>避震結構：</b>兩端採高品質保護包覆，室內外掉落皆不易造成損傷。",
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
        details: "● <b>高動態慣性：</b>兩側加裝高密度配重塊，在身體滑行時極度穩定。",
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
        details: "● 專為多棍拋接設計，採用高韌性管材，經得起無數次掉落。",
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
        details: "● 極致輕量化設計，適合指尖花式，大幅降低手腕負擔。",
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
        details: "● 柔軟布料包覆配重，打到身體不易疼痛，適合新手探索新招式。",
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
        details: "● 採用 90mm 接觸專用球，特別適合接觸滾動與高階拋接。",
        sub: { "練習Poi-接觸版 (90mm)": { price: 800, ship: 'small', img: "" } },
        specs: {
            "總長度": { "45cm":{plus:0}, "50cm":{plus:0}, "55cm":{plus:0}, "60cm":{plus:0} },
            "組合數量": { "單球組": { mult: 1, img: "" }, "雙球組": { mult: 1.96, img: "" }, "三球組": { mult: 2.85, img: "" } }
        }
    },
    prac_meteor: {
        title: "練習流星 (標準版)", cat: "prac", hideExtraSpecs: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/dayprop-meteor.jpg"],
        details: "● 經典軟質配重端，連接高強度編織繩，適合全方位流星演練。",
        sub: { "練習流星-標準版": { price: 1000, ship: 'small', img: "" } },
        specs: { "總長度": { "140cm":{plus:0}, "150cm":{plus:0}, "160cm":{plus:0}, "170cm":{plus:0}, "180cm":{plus:0} } }
    },

    // 📦 專業套組 (拆分獨立項目)
    set_knob_small: {
        title: "培林小握把 (僅白色)", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-small.jpg"],
        details: "● 專業培林轉速結構，提供 Poi 玩家最滑順的運轉感。",
        sub: { "培林小握把": { price: 180, ship: 'small', img: "" } }, specs: {}
    },
    set_knob_big: {
        title: "培林大握把 (顏色以現貨為主)", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-knob-big.jpg"],
        details: "● 經典大球握把，配重與拋接飽滿好抓。",
        sub: { "培林大握把": { price: 300, ship: 'small', img: "" } }, specs: {}
    },
    set_chain_kevlar: {
        title: "克維拉編織繩", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-poi-blackkevlar.jpg"],
        details: "● 高抗拉、耐高溫火燒專用克維拉繩索。",
        sub: { "克維拉編織繩": { price: 500, ship: 'small', img: "" } }, specs: {}
    },
    set_chain_technora: {
        title: "Technora編織繩", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-poi-technora.jpg"],
        details: "● 極致高拉力且耐熱的 Technora 進階黑繩。",
        sub: { "Technora編織繩": { price: 700, ship: 'small', img: "" } }, specs: {}
    },
    set_meteor_kevlar: {
        title: "流星克維拉繩", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-meteor-kevlar.jpg"],
        details: "● 火流星專用抗拉加厚克維拉編織粗繩。",
        sub: { "流星克維拉繩": { price: 700, ship: 'small', img: "" } }, specs: {}
    },
    set_meteor_nochain: {
        title: "流星鐵鍊連接繩", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/option-fire-meteor-nochain.jpg"],
        details: "● 火流星基礎轉接專用高強度連接繩索。",
        sub: { "流星鐵鍊連接繩": { price: 100, ship: 'small', img: "" } }, specs: {}
    },
    set_chain_normal: {
        title: "高強度鐵鍊組", cat: "set", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/set-chain.jpg"],
        details: "● 職人專用抗高溫不鏽鋼連接鐵鍊組。",
        sub: { "鐵鍊組": { price: 130, ship: 'small', img: "" } }, specs: {}
    },

    // ⚙️ 耗材配件 (拆分獨立項目)
    parts_grip_normal: {
        title: "握把布 (普通款)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-grip-normal.jpg"],
        details: "● 長棍與道具日常補給基本款防滑把手布。",
        sub: { "握把布 (普通款)": { price: 20, ship: 'small', img: "" } }, specs: {}
    },
    parts_grip_thick: {
        title: "握把布 (厚款)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-grip-thick.jpg"],
        details: "● 吸汗加厚，Contact 接觸手感極佳。",
        sub: { "握把布 (厚款)": { price: 60, ship: 'small', img: "" } }, specs: {}
    },
    parts_knob_small: {
        title: "握把球 - 小 (橢圓)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-knob-small.jpg"],
        details: "● 精巧好捏的基礎橢圓握把塑料球。",
        sub: { "握把球-小": { price: 100, ship: 'small', img: "" } }, specs: {}
    },
    parts_knob_big: {
        title: "握把球 - 大 (顏色隨機)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-knob-big.jpg"],
        details: "● 圓形飽滿大把手球，重拋極佳，顏色現貨為主。",
        sub: { "握把球-大": { price: 200, ship: 'small', img: "" } }, specs: {}
    },
    parts_chain_35: {
        title: "不鏽鋼鐵鍊 (35cm)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-chain.jpg"],
        details: "● 抗拉耐高溫專用不鏽鋼鐵鍊條，單條長度 35cm。",
        sub: { "鐵鍊 (35cm)": { price: 70, ship: 'small', img: "" } }, specs: {}
    },
    parts_quicklink: {
        title: "抗拉快接環 (M3)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-quicklink.jpg"],
        details: "● 道具銜接極度穩固的不鏽鋼 M3 規格快拆環。",
        sub: { "快接環 (M3)": { price: 35, ship: 'small', img: "" } }, specs: {}
    },
    parts_bearings: {
        title: "高拉力培林 (#7)", cat: "parts", hideSub: true,
        images: ["https://raw.githubusercontent.com/freepaceshop/freepaceshop/refs/heads/main/images/parts-bearings.jpg"],
        details: "● #7 規格培林，抗拉力約 250kg，Poi 高速迴旋必備。",
        sub: { "培林 (#7)": { price: 20, ship: 'small', img: "" } }, specs: {}
    },

    // 🛠️ 管材與防火布 (拆分獨立項目)
    mats_alu_19: {
        title: "7075 航太級鋁棍 (19*17mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=7075+Aluminum+19mm"],
        details: "● 航太加厚高強度鋁管，一體長棍必備，出貨 150cm 以下。",
        sub: { "7075鋁棍 19*17mm": { price: 500, ship: 'long', img: "" } }, specs: {}
    },
    mats_alu_15: {
        title: "7075 航太級鋁棍 (15*13mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=7075+Aluminum+15mm"],
        details: "● 100cm College 輕量短棍、多棍用高規格管材。",
        sub: { "7075鋁棍 15*13mm": { price: 250, ship: 'medium', img: "" } }, specs: {}
    },
    mats_alu_13: {
        title: "7075 航太級鋁棍 (13*11mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=7075+Aluminum+13mm"],
        details: "● 100cm 內徑特殊加厚高彈性細鋁管結構。",
        sub: { "7075鋁棍 13*11mm": { price: 250, ship: 'medium', img: "" } }, specs: {}
    },
    mats_cloth_13: {
        title: "頂級克維拉防火布 (13mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=Kevlar+Wick+13mm"],
        details: "● 100% Kevlar 編織防火織帶，寬度 13mm，計價單位為每公尺。",
        sub: { "防火布 13mm (每公尺)": { price: 100, ship: 'small', img: "" } }, specs: {}
    },
    mats_cloth_19: {
        title: "頂級克維拉防火布 (19mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=Kevlar+Wick+19mm"],
        details: "● 100% Kevlar 編織防火織帶，寬度 19mm，計價單位為每公尺。",
        sub: { "防火布 19mm (每公尺)": { price: 120, ship: 'small', img: "" } }, specs: {}
    },
    mats_cloth_25: {
        title: "頂級克維拉防火布 (25mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=Kevlar+Wick+25mm"],
        details: "● 100% Kevlar 編織防火織帶，寬度 25mm，計價單位為每公尺。",
        sub: { "防火布 25mm (每公尺)": { price: 140, ship: 'small', img: "" } }, specs: {}
    },
    mats_cloth_50: {
        title: "頂級克維拉防火布 (50mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=Kevlar+Wick+50mm"],
        details: "● 100% Kevlar 編織防火織帶，寬度 50mm，計價單位為每公尺。",
        sub: { "防火布 50mm (每公尺)": { price: 200, ship: 'small', img: "" } }, specs: {}
    },
    mats_rope_10: {
        title: "耐火克維拉圓繩 (10mm)", cat: "mats", hideSub: true,
        images: ["https://via.placeholder.com/400x300?text=Kevlar+Rope+10mm"],
        details: "● 10mm 圓型克維拉編織繩，適合編猴子球等火頭，單位為每公尺。",
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
