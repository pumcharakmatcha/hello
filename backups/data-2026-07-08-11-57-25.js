/* ============================================================
 *  ข้อมูลลูกค้าโรงรับจำนำ NEXUS PAWN — สร้างโดยหน้าแอดมิน (admin.html)
 *  สร้างเมื่อ: 08/07/2026 โดย sen
 *  นำไฟล์นี้ไปวางแทนที่ data.js ใน GitHub เพื่ออัปเดตหน้าเว็บลูกค้า
 * ============================================================ */

const INTEREST_RATE = 0.03; // ดอกเบี้ยทบต้นรายวัน (เริ่มคิดวันถัดจากวันฝาก)

const SHOP = {
  "name": "NEXUS PAWN",
  "nameTh": "โรงรับจำนำ NEXUS PAWN",
  "currency": "XC"
};

const CUSTOMERS = [
  {
    id: "ID00",
    name: "ชื่อ",
    transactions: [
      { date: "2026-07-01", type: "ฝาก", item: "Lunar Dagger", amount: 1000000, admin: "pumcha" },
      { date: "2026-07-04", type: "คืน", amount: -592727, admin: "pumcha" },
      { date: "2026-07-05", type: "คืน", amount: -515000, admin: "pumcha" },
    ],
  },
  {
    id: "ID01",
    name: "Pumcha",
    transactions: [
      { date: "2026-07-01", type: "ฝาก", item: "NF snooker", amount: 1000000, admin: "pumcha" },
      { date: "2026-07-04", type: "คืน", amount: -592727, admin: "pumcha" },
      { date: "2026-07-05", type: "ฝาก", item: "ไวเบรเนี่ยม", amount: 2700000, admin: "pumcha" },
    ],
  },
  {
    id: "ID02",
    name: "Sen",
    transactions: [
      { date: "2026-07-07", type: "ฝาก", item: "E car", amount: 18888888, admin: "sen" },
    ],
  },
  {
    id: "ID03",
    name: "Ex",
    transactions: [
      { date: "2026-07-08", type: "ฝาก", item: "1", amount: 1500000, admin: "sen" },
    ],
  },
];
