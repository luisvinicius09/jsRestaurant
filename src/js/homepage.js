const home = () => {
  const mainContainer = document.querySelector('.main-container')

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper', 'd-flex', 'j-center');

  const mainImages = document.createElement('div');
  mainImages.classList.add('main-images');

  const imageOne = document.createElement('img');
  imageOne.classList.add('restaurant-photo');
  imageOne.src = '../src/assets/images/restaurant.jpg';
  imageOne.alt = 'Restaurant photo';

  const imageTwo = document.createElement('img');
  imageTwo.classList.add('blob');
  imageTwo.src = '../src/assets/images/blob.png';
  imageTwo.alt = 'Main image background';

  const images = [imageOne, imageTwo]
  for(let i=0; i < images.length; i++) {
    mainImages.appendChild(images[i]);
  }

  wrapper.appendChild(mainImages);

  const mainText = document.createElement('div');
  mainText.classList.add('main-text');

  const title = document.createElement('h1');
  title.innerHTML = 'Restaurant <span>JS</span>';
  mainText.appendChild(title)

  const subTitle = document.createElement('h6');
  subTitle.innerText = 'We have been serving to our valuable guests for more than a decade. We make sure our guests are fully satisfied with our services & the variety of cuisines to select from our menu.';
  mainText.appendChild(subTitle);

  wrapper.appendChild(mainText);

  mainContainer.appendChild(wrapper);
}

export default home; 

