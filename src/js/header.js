
const header = () => {
  const mainContainer = document.querySelector('.main-container');

  const header = document.createElement('header');
  const headerContainer = document.createElement('div');
  const homeBtn = document.createElement('a');
  homeBtn.classList.add('homeBtn');
  homeBtn.href = '#';
  homeBtn.innerText = 'Home';

  const menuBtn = document.createElement('a');
  menuBtn.classList.add('menuBtn');
  menuBtn.href = '#';
  menuBtn.innerHTML = 'Menu';

  const contactBtn = document.createElement('a');
  contactBtn.classList.add('contactBtn');
  contactBtn.href = '#';
  contactBtn.innerText = 'Contact';

  const buttons = [homeBtn, menuBtn, contactBtn];
  for (let i = 0; i < buttons.length; i += 1) {
    headerContainer.appendChild(buttons[i]);
  }
  header.appendChild(headerContainer);
  mainContainer.appendChild(header);
};

export default header;