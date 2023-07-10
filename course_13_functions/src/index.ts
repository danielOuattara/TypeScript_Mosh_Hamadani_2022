// functions

function sayMyName(name: string) {
  console.log(name);
}

function calculateTax_1(income: number): number {
  if (income < 50_000) {
    return income * 1.2;
  }
  return income * 1.3;
}

console.log(calculateTax_1(45_000)); // 54_000
console.log(calculateTax_1(51_000)); // 66_300

//----------------------------------------------------------------

function calculateTax_2(income: number, taxYear: number): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  // let x;
  return income * 1.3;
}

console.log(calculateTax_2(55_000, 2021)); // 66_000
console.log(calculateTax_2(55_000, 2023)); // 71_500

//----------------------------------------------------------------

function calculateTax_3(income: number, taxYear = 2022): number {
  if (taxYear < 2022) {
    return income * 1.2;
  }
  // let x;
  return income * 1.3;
}

console.log(calculateTax_3(55_000, 2021)); // 66_000
console.log(calculateTax_3(55_000, 2023)); // 71_500
