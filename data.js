/* ============================================================
 *  ข้อมูลลูกค้าโรงรับจำนำ NEXUS PAWN — สร้างโดยหน้าแอดมิน (admin.html)
 *  สร้างเมื่อ: 08/07/2026 โดย pumcha
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
    id: "345",
    name: "2345",
    transactions: [
    ],
  },
];
