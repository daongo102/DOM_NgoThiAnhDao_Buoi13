//!BÀI TẬP 5 - TÍNH TỔNG 2 KÝ SỐ
/*
* Khối 1: INPUT
* - numb (số có 2 chữ số)
* - ten (số hàng chục)
* - unit (số hàng đơn vị)
*
* Khối 2:
* - B1: Tạo hàm, gán hàm vào nút button
* - B2: Tạo công thức tính
*       + ten = Math.floor(numb/10)
*       + unit = numb % 10
*       + total = ten + unit
*
* Khối 3: OUTPUT
* - total (tổng 2 ký số)
*/

function calcTotal() {
   
    var numb = document.getElementById("inputNumb").value;

    var ten = Math.floor(numb / 10);
    var unit = numb % 10;
    var total = ten + unit;
    
    document.getElementById("txtTotal").innerHTML = "Tổng 2 ký số là: " + total    
}

document.getElementById("btnTotal").onclick = calcTotal;