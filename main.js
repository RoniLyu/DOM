document.querySelector('header').className = 'header'
document.querySelector('header > div').className = 'container'
document.querySelector('header > div > div').className = 'header__content'
document.querySelector('header > div > div').children[0].className = 'logo'
document.querySelector('header > div > div').children[1].className = 'header__menu'
document.querySelector('header > div > div').children[2].className = 'header__menu-button'


document.querySelector('section').className = 'gallery'

const galleryItems = document.querySelectorAll('section > div')
galleryItems.forEach((div) => {
  div.className = 'gallery__item'
  div.children[0].className = 'gallery__item__image'
  div.children[1].className = 'gallery__item__text'
  div.children[2].className = 'gallery__item__text'
})

document.querySelector('main').children[1].className = 'subscribe'
document.querySelector('.container p').className = 'subscribe__text'
document.querySelector('.container [type="email"]').className = 'subscribe__input'
document.querySelectorAll('button')[1].className = 'subscribe__button'

