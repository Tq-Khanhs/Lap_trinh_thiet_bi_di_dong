let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI1 = markMass1 / (markHeight1 ** 2);
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);


let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);

function compareBMIs(markBMI, johnBMI) {
    if (markBMI > johnBMI) {
        console.log(`Mark BMI (${markBMI.toFixed(2)}) is higher than John (${johnBMI.toFixed(2)})`);
    } else if (markBMI < johnBMI) {
        console.log(`John BMI (${johnBMI.toFixed(2)}) is higher than Mark BMI (${markBMI.toFixed(2)})`);
    } else
        console.log(`John BMI (${johnBMI.toFixed(2)}) is equal Mark BMI (${markBMI.toFixed(2)})`);
}

compareBMIs(markBMI1, johnBMI1);

compareBMIs(markBMI2, johnBMI2);