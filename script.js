function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
  menu.classList.toggle("hidden");
}
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
window.addEventListener('load', () => {
  const intro = document.getElementById('intro');
  setTimeout(() => {
    intro.style.display = 'none';
  }, 4000); // After animation ends
});
// Animate service cards on scroll
const cards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});
// Auto-scroll services horizontally
const serviceContainer = document.querySelector('.service-container');
let scrollAmount = 0;

function autoScroll() {
  if (!serviceContainer) return;

  const maxScrollLeft = serviceContainer.scrollWidth - serviceContainer.clientWidth;

  if (scrollAmount >= maxScrollLeft) {
    scrollAmount = 0; // Reset to start
  } else {
    scrollAmount += 1;
  }

  serviceContainer.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });

  requestAnimationFrame(autoScroll);
}

// Start auto-scrolling when page loads
window.addEventListener('load', () => {
  autoScroll();
});

function openPreview(imgElement) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = imgElement.src;
  lightboxImg.alt = imgElement.alt;
}

function closePreview() {
  document.getElementById('lightbox').style.display = 'none';
}
const images = Array.from(document.querySelectorAll(".image-card img, .gallery-grid img"));
let currentIndex = 0;

function openPreview(index) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');

  currentIndex = index;
  lightbox.style.display = 'flex';
  lightboxImg.src = images[index].src;
  caption.textContent = images[index].alt;
}

function closePreview() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  lightboxImg.src = images[currentIndex].src;
  caption.textContent = images[currentIndex].alt;
}