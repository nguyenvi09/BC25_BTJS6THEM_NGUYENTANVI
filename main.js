let $ = document.getElementById.bind(document);

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

var ketQua = "";
function inSoNguyenTo(n){
    for(j = 1; j <= n; j++){
        if(kiemTraSNT(j) == 1){
            ketQua += j + " ";
        };
    };
    return ketQua;
};

$("tinhSoNguyenTo").onclick = function(){
    var n = $("n").value *1;

    if(kiemTraSNT(n) == 1){
       inSoNguyenTo(n);
    }else{
        ketQua = n + "không phải số nguyên tố";
    };

    $("ketQua").innerHTML = ketQua;
};