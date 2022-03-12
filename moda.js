const lista1 = [
    1,
    2,
    3,
    4,
    4,
    6,
    1,
    2,
    3,
    5,
    4,
    4,
    1,
    4,
];

function calcularModa(lista) {
    let listaObjeto = {};
    lista.map(
        function (elem) {
            if (listaObjeto[elem]) {
                listaObjeto[elem]++;
            }
            else {
                listaObjeto[elem] = 1;
            }        
        }
    );
    const listaOrdenada = Object.entries(listaObjeto).sort(
        function (a, b) {
            return a[1] - b[1]
        }
    );
    return listaOrdenada[listaOrdenada.length - 1];    
}