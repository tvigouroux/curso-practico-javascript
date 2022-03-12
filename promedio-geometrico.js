const lista1 = [
    100,
    200,
    300,
    500,
];

function calcularMediaGeometrica(lista) {
    let productoLista = 0;
    productoLista = lista.reduce((acum = 0, elem) => acum * elem);
    return Math.pow(productoLista, 1 / lista.length);
}