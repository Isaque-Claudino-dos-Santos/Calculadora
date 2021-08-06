let v1 = "";
let ope = "";
let v2 = "";
let res = "";
let numeroInt = true;
let loopOpe = true;
let Valormax = 8;

function pegarValor(v) {
    if (v1.length < Valormax) {
        if (v === Number(v) || v === "." && v !== "+/-") {
            v1 += v;
            
        } else {
            if (v !== "+/-" && v1 !== "") { 
                ope = v;
                Valormax = v1.length;
            }
        }
    } else {
        if (v === Number(v) || v === "." && v !== "+/-") {
            v2 += v;
        }
    }

    if (v === "+/-" && loopOpe) {
        v1 = "-" + v1;
        loopOpe = false;
    } else if (v === "+/-" && loopOpe === false) {
        v1 = v1.substr(1, v1.length);
        loopOpe = true;
    }


    if (v === ".") {
        numeroInt = true;
    } else {
        numeroInt = false;
    }

    

    exibir(v1 + ope + v2);
}

function verificaOperador(operador) {
    if (numeroInt) {
        v1 = parseInt(v1);
        v2 = parseInt(v2);
    } else {
        v1 = parseFloat(v1);
        v2 = parseFloat(v2);
    }

    switch (operador) {
        case "+":
            res = v1 + v2;
            break;
        case "-":
            res = v1 - v2;
            break;
        case "*":
            res = v1 * v2;
            break;
        case "/":
            res = v1 / v2;
            break;
        case "%":
            if (isNaN(v2)) {
                res = v1 / 100;
            } else {
                v1 = v1 / 100;
                v2 = v2 / 100;
                res = v1 + v2;
            }
    }
}

function calcular() {
    verificaOperador(ope);
    exibir(res)
    reset();
}

function limparAll() {
    reset();
    exibir("CLEAR");
}

function limpar() {
    if (v1 !== "" && v2 !== "") {
        v2 = v2.substr(0, v2.length - 1);
    } else if (v2 === "") {
        if (ope !== "") {
            ope = "";
        } else {
            v1 = v1.substr(0, v1.length - 1);
        }
    }

    exibir(v1 + ope + v2);
}

function exibir(res) {
    document.querySelector(".resutado").innerHTML = res;
}

function reset() {
    v1 = "";
    ope = "";
    v2 = "";
    res = "";
    NumeroInt = true;
    Valormax = 8;
}