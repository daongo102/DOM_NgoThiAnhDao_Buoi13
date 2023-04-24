//!BÀI TẬP 2 - TÍNH GIÁ TRỊ TRUNG BÌNH
/*
* Khối 1: INPUT
* - so1, so2, so3, so4, so5 (biến của các số cần nhập)
*
* Khối 2: 
* - B1: Tạo hàm, gán hàm vào nút button
* - B2: Tạo biến, tìm đến thẻ và lấy giá trị của thẻ
* - B3: Chuyển DL từ kiểu string sang number và tạo công thức tính
*       + average = (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5)) / 5
*
* Khối 3: OUTPUT
* - average (tổng trung bình)
*/

function calcAver() {
   
    var so1 = document.getElementById("inputNum1").value;
    var so2 = document.getElementById("inputNum2").value;
    var so3 = document.getElementById("inputNum3").value;
    var so4 = document.getElementById("inputNum4").value;
    var so5 = document.getElementById("inputNum5").value;
         
    var average = (Number(so1) + Number(so2) + Number(so3) + Number(so4) + Number(so5))/5;

    document.getElementById("txtAver").innerHTML = "Giá trị trung bình là: " + average 
}

document.getElementById("btnAver").onclick = calcAver;