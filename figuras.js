
// Cuadrado
const perimetroCuadrado = lado => lado * 4;
const areaCuadrado = lado => lado ** 2;

// Triángulo
function revisarIsoceles(lado1, lado2, lado3) {
    esIsoceles = false;
    if (lado1 == lado2) {
        esIsoceles = true;
    }
    else if (lado1 == lado3) {
        esIsoceles = true;
    }
    else if (lado2 == lado3) {
        esIsoceles = true;
    }
    return esIsoceles;
}
function hHeron(lado1, lado2, lado3) {
    s = (lado1 + lado2 + lado3) / 2;
    a = s * (s - lado1) * (s - lado2) * (s - lado3);
    area = Math.sqrt(a);
    altura = 2 * area / lado1;
    return altura;
}

const perimetroTriangulo = (lado1, lado2, lado3) => lado1 + lado2 + lado3;
const areaTriangulo = (lado1, lado2, lado3) => (lado1 * hHeron(lado1,lado2,lado3)) / 2;

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
    const lado3 = parseInt(document.getElementById("inputLado3Triangulo").value);
    const perimetro = perimetroTriangulo(lado1, lado2, lado3);
    alert(perimetro);
}

function calcularAreaTriangulo() {
    const lado1 = parseInt(document.getElementById("inputLado1Triangulo").value);
    const lado2 = parseInt(document.getElementById("inputLado2Triangulo").value);
    const lado3 = parseInt(document.getElementById("inputLado3Triangulo").value);
    const area = areaTriangulo(lado1, lado2, lado3);
    alert(area);
}

function verificarIsoceles() {
    const lado1 = parseInt(document.getElementById("inputLado1Triangulo").value);
    const lado2 = parseInt(document.getElementById("inputLado2Triangulo").value);
    const lado3 = parseInt(document.getElementById("inputLado3Triangulo").value);
    if (revisarIsoceles(lado1, lado2, lado3)) {
        alert("Es isóceles!!!");
    }
    else {
        alert("No es isóceles :(");
    }
    
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
