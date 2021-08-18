function checkPhoneNumber(src) {
    src = prompt("nhập số điện thoại");
    rexg = /^[(][0-9]{2}[)]-[(][0][0-9]{9}[)]$/;
    if (rexg.test(src)){
        alert("số điện thoại hợp lệ ")
    } else {
        alert("số điện thoại không hợp lệ")
    }
}
checkPhoneNumber();