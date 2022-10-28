
// bài 1
document.getElementById("btn_1").onclick = function () {
    // đầu vào Diểm chuẩn,điểm 3 mon thi, đối tượng ưu tiên và khu vực ưu tiên
    var diemChuan1 = document.getElementById("diemChuan1").value * 1;

    var diemThi1_1 = document.getElementById("diemThi1_1").value * 1;
    var diemthi1_2 = document.getElementById("diemthi1_2").value * 1;
    var diemthi1_3 = document.getElementById("diemthi1_3").value * 1;

    var uuTienKV1 = document.getElementById("uuTienKV1").value;
    var uuTienDT1 = document.getElementById("uuTienDT1").value;
    // xử lí tạo 2 hàm hàm 1 dùng tính tổng điểm, hàm 2 dùng để tính điểm ưu tiên, rồi cộng lại gán vào điểm tổng kết, dụng if else để xác nhận dk
    // rồi gán và biến kq 1 ketQua1 để in ra
    var diemUuTien = diemUuTien1(uuTienKV1, uuTienDT1);
    var tongDiem1 = tinhTongDiem1(diemThi1_1, diemthi1_2, diemthi1_3);
    var diemTongket1 = diemUuTien * 1 + tongDiem1 * 1;
    var ketQua1 = "";
    if (diemThi1_1 < 0 || diemThi1_1 > 10 || diemthi1_2 < 0 || diemthi1_2 > 10 || diemthi1_3 < 0 || diemthi1_3 > 10) {
        ketQua1="<h2>Bạn nhập điểm sai, điểm chỉ từ 0 đến 10 mới có thể tính toán</h2>"
    }
    else {
        if (diemThi1_1 === 0 && diemthi1_2 === 0 && diemthi1_3 === 0) {
            ketQua1 = "<h2>Bạn đã thi rớt</h2>";
        }
        else if (diemTongket1 >= diemChuan1) {
            ketQua1 = "<h2>Bạn đã thi đậu" +" Tổng điểm của bạn là: " + diemTongket1 + "</h2>";
        }
        else {
            ketQua1 = "<h2>Bạn đã thi rớt</h2>";
        }
    }
    // đầu ra in ra màn hình kết quả "thí sinh đậu rớt, tổng số điểm đạt đươc"
    document.getElementById("ketQua1").innerHTML = ketQua1;
};

function tinhTongDiem1(a, b, c) {
    var result;
    result = a * 1 + b * 1 + c * 1;
    return result;
}
function diemUuTien1(uuTienKV1, uuTienDT1) {
    var khuVuc1 = "";
    switch (uuTienKV1) {
        case "A":
            khuVuc1 += 2;
            break;
        case "B":
            khuVuc1 += 1;
            break;
        case "C":
            khuVuc1 += 0.5;
            break;
        case "X":
            khuVuc1 += 0;
            break;

    }
    var doiTuong1="";
    switch (uuTienDT1) {
        case "1":
            doiTuong1 += 2.5;
            break;
        case "B":
            doiTuong1 += 1.5;
            break;
        case "C":
            doiTuong1 += 1;
            break;
        case "X":
            doiTuong1 += 0;
            break;

    }
    var result= khuVuc1*1+doiTuong1*1;
    return result;
}












// bài 2
document.getElementById("btn_2").onclick = function () {
    // đầu vào "tên", "số KW điện"
    var ten_2 = document.getElementById("ten_2").value;
    var soKW2 = document.getElementById("soKW2").value * 1;
    // đầu ra  tạo 2 biến gán kết quả tạo 5 hàm  dùng if else 
    var ketQua2="";
    var tienDien2 = 0;
    if (soKW2===0) {   //nếu chưa nhập thì code sẽ chạy tới đây đưa ra thông báo
        ketQua2="<h2>Vui lòng nhập số KW điện</h2>"
    } else {
        // dùng điều kiện để xác định mức tiền điện cần tính theo công thức 
        if (0 < soKW2 && soKW2 <= 50) {
            tienDien2 = tienDien_1(soKW2);
        }
        else if (50 < soKW2 && soKW2 <= 100) {
            tienDien2 = tienDien_1(soKW2) + tienDien_2(soKW2);
        }
        else if (100 < soKW2 && soKW2 <= 200) {
            tienDien2 = tienDien_1(soKW2) + tienDien_2(soKW2) + tienDien_3(soKW2);
        }
        else if (200 < soKW2 && soKW2 <= 350) {
            tienDien2 = tienDien_1(soKW2) + tienDien_2(soKW2) + tienDien_3(soKW2) + tienDien_4(soKW2);
        }
        else {
            tienDien2 = tienDien_1(soKW2) + tienDien_2(soKW2) + tienDien_3(soKW2) + tienDien_4(soKW2) + tienDien_5(soKW2);
        }
        ketQua2="<h2>Tên khách hàng: "+ten_2+"<br>Tiền điện: "+tienDien2+"</h2>"
    }
    // đầu ra thông báo số tiền điện hoặc yêu cầu khách hàng nhập tiền điện
    
    document.getElementById("ketQua2").innerHTML=ketQua2;
};
function tienDien_1(soKW2) {
    var result;
    if (0 < soKW2 && soKW2 <= 50) {
        result = soKW2 * 500;
    }
    else {
        result = 50 * 500;
    }
    return result;
};
function tienDien_2(soKW2) {
    var result;
    if (50 < soKW2 && soKW2 <= 100) {
        result = (soKW2 - 50) * 650;
    }
    else {
        result = 50 * 650;
    }
    return result;
};
function tienDien_3(soKW2) {
    var result;
    if (100 < soKW2 && soKW2 <= 200) {
        result = (soKW2 - 100) * 850;
    }
    else {
        result = 100 * 850;
    }
    return result;
};
function tienDien_4(soKW2) {
    var result;
    if (200 < soKW2 && soKW2 <= 350) {
        result = (soKW2 - 200) * 1100;
    }
    else {
        result = 150 * 1100;
    }
    return result;
};
function tienDien_5(soKW2) {
    var result;
    result = (soKW2 - 350) * 1300;
    return result;
};
