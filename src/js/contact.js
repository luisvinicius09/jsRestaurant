
const contact = () => {
  const mainContainer = document.querySelector('.main-container');

  const contactWrapper = document.createElement('div');
  contactWrapper.classList.add('contactWrapper', 'd-flex', 'd-none');

  const menuContent = document.createElement('div');
  menuContent.classList.add('menuContent');

  const menuTitle = document.createElement('div');
  menuTitle.classList.add('menuTitle');

  const h1 = document.createElement('h1');
  h1.innerText = 'Contact';

  menuTitle.appendChild(h1);
  menuContent.appendChild(menuTitle);

  const menuItems = document.createElement('div');
  menuItems.classList.add('menuItems');

  const item = (name, desc, value) => {
    const itemWrapper = document.createElement('div');
    itemWrapper.classList.add('item');

    const spanOne = document.createElement('span');
    const h3 = document.createElement('h3');
    h3.innerText = name;
    const p = document.createElement('p');
    p.innerText = desc;

    spanOne.appendChild(h3);
    spanOne.appendChild(p);
    itemWrapper.appendChild(spanOne);

    const spanTwo = document.createElement('span');
    const valueStrong = document.createElement('strong');
    valueStrong.classList.add('itemValue');
    valueStrong.innerText = value;

    spanTwo.appendChild(valueStrong);
    itemWrapper.appendChild(spanTwo);

    return itemWrapper;
  }

  const itemOne = item('OPTION 0', 'Testing', '$40');
  const itemTwo = item('OPTION 1', 'Lorem ipsun is working well', '$60');

  // Insert "items" you want to be displayed on the menu
  const items = [itemOne, itemTwo];

  for(let i=0; i < items.length; i += 1) {
    menuItems.appendChild(items[i])
  }

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


  menuContent.appendChild(menuItems);
  contactWrapper.appendChild(menuContent);
  contactWrapper.appendChild(menuImages);

  mainContainer.appendChild(contactWrapper);
}

export default contact;