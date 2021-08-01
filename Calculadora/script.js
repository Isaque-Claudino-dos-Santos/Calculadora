let v1 = "";
let ope = "";
let v2 = "";
let res = "";
let numeroInt = true;
let Valormax = 8;

function pegarValor(v) {
    if (v1.length < Valormax) {
        if (v === Number(v) || v === ".") {
            v1 += v;
        } else {
            if (v !== "+/-") {
                ope = v;
            }
            Valormax = v1.length;
        }
    } else {
        if (v === Number(v) || v === ".") {
            v2 += v;
        }
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
    }
}

function calcular() {
    verificaOperador(ope);
    exibir(res)
    reset();
}

function limpar() {
    reset();
    exibir("CLEAR");
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