
// Cuadrado
const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado ** 2;

// Triángulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

// Círculo
const diametroCirculo = radio => radio * 2;
const perimetroCirculo = radio => diametroCirculo(radio) * Math.PI;
const areaCirculo = radio => Math.PI * ((diametroCirculo(radio) / 2) ** 2);

// Interactuando con HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputLadoCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputLadoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
