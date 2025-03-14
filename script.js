// Create particles dynamically
const particleContainer = document.createElement('div');
particleContainer.classList.add('particles');
document.body.appendChild(particleContainer);

for (let i = 0; i < 50; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.width = `${Math.random() * 10 + 5}px`;
  particle.style.height = particle.style.width;
  particle.style.top = `${Math.random() * 100}vh`;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
  particleContainer.appendChild(particle);
}

document.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Prevent right-click menu
});
