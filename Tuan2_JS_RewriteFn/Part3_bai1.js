const printForecast = (data)=>{
    var thongbao= "";
    for(var i=0; i<data.length; i++){
        thongbao += `... ${data[i]}°C in ${i + 1} days `;

    }
    return thongbao;
}

data1= [17, 21, 23];
data2= [12, 5, -5, 0, 4];
console.log(printForecast(data1));
console.log(printForecast(data2));