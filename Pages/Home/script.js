
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

// area do outros dipo de serviços

const track = document.querySelector('.carrossel-track');
  track.innerHTML += track.innerHTML; // duplica os itens

  

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

// area de Feedback carrossel dos card

document.addEventListener("DOMContentLoaded", () => {
  const carrossel = document.getElementById('carrosel-feedback');

  // ===== Scroll com o mouse (drag) =====
  let isDown = false;
  let startX;
  let scrollLeft;

  carrossel.addEventListener('mousedown', (e) => {
    isDown = true;
    carrossel.classList.add('dragging');
    startX = e.pageX - carrossel.offsetLeft;
    scrollLeft = carrossel.scrollLeft;
  });

  carrossel.addEventListener('mouseleave', () => {
    isDown = false;
    carrossel.classList.remove('dragging');
  });

  carrossel.addEventListener('mouseup', () => {
    isDown = false;
    carrossel.classList.remove('dragging');
  });

  carrossel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carrossel.offsetLeft;
    const walk = (x - startX) * 50;
    carrossel.scrollLeft = scrollLeft - walk;
  });

  // ===== Autoscroll automático =====
  setInterval(() => {
    const scrollAmount = 350; // distância de avanço
    const maxScrollLeft = carrossel.scrollWidth - carrossel.clientWidth;

    if (carrossel.scrollLeft + scrollAmount >= maxScrollLeft) {
      carrossel.scrollLeft = 0;
    } else {
      carrossel.scrollLeft += scrollAmount;
    }
  }, 8000); 
});

// area de Contador animado

document.addEventListener('DOMContentLoaded', function() {
    const counterElements = document.querySelectorAll('.card-status p');
    
    // Opções do Intersection Observer
    const options = {
        threshold: 0.5 // Quando 50% do elemento estiver visível
    };
    
    // Criar o observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const parentCard = counter.closest('.card-status');
                const spanText = parentCard.querySelector('span').textContent;
                
                animateCounter(counter, target, spanText);
                observer.unobserve(counter); // Parar de observar após iniciar
            }
        });
    }, options);
    
    // Observar cada contador
    counterElements.forEach(counter => {
        observer.observe(counter);
    });
    
    // Função para animar o contador
    function animateCounter(element, target, spanText) {
        const duration = 2000; // 2 segundos
        const startValue = 0;
        const startTime = performance.now();
        
        // Verificar se é porcentagem ou se tem sinal de +
        const isPercentage = spanText.includes('%');
        const isPlus = spanText.includes('+');
        
        function updateCounter(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Usar curva de easing (cúbica)
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(easedProgress * target);
            
            // Atualizar o elemento
            if (isPercentage) {
                element.textContent = currentValue + '%';
            } else if (isPlus) {
                element.textContent = '+' + currentValue;
            } else {
                element.textContent = currentValue;
            }
            
            // Continuar a animação se não terminou
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                // Garantir o valor final exato
                if (isPercentage) {
                    element.textContent = target + '%';
                } else if (isPlus) {
                    element.textContent = '+' + target;
                } else {
                    element.textContent = target;
                }
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
});


