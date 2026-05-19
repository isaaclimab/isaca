javascript
function scrollToMenu() {
  document.getElementById('menu').scrollIntoView({
    behavior: 'smooth'
  });
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0px)';
  });
});
