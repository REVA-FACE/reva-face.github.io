document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.onload = function() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.innerWidth > 768) {
      // If the user is on a mobile device and using desktop view, show the message
      document.getElementById('desktop-view-message').style.display = 'block';
  }
};


document.addEventListener("DOMContentLoaded", function() {
  const fadeText = document.getElementById("fade-text");

  const phrase = "EssenCSE 2.0";

  function startAnimation() {
      typeText(phrase);
  }

  function typeText(phrase) {
      fadeText.textContent = "";
      let index = 0;

      function type() {
          if (index < phrase.length) {
              fadeText.textContent += phrase.charAt(index);
              index++;
              setTimeout(type, 200);
          }
      }

      type();
  }

  startAnimation();
});
  function toggleAnswer(id) {
    var answer = document.getElementById('answer' + id);
    if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
    } else {
      answer.style.display = 'none';

    }
  }

let timer;
  
  function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
    
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    hamburgerMenu.style.display = 'none';
    
    clearTimeout(timer);
    
    timer = setTimeout(function() {
      nav.classList.remove('open');
      hamburgerMenu.style.display = 'block';
    }, 5000);
  }

var countDownDate = new Date("Feb 23, 2024 00:00:00").getTime();

var countdownInterval = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

if (distance <= 0) {
  clearInterval(countdownInterval);
  document.getElementById("countdown").style.display = "none";
  document.getElementById("count-txt").style.display = "none";
}
}, 1000);

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function changeSlide(n) {
    showSlide(n);
}

// Auto-advance slides every 10 seconds
setInterval(() => {
    showSlide(1);
}, 9000);

content.addEventListener('scroll', function() {
  clearTimeout(timer);

  timer = setTimeout(function() {
    content.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }, 5000);
});

  
    document.addEventListener("DOMContentLoaded", function() {

  const isEdge = navigator.userAgentData?.brands?.some(brand => brand.brand === 'Microsoft Edge');

  if (isEdge) {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    if (prevBtn) {
      prevBtn.style.marginTop = "3450px";
    }
    
    if (nextBtn) {
      nextBtn.style.marginTop = "3450px";
    }
  }
});
 
