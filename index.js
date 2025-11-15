// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  const shown = mobileMenu.classList.contains('show');
  mobileMenu.setAttribute('aria-hidden', !shown);
});

// reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Stat counters
const nums = document.querySelectorAll('.num');
nums.forEach(el => {
  const target = +el.getAttribute('data-target') || 0;
  let current = 0;
  const step = Math.max(1, Math.floor(target / 60));
  const id = setInterval(() => {
    current += step;
    if (current >= target) {
      el.textContent = target;
      clearInterval(id);
    } else {
      el.textContent = current;
    }
  }, 18);
});

// Floating blobs
const blobA = document.querySelector('.blob-a');
const blobB = document.querySelector('.blob-b');
let t = 0;
function floatBlobs() {
  t += 0.012;
  blobA.style.transform = `translate3d(${Math.sin(t) * 18}px, ${Math.cos(t) * 10}px,0) rotate(${t * 12}deg)`;
  blobB.style.transform = `translate3d(${Math.cos(t) * 22}px, ${Math.sin(t) * 12}px,0) rotate(-${t * 8}deg)`;
  requestAnimationFrame(floatBlobs);
}
requestAnimationFrame(floatBlobs);

// Helpers
function scrollToContact() {
  const el = document.getElementById('contact');
  if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
}

function learnMore() {
  alert('We run a staged hiring process: Intake → Shortlist → Screening → Interview → Offer.');
}

// Accessibility
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') hamburger.click();
});

  const hirebar = document.querySelector(".hirebar");
    let offsetX, offsetY, isDragging = false;

    hirebar.addEventListener("mousedown", (e) => {
        isDragging = true;
        offsetX = e.clientX - hirebar.offsetLeft;
        offsetY = e.clientY - hirebar.offsetTop;
        hirebar.style.transition = "none";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        hirebar.style.left = (e.clientX - offsetX) + "px";
        hirebar.style.top = (e.clientY - offsetY) + "px";
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        hirebar.style.transition = "0.2s ease-out";
    });