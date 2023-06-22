window.addEventListener('scroll',
function () {
  var footer = document.querySelector('.footer-cmercy');
  var navegacionFlotante = document.querySelector('.navegacion-por-el-sitio');
  var footerHeight = footer.offsetHeight;
  var scrollPosition = window.scrollY + window.innerHeight;
  var bodyAltura = document.body.offsetHeight;
  let movAddress = document.getElementById("address");

  if (scrollPosition >= bodyAltura - 4*footerHeight) {
    movAddress.classList.add('tracking-in-contract');
  } else {
    movAddress.classList.remove('tracking-in-contract');
  }

  if (scrollPosition >= bodyAltura - footerHeight/2) {
    navegacionFlotante.classList.add('navegacion-por-el-sitio--active');
  } else {
    navegacionFlotante.classList.remove('navegacion-por-el-sitio--active');
  }

});

let widthFotos = gallery.querySelector('img').width;
let list = carousel.querySelector('ul');
let carouselWidth = document.getElementById("gallery").clientWidth;
let position = 0; 
let leftButton = document.getElementById("leftButton");
let rightButton = document.getElementById("rightButton");

let mov_less_carouselWidth = list.children.length*widthFotos

rightButton.addEventListener('click', () =>
{
  position -= widthFotos;

  if (position < -(mov_less_carouselWidth - carouselWidth +1.5*widthFotos)) {
    position = 0;
    list.style.marginLeft = position +'px';
  } else {
    list.style.marginLeft = position +'px';
  }
}
);

leftButton.addEventListener('click', () =>
{
  if (position == 0 || position > -widthFotos/3) {
    position = -(mov_less_carouselWidth - carouselWidth + 0.5*widthFotos);
    list.style.marginLeft = position +'px';
  } else {
    position += widthFotos;
    list.style.marginLeft = position +'px';
  }  
}
);