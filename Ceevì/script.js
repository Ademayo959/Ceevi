//Making the text rewriting itself effect
const words = ["Opportunity", "Career", "Growth", "Possibilities", "Innovation", "Prospect"]
let count = 0;
let index = 0;
let isDeleting = false;
let currentText = '';
let speed = 100;

function typeEffect() {
  currentText = words[count];
  if (isDeleting) {
    index--;
  } else {
    index++;
  }

  const displayed = currentText.slice(0, index);
  document.getElementById('typewriter').textContent = displayed;

  if (!isDeleting && index === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % words.length;
    setTimeout(typeEffect, 500)
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : speed);
  };
}

typeEffect();

//The slider in the middle
let currentIndex = 0;
const slidesToShow = 4;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlides(index) {
  const slide = document.querySelector('.slide');
  const slideWidth = slide.offsetWidth + parseInt(getComputedStyle(slide).marginRight);
  const slider = document.getElementById('slider');

  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

function nextSlide() {
  if (currentIndex + slidesToShow < totalSlides) {
    currentIndex++;
    showSlides(currentIndex);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    showSlides(currentIndex);
  };
};

//liking jobs
const liked = 'img/liked.png'
const unliked = 'img/unliked.png'
document.querySelectorAll('.like').forEach(
  svg => {
    svg.addEventListener('click', () => {
      if(svg.getAttribute("src") === unliked){
        svg.setAttribute('src', liked)
        window.alert("You liked a job");
      } else {
        svg.setAttribute('src', unliked)
        window.alert("You unliked a Job")
      }
    });
  }
);

//Toggling the menu bar for the phone view

const toggleBarBtn = document.querySelector('.phone-menubar');
const menubar = document.querySelector('.phone-menu');

const barsImg = 'img/bars.png'
const cancelImg = 'img/cancel.png'

toggleBarBtn.addEventListener('click', () => {
  if (menubar.style.display === 'grid' && toggleBarBtn.getAttribute("src") === cancelImg){
    menubar.style.display = 'none'
    toggleBarBtn.setAttribute('src', barsImg)
  } else {
    menubar.style.display = 'grid'
    toggleBarBtn.setAttribute('src', cancelImg)
  }
})



