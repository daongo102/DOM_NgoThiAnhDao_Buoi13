//! BÀI TẬP 1 - TÍNH LƯƠNG NHÂN VIÊN
/*
* Khối 1: INPUT
* - dayWork (số ngày làm việc)
* - daySal (lương một ngày)
*
* Khối 2: 
* - B1: Tạo hàm, gán hàm vào nút button
* - B2: Tạo biến, tìm đến thẻ và lấy giá trị của thẻ
* - B3: Tạo công thức tính
*       + totalSal = dayWork * daySal
*
* Khối 3: OUTPUT
* - totalSal (tổng tiền lương)
*/

function calcSal() {
    
    var dayWork = document.getElementById("inputWork").value;
    var daySal = document.getElementById("inputSal").value;
   
    var totalSal = dayWork * daySal
    
    document.getElementById("txtSal").innerHTML = totalSal.toLocaleString() + " VND"
}

document.getElementById("btnSal").onclick = calcSal;

