/* ============================================================
 *  engine.js — ฟังก์ชันกลางที่ใช้ร่วมกันระหว่าง
 *  หน้าลูกค้า (index.html) และหน้าแอดมิน (admin.html)
 * ============================================================ */
"use strict";

/* ---------- โลโก้ร้าน (สัญลักษณ์โรงรับจำนำสามลูกกลม + TOB) ---------- */
function logoSVG(size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="50" cy="50" r="47" fill="#1a2333" stroke="#e8b84b" stroke-width="4"/>' +
    '<circle cx="35" cy="38" r="11" fill="#e8b84b"/>' +
    '<circle cx="65" cy="38" r="11" fill="#e8b84b"/>' +
    '<circle cx="50" cy="60" r="11" fill="#e8b84b"/>' +
    '<text x="50" y="86" text-anchor="middle" font-family="Georgia, serif" font-size="15" font-weight="bold" fill="#e8b84b">TOB</text>' +
    '</svg>';
}

/* ---------- เครื่องมือวันที่ / ตัวเลข ---------- */
function parseISO(s) {
  const p = s.split("-");
  return new Date(+p[0], +p[1] - 1, +p[2], 12, 0, 0); // เที่ยงวัน กัน timezone เพี้ยน
}
function isoKey(d) {
  return d.getFullYear() + "-" +
    String(d.getMonth() + 1).padStart(2, "0") + "-" +
    String(d.getDate()).padStart(2, "0");
}
function fmtDate(d) { // DD/MM/YY
  return String(d.getDate()).padStart(2, "0") + "/" +
    String(d.getMonth() + 1).padStart(2, "0") + "/" +
    String(d.getFullYear()).slice(-2);
}
function fmtDateFull(d) { // DD/MM/YYYY
  return String(d.getDate()).padStart(2, "0") + "/" +
    String(d.getMonth() + 1).padStart(2, "0") + "/" + d.getFullYear();
}
function fmtNum(n) { return n.toLocaleString("en-US"); }
function today() { const t = new Date(); return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 12, 0, 0); }

/* ---------- เครื่องคิดดอกเบี้ย ----------
 * กติกา (ตามบัญชีของร้าน):
 *  - วันแรก (วันฝาก) ไม่คิดดอกเบี้ย
 *  - วันถัดไปคิดดอกเบี้ยทบต้น 3% ของยอดคงเหลือเมื่อสิ้นวันก่อนหน้า
 *  - วันที่มีรายการฝาก/คืน จะบวกดอกเบี้ยของวันนั้นก่อน แล้วจึงบวก/หักยอดรายการ
 *  - คำนวณตั้งแต่วันแรกจนถึงวันปัจจุบัน หรือวันที่ยอดคงเหลือ ≤ 0 (แล้วแต่ว่าถึงก่อน)
 */
function computeLedger(customer, asOf) {
  const txs = customer.transactions.slice()
    .sort((a, b) => a.date.localeCompare(b.date));
  if (txs.length === 0) return { rows: [], balance: 0, totals: { deposit: 0, interest: 0, repaid: 0 }, closedDate: null };

  const byDate = {};
  txs.forEach(tx => { (byDate[tx.date] = byDate[tx.date] || []).push(tx); });

  const start = parseISO(txs[0].date);
  let balance = 0;
  let first = true;
  const rows = [];
  const totals = { deposit: 0, interest: 0, repaid: 0 };
  let closedDate = null;
  const d = new Date(start);

  while (true) {
    let interest = 0;
    if (!first && balance > 0) {
      interest = Math.round(balance * INTEREST_RATE);
      balance += interest;
      totals.interest += interest;
    }
    const dayTxs = byDate[isoKey(d)] || [];
    dayTxs.forEach(tx => {
      balance += tx.amount;
      if (tx.amount > 0) totals.deposit += tx.amount;
      else totals.repaid += -tx.amount;
    });
    rows.push({ date: new Date(d), interest: interest, txs: dayTxs, balance: balance });

    if (balance <= 0) { closedDate = new Date(d); break; }
    if (d.getTime() >= asOf.getTime()) break;
    d.setDate(d.getDate() + 1);
    first = false;
  }
  return { rows: rows, balance: balance, totals: totals, closedDate: closedDate };
}

function rowLabel(row) {
  const parts = [];
  row.txs.forEach(tx => {
    let t = tx.type || (tx.amount >= 0 ? "ฝาก" : "คืน");
    if (tx.item) t += " " + tx.item;
    parts.push(t);
  });
  if (row.interest > 0) parts.push("ดอกเบี้ย");
  if (parts.length === 0) parts.push("ดอกเบี้ย");
  return parts.join(" + ");
}
