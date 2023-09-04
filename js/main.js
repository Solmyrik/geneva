const iconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('active');
    menuBody.classList.toggle('_active');
  });
}

function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

const menuList = document.querySelector('.menu__list');

menuList.addEventListener('click', (e) => {
  if (e.target.className === 'menu__link' || e.target.className === 'menu__item') {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('active');
    menuBody.classList.remove('_active');
  }
});
