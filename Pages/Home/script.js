//Carrossel dos card de Serviços
let currentCard = 0;
const cards = document.querySelectorAll('.card');
const container = document.querySelector('.cards-container');
const totalCards = cards.length;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 30; 
  container.style.transform = `translateX(-${currentCard * cardWidth}px)`;

  cards.forEach((card, index) => {
    card.classList.toggle('ativo', index === currentCard);
  });
}

document.querySelector('.btn-proximo').addEventListener('click', () => {
  currentCard = (currentCard + 1) % totalCards;
  updateCarousel();
});

document.querySelector('.btn-anterior').addEventListener('click', () => {
  currentCard = (currentCard - 1 + totalCards) % totalCards;
  updateCarousel();
});

updateCarousel(); 

// area de Feedback carrossel de fundo


window.onload = () => {
  const imagens = document.querySelectorAll(".carrossel-container img");
  let indexAtual = 0;

  imagens[indexAtual].classList.add("active"); 

  function trocarImagem() {
    imagens[indexAtual].classList.remove("active");
    indexAtual = (indexAtual + 1) % imagens.length;
    imagens[indexAtual].classList.add("active");
  }

  setInterval(trocarImagem, 5000); 
};

