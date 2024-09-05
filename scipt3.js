function sumar() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").value=resultado;
}

function restar(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = num1-num2;
    document.getElementById("resultado").value=resultado;
}

    function calcular() {
        sumar();
        restar();
        
    }