// **#10** Utilize `if/else` para escrever um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// >- Atente que, sobre o custo do produto, incide um imposto de 20%.
// >- Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// >- O lucro de um produto é o resultado da subtração do valor de venda pelo custo deste, sendo que o imposto de 20% também faz parte do valor de custo.
// >- - valorCustoTotal = valorCusto + impostoSobreOCusto;
// >- - lucro = valorVenda - valorCustoTotal (lucro de um produto);

//Primeira tentativa: falha
const prodCost = 15
const sellValue = 38

if (prodCost < 0 || sellValue < 0) {
 console.log("Valor precisa ser maior que 0")
}

let totalCost = prodCost + (prodCost * 1.2)
let profit = (sellValue - totalCost) * 1000

console.log(profit);

//Segunda tentativa: certo!
const prodCost = 15
const sellValue = -2

let totalCost
let profit

if (prodCost >= 0 && sellValue >= 0) {
  totalCost = prodCost + (prodCost * 1.2)
  profit = (sellValue - totalCost) * 1000
  console.log(profit);
} else {
  console.log("Valor precisa ser maior que 0");
}
