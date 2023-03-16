<<<<<<< HEAD
/**
xếp lọai điểm học lực cấp 3



 */
=======
let dtb = 15;
    if(dtb >= 8 && dtb < 10){
        console.log("Giỏi");
    }
    if(dtb >= 5 && dtb < 8){
        console.log("Khá");
    }
    if(dtb >=0 && dtb <5){
        console.log("Yếu");
    }
    // false && true => false
    if(dtb <0 || dtb >10){
        console.log("Diem khong hop le");
    }

    let dtb = 15;
    if (dtb >= 9 && dtb < 10) {
        console.log("Xuất sắc");
    } else if (dtb >= 8 && dtb < 9) {
        console.log("Giỏi");
    } else if (dtb >= 7 && dtb < 8) {
        console.log("Khá");
    } else if (dtb >= 5 && dtb < 7) {
        console.log("Trung bình");
    } else if (dtb >= 0 && dtb < 5) {
        console.log("Yếu");
    } else {
        console.log("Điểm không hợp lệ");
    }
<<<<<<< HEAD

    switch (months=3) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log("Tháng có 31 ngày");
            break;
        case 7:
            console.log("Tháng có 31 ngày");
            break;
        case 2:
            console.log("Tháng có 28 ngày");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log("Tháng có 30 ngày");
        default:
            break;
    }
