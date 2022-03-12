const lista1 = [
    100,
    200,
    300,
    500,
];

function calcularMediaAritmética(lista) {
    let sumaLista = 0;
    sumaLista = lista.reduce((acum = 0, elem) => acum + elem);
    return sumaLista / lista.length;
}