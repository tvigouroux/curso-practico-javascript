const lista1 = [
    100,
    200,
    500,
    600,
    700,
    10000000,
    1,
    450,
];

const esImpar = (num) => num % 2;

function calcularMediana(lista) {
    lista.sort((a , b) => a - b);
    if (esImpar(lista.length)) {
        return lista[parseInt(lista.length / 2)];
    }
    else {
        return (lista[lista.length / 2 - 1] + lista[lista.length / 2]) / 2;
    }
} 