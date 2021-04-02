
const contact = () => {
  const mainContainer = document.querySelector('.main-container');

  const contactWrapper = document.createElement('div');
  contactWrapper.classList.add('contactWrapper', 'd-flex','j-btw' , 'd-none');

  const contactContent = document.createElement('div');
  contactContent.classList.add('contactContent');

  const contactTitle = document.createElement('div');
  contactTitle.classList.add('contactTitle');

  const h1 = document.createElement('h1');
  h1.innerText = 'Contact';

  contactTitle.appendChild(h1);
  contactContent.appendChild(contactTitle);

  const contactForm = document.createElement('div');
  contactForm.classList.add('contactForm', 'd-flex');

  const name = document.createElement('input');
  name.placeholder = 'Name';
  name.disabled = true
  name.type = 'text'
  contactForm.appendChild(name);

  const email = document.createElement('input');
  email.placeholder = 'Email';
  email.disabled = true;
  email.type = 'email'
  contactForm.appendChild(email);

  const message = document.createElement('textarea');
  message.placeholder = 'Message';
  message.disabled = true;
  contactForm.appendChild(message);

  const menuImages = document.createElement('div');
  menuImages.classList.add('menuImages');

  const imageOne = document.createElement('img');
  imageOne.classList.add('menu-photo');
  imageOne.src = '../src/assets/images/hall.jpg';
  imageOne.alt = 'Restaurant photo';

  const imageTwo = document.createElement('img');
  imageTwo.classList.add('blobMenu');
  imageTwo.src = '../src/assets/images/blob3.png';
  imageTwo.alt = 'Main image background';

  const images = [imageOne, imageTwo];
  for(let i=0; i < images.length; i++) {
    menuImages.appendChild(images[i]);
  }


  contactContent.appendChild(contactForm);
  contactWrapper.appendChild(contactContent);
  contactWrapper.appendChild(menuImages);

  mainContainer.appendChild(contactWrapper);
}

export default contact;