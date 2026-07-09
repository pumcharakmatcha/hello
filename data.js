/* ============================================================
 *  ข้อมูลลูกค้าโรงรับจำนำ NEXUS PAWN
 *  แก้ไขผ่านหน้าแอดมิน (admin.html) แล้วกดบันทึกขึ้นเว็บจริงได้เลย
 * ============================================================ */

const INTEREST_RATE = 0.03; // ดอกเบี้ยทบต้นรายวัน (เริ่มคิดวันถัดจากวันฝาก)

const SHOP = {
  name: "NEXUS PAWN",
  nameTh: "โรงรับจำนำ NEXUS PAWN",
  currency: "XC",
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
  {
    id: "99999",
    name: "Mina",
    transactions: [
      { date: "2026-07-01", type: "ฝาก", item: "Jade 4 เม็ด", amount: 800000, admin: "Pumcha" },
      { date: "2026-07-07", type: "คืน", amount: -955242, admin: "Pumcha" },
    ],
  },
  {
    id: "88888",
    name: "Kenji",
    transactions: [
      { date: "2026-07-02", type: "ฝาก", item: "แฟชั่นเพลิงนวลบิน", amount: 800000, admin: "Sen" },
      { date: "2026-07-05", type: "คืน", amount: -400000, admin: "Sen" },
      { date: "2026-07-08", type: "คืน", amount: -518151, admin: "Sen" },
    ],
  },
  {
    id: "77777",
    name: "Fah",
    transactions: [
      { date: "2026-07-06", type: "ฝาก", item: "ไวเบรเนี่ยม 2 ชิ้น", amount: 5400000, admin: "Matcha" },
      { date: "2026-07-08", type: "คืน", amount: -5728860, admin: "Matcha" },
    ],
  },
];
