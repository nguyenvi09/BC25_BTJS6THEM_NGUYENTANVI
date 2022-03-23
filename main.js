let $ = document.getElementById.bind(document);

function kiemTraSNT(n){
    if(n < 2){
        return 0;
    };

    for(i = 2; i <= Math.sqrt(n); i++){
        if(n % i == 0){
            return 0;
        }
    };
    return 1;
};

$("tinhSoNguyenTo").onclick = function(){
    var n = $("n").value *1;
    var ketQua = "";

    if(n >= 2){
        console.log(n + " là số nguyên tố");
    };
    for(i = 3; i < n; i += 2){
        if(kiemTraSNT(n) == 1){
            console.log(ketQua += i);
        };
    };
};