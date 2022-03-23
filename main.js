let $ = document.getElementById.bind(document);

$("tinhSoNguyenTo").onclick = function(){
    var n = $("n").value;
    var ketQua = "";

    // kiểm tra số nhập vào có phải là số nguyên tố hay không
    if(n < 2){
        console.log(n + " Không phải là số nguyên tố");
    }else{
        for(i = 2; i <= (n-1); i++){
            if(n % i == 0){
                console.log("Không phải là số nguyên tố"); 
            }else{
                ketQua += i;
            };
        };
    };

    console.log(ketQua);
};
