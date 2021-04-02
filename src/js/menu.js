
const menu = () => {
  const mainContainer = document.querySelector('.main-container');

  const menuWrapper = document.createElement('div');
  menuWrapper.classList.add('menuWrapper', 'd-flex', 'd-none');

  mainContainer.appendChild(menuWrapper);
}

export default menu;
