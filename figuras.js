
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
    const lado = document.getElementById("inputLadoCuadrado").value;
    const perimetro = perimetroCuadrado(lado);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const lado = document.getElementById("inputLadoCuadrado").value;
    const area = areaCuadrado(lado);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const lado1 = parseInt(document.getElementById("inputLado1Triangulo").value);
    const lado2 = parseInt(document.getElementById("inputLado2Triangulo").value);
    const base = parseInt(document.getElementById("inputBaseTriangulo").value);
    const perimetro = perimetroTriangulo(lado1, lado2, base);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const base = parseInt(document.getElementById("inputBaseTriangulo").value);
    const altura = parseInt(document.getElementById("inputAlturaTriangulo").value);
    const area = areaTriangulo(base, altura);
    alert(area);
}

function calcularPerimetroCirculo() {
    const radio = document.getElementById("inputRadioCirculo").value;
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const radio = document.getElementById("inputRadioCirculo").value;
    const area = areaCirculo(radio);
    alert(area);
}
