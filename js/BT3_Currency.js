//!BÀI TẬP 3 - QUY ĐỔI TIỀN
/*
* Khối 1: INPUT
* - defVnd = 23500 (tỷ giá mặc định)
* - moneyUsd (số tiền cần đổi)
*
* Khối 2: 
* - B1: Tạo hàm, gán hàm vào nút button* 
* - B2: Tạo công thức tính
*       + exchange = 23500 * moneyUsd
*
* Khối 3: OUTPUT
* - exchange (số tiền quy đổi)
*/

function exchCur() {
    // console.log("first")
    var defVnd = 23500;
    var moneyUsd = document.getElementById("inputCur").value;
    
    var exchange = defVnd * moneyUsd

    document.getElementById("txtCur").innerHTML = exchange.toLocaleString() + " VND"    
}

document.getElementById("btnCur").onclick = exchCur;