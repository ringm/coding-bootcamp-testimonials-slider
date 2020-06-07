const testimonies = [{
    name: 'Tanya Sinclar',
    job: 'UX Engineer',
    pic: 'images/image-tanya.jpg',
    testimony: '“I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.”'
  },
  {
    name: 'John Tarkpor',
    job: 'Junior Front-end Developer',
    pic: 'images/image-john.jpg',
    testimony: '“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”'
  },
];

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const img = document.querySelector('.testimonial__img');
const testimony = document.querySelector('.testimonial__testimony');
const name = document.querySelector('.testimonial__name');
const profession = document.querySelector('.testimonial__profession');
let counter = 0;

function fadeOut() {
  img.style.animation = 'fadeOut .8s both';
  testimony.style.animation = 'fadeOut .8s both';
  name.style.animation = 'fadeOut .8s both';
  profession.style.animation = 'fadeOut .8s both';
}

function next() {
  img.src = testimonies[counter].pic;
  testimony.textContent = testimonies[counter].testimony;
  name.textContent = testimonies[counter].name;
  profession.textContent = testimonies[counter].job;

  img.style.animation = 'fadeIn 1s .3s both, moveLeft 1s .3s both';
  testimony.style.animation = 'fadeIn 1s .2s both, moveUp 1s .2s both';
  name.style.animation = 'fadeIn 1s .4s both';
  profession.style.animation = 'fadeIn 1s .5s both, moveRight 1s .5s both';
}

nextBtn.addEventListener('click', (e) => {
  if(counter < testimonies.length - 1) {
    counter++;
    fadeOut();
  }
});

prevBtn.addEventListener('click', (e) => {
  if(counter > 0) {
    counter--;
    fadeOut();
  }
});

img.addEventListener('animationend', function(e) {
  if(e.animationName == 'fadeOut') {
    next();
  }
});