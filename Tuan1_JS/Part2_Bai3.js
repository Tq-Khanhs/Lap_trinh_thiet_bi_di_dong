const calcBMI = (weight, height)=>{
    return weight/(height**2);
}

Mark = [78,1.9];
John = [92,1.95];

markBMI = calcBMI(Mark[0],Mark[1]);
johnBMI = calcBMI(John[0],John[1]);

if(markBMI > johnBMI){
    console.log(`Chỉ số BMI của Mark (${markBMI}) cao hơn của John (${johnBMI})`);

}else   
    console.log(` Chỉ số BMI của John (${johnBMI}) cao hơn của Mark (${markBMI})`);