//!BÀI TẬP 4 - TÍNH DIỆN TÍCH, CHU VI HCN
/*
* Khối 1: INPUT
* - calcWidth (chiều rộng)
* - calcLength (chiều dài)
*
* Khối 2:
* - B1: Tạo hàm, gán hàm vào nút button
* - B2: Tạo biến, tìm đến thẻ và lấy giá trị của thẻ
* - B3: Chuyển DL từ kiểu string sang number và tạo công thức tính
*       + calcArea = Number(calcWidth) * Number(calcLength)
*       + calcPer =  (Number(calcWidth) + Number(calcLength)) * 2
*
* Khối 3: OUTPUT
* - calcArea (Diện tích HCN)
* - calcPer (Chu vi HCN)
*/

function calcRec() {
  
    var calcLength = document.getElementById("inputLength").value;
    var calcWidth = document.getElementById("inputWidth").value;
    
    var calcArea = Number(calcLength) * Number(calcWidth);
    var calcPer = (Number(calcLength) + Number(calcWidth)) * 2;

    document.getElementById("txtCalc").innerHTML = "Diện tích: " + calcArea + "<br> Chu vi: " + calcPer
}

document.getElementById("btnCalc").onclick = calcRec;