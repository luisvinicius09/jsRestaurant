import Header from './header';
import Home from './homepage';
import Menu from './menu';
import Contact from './contact';
import Footer from './footer';

const content = document.querySelector('#content');
const mainContainer = document.createElement('div');

mainContainer.classList.add('main-container');
content.appendChild(mainContainer);

Header();
Home();
Menu();
Contact();
Footer();

const wrapper = document.querySelector('.wrapper');
const menuWrapper = document.querySelector('.menuWrapper');
const contactWrapper = document.querySelector('.contactWrapper');

const homeBtn = document.querySelector('.homeBtn');
homeBtn.addEventListener('click', () => {
  wrapper.classList.remove('d-none');
  menuWrapper.classList.add('d-none');
  contactWrapper.classList.add('d-none');
});

const menuBtn = document.querySelector('.menuBtn');
menuBtn.addEventListener('click', () => {
  menuWrapper.classList.remove('d-none');
  wrapper.classList.add('d-none');
  contactWrapper.classList.add('d-none');
});


const contactBtn = document.querySelector('.contactBtn');
contactBtn.addEventListener('click', () => {
  contactWrapper.classList.remove('d-none');
  wrapper.classList.add('d-none');
  menuWrapper.classList.add('d-none');
});