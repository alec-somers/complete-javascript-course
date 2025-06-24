"use strict";

const bill = 100;

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

const bills = [125, 555, 44];
const tips = [18.75, 111, 8.8];
const totals = [143.75, 666, 52.8];
