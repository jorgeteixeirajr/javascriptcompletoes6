var videoGames = ["Switch", "PS4", "XBOX", "3DS"];
console.log(videoGames[3]);

// var ultimoItem = videoGames.pop();
// console.log(ultimoItem);

// videoGames.push("3DS");
// console.log(videoGames);

// console.log(videoGames.length);

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}

videoGames.forEach(function (item, index) {
  console.log(item, index);
});

// EXERCÍCIO
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var copa = [1959, 1962, 1970, 1994, 2002];
console.log(copa);

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < copa.length; i++) {
  console.log(`O brasil ganhou a copa de ${copa[i]}!`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[4];
console.log(ultimaFruta);
