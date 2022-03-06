// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado ** 2;
} 

console.groupEnd();

// Código del triángulo
console.group("Triángulo");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

console.groupEnd();

// Código del círculo
console.group("Círculo");

function diametroCirculo(radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    return diametroCirculo(radio) * Math.PI;
}

function areaCirculo(radio) {
    return Math.PI * ((diametroCirculo(radio) / 2) ** 2);
}

console.groupEnd();
