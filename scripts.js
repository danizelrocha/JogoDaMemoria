
// Crie uma matriz com pares de números representando as cartas
const cards = [1, 1, 2, 2, 3, 3, 4, 4];

// Crie um objeto para armazenar as imagens correspondentes para cada carta
async function generateImagePairs() {
  const imagePairs = {};
  for (let i = 0; i < cards.length; i++) {
    if (!imagePairs[cards[i]]) {
      const id = Math.floor(Math.random() * 1000) + 1;
      const url = `https://picsum.photos/id/${id}/200/300`;
      imagePairs[cards[i]] = [url, url];
    }
  }
  return imagePairs;
}
// Embaralhe a matriz de cartas
function shuffleCards(cards) {
    cards.sort(() => Math.random() - 0.5);
}

let flippedCards = 0;
let firstCard, secondCard;
let attempts = 0;

// continuar com a implementação
  