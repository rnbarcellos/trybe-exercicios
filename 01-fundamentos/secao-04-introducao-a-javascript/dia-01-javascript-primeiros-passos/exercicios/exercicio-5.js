// Triângulo válido - soma dos ângulos = 180
// ângulo < 0 = inválido

const angulo1 = 30;
const angulo2 = 40;
const angulo3 = 50;
const anguloTotal = angulo1 + angulo2 + angulo3;

if (anguloTotal == 180) {
  console.log(true);
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log("Triângulo inválido");
} else {
  console.log(false);
}
