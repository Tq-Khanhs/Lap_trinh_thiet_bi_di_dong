const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86 , 52];

let tips = [];
let totals = [];

const calcTips = (bills)=>{
    for(var i=0 ; i < bills.length ; i ++){
        if(bills[i] >= 50 && bills[i] <= 300){
            tips.push(bills[i] *0.15);
            totals.push(bills[i]+tips[i]);
            
        }else{
            tips.push(bills[i] *0.2);
            totals.push(bills[i]+tips[i]);
        }
    }
}

calcTips(bills);
console.log("Mang tien tips: ", tips);

console.log("Mang tong hoa don ", totals);

const calcAverage = (arr)=>{
    let sum = 0;
    for(var i=0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

console.log("Trung binh tong hoa don: ", calcAverage(totals));