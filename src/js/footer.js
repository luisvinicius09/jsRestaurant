const footer = () => {
  const mainContainer = document.querySelector('.main-container');

  const p = document.createElement('p');
  p.classList.add('footer');
  p.innerHTML = 'Copyright © 2021. <a href="https://www.linkedin.com/in/luis-vinicius/">Luis Vinicius M. S.</a>';


  mainContainer.appendChild(p);
};

export default footer;