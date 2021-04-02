
const contact = () => {
  const mainContainer = document.querySelector('.main-container');

  const contactWrapper = document.createElement('div');
  contactWrapper.classList.add('contactWrapper', 'd-flex', 'd-none');

  mainContainer.appendChild(contactWrapper);
}

export default contact;