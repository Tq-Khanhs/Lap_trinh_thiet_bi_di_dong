const calcTip = (bill) =>(bill >= 50 && bill<=300? bill*0.15: bill *0.2);

const bills = [125,555,44];

var tips = [];

for(var i =0 ; i< bills.length; i++){
    tips.push(calcTip(bills[i]));
}
console.log("Mang tien tip", tips);

const total = (bills,tips)=>{
    var tot = []
    for(var i=0; i<bills.length; i++){
        tot.push(bills[i]+tips[i]);
    }
    return tot;
}

console.log("Mang tong hoa don ",total(bills,tips));