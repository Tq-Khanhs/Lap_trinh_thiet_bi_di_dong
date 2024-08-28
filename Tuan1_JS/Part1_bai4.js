const billValue1 = 275;
const billValue2 = 40;
const billValue3 = 430;

const tip1 = billValue1 >= 50 && billValue1 <= 300 ? billValue1 *0.15 : billValue1*0.2;

const tip2 = billValue2 >= 50 && billValue2 <= 300 ? billValue2*0.15 : billValue1*0.2;
const tip3 = billValue3 >= 50 && billValue3 <= 300 ? billValue3 *0.15 : billValue1*0.2;

const total1 = billValue1 + tip1;
const total2 = billValue2 + tip2;
const total3 = billValue3 + tip3;

console.log(`Gia tri cua bill thu 1 la ${billValue1}, tien tiep cua don thu 1 la ${tip1}, tong hoa don la: ${total1}`);


console.log(`Gia tri cua bill thu 2 la ${billValue2}, tien tiep cua don thu 2 la ${tip2}, tong hoa don la: ${total2}`);


console.log(`Gia tri cua bill thu 3 la ${billValue3}, tien tiep cua don thu 3 la ${tip3}, tong hoa don la: ${total3}`);