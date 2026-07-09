/* ============================================================
 *  ข้อมูลลูกค้าโรงรับจำนำ NEXUS PAWN — สร้างโดยหน้าแอดมิน (admin.html)
 *  สร้างเมื่อ: 08/07/2026 โดย Sen
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
    id: "00001",
    name: "Pumcha",
    transactions: [
      { date: "2026-07-06", type: "ฝาก", item: "Jade 2 เม็ด", amount: 400000, admin: "Pumcha" },
      { date: "2026-07-07", type: "คืน", amount: -250000, admin: "Pumcha" },
    ],
  },
];
