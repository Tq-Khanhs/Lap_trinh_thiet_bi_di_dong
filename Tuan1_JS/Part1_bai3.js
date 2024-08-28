const dolphinScore1 = [96, 108, 89];

const koalasScore1 = [88, 91, 110];

const dolphinScore2 = [97, 112, 101];

const koalasScore2 = [109, 95, 123];

const dolphinScore3 = [97, 112, 101];

const koalasScore3 = [109, 95, 106];

function tinhTrungBinh(scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

function timDoiChienThang(dolphinScore, koalasScore) {
    const dolphineAverage = tinhTrungBinh(dolphinScore);
    const koalasAverage = tinhTrungBinh(koalasScore);

    if (dolphineAverage > koalasAverage && dolphineAverage >= 100) {
        console.log(`Dolphins thang voi diem trung binh la: ${dolphineAverage.toFixed(2)}`);
    } else if (koalasAverage > dolphineAverage && koalasAverage >= 100) {
        console.log(`Koalas thang voi diem trung binh la: ${koalasAverage.toFixed(2)} `);
    } else if (koalasAverage == dolphineAverage && koalasAverage >= 100) {
        console.log(`Ca hai doi hoa nhau voi nhau voi diem trung binh la: ${koalasAverage.toFixed(2)}`);
    } else
        console.log("Ca hai doi khong du tieu chuan de nhan cup");
}


timDoiChienThang(dolphinScore1, koalasScore1);
timDoiChienThang(dolphinScore2, koalasScore2);
timDoiChienThang(dolphinScore3, koalasScore3);