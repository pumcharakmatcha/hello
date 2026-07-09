/* ============================================================
 *  ข้อมูลลูกค้าโรงรับจำนำ NEXUS PAWN
 *  ข้อมูลชุดนี้เป็นข้อมูลตัวอย่างสำหรับทดลองระบบ (ยังไม่ใช่ลูกค้าจริง)
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
    id: "99999",
    name: "Mina",
    transactions: [
      { date: "2026-07-05", type: "ฝาก", item: "Dragon Blade", amount: 2000000, admin: "Pumcha" },
    ],
  },
  {
    id: "88888",
    name: "Kenji",
    transactions: [
      { date: "2026-07-03", type: "ฝาก", item: "Phoenix Wing", amount: 1500000, admin: "Sen" },
      { date: "2026-07-06", type: "คืน", amount: -800000, admin: "Sen" },
    ],
  },
  {
    id: "77777",
    name: "Fah",
    transactions: [
      { date: "2026-07-01", type: "ฝาก", item: "Star Amulet", amount: 500000, admin: "Matcha" },
      { date: "2026-07-04", type: "คืน", amount: -546364, admin: "Matcha" },
    ],
  },
];
