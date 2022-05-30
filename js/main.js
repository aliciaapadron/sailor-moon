'use strict';
const img = document.querySelector('.js_img');
const yes = document.querySelector('.js_yes');
const no = document.querySelector('.js_no');
const magic = document.querySelector('.js_magic');
const body = document.querySelector('.js_body');
const text = document.querySelector('.js_text');

yes.addEventListener('click', () => {
  img.src = './images/yes.png';
  body.classList.remove('background');
  body.classList.remove('nocolor');
  body.classList.remove('magiccolor');
  body.classList.add('yescolor');
  text.innerHTML = 'Aw, I love you!';
});

no.addEventListener('click', () => {
  img.src = './images/no.jpg';
  body.classList.remove('background');
  body.classList.remove('yescolor');
  body.classList.remove('magiccolor');
  body.classList.add('nocolor');
  text.innerHTML = 'How dare you!';
});

magic.addEventListener('click', () => {
  img.src = './images/magic.jpg';
  body.classList.remove('background');
  body.classList.remove('yescolor');
  body.classList.remove('nocolor');
  body.classList.add('magiccolor');
  text.innerHTML = "In the name of the moon, I'll punish you!";
});
