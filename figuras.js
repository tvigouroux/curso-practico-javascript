// Código del cuadrado
const perimetroCuadrado = lado => lado * 4;

const areaCuadrado = lado => lado ** 2;

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura) / 2;

const diametroCirculo = radio => radio * 2;

const perimetroCirculo = radio => diametroCirculo(radio) * Math.PI;

const areaCirculo = radio => Math.PI * ((diametroCirculo(radio) / 2) ** 2);
