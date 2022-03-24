let $ = document.getElementById.bind(document);

/**
 * - Đầu vào: nhập số nguyên dương >= 2
 * 
 * - Xử lý: 
 * B1: tạo hàm kiểm tra số nhập vào có phải là số nguyên tố hay không
 * B2: tạo hàm in ra các số nguyên tố từ 2 -> n
 * B3: 
 * - tạo biến ketQuaIn = ""; để lưu kết quả
 * - gọi hàm inSoNguyenTo(n)
 * 
 * - Đầu ra: in kết quả ra màn hình
 * 
 */

function kiemTraSNT(n){
    if(n < 2){
        return 0;
    };

    for(i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return 0;
        };
    };
    
    return 1;
};

function inSoNguyenTo(n){
    var ketQua = "";
    for(j = 1; j <= n; j++){
        if(kiemTraSNT(j) == 1){
            ketQua += j + " ";
        };
    };
    return ketQua;
};

$("inSoNguyenTo").onclick = function(){
    var n = $("n").value *1;
    var ketQuaIn = "";
    
    ketQuaIn = inSoNguyenTo(n);
    
    $("ketQua").innerHTML = ketQuaIn;
};