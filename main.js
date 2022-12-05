const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const productDetailCloseIcon =document.querySelector('.detail-close')
const mobileMenu = document.querySelector(".mobile-menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('.detail')

const isAsideClosed = aside.classList.contains("inactive");
const isMobileMenuClosed = mobileMenu.classList.contains("inactive");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

//toggle alterna el valor de la clase; ej., si la clase existe la elimina y devuelve false, si no, la añade y devuelve true
function toggleDesktopMenu() {

  if (!isAsideClosed) {
    //si aside esta abierto, lo cerramos
    aside.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains("inactive");
  if (!isAsideClosed) {
    //Si carrito esta esta abierto, lo cerramos
    aside.classList.add("inactive");
  }

  mobileMenu.classList.toggle("inactive");
}

function toggleCarritoAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const productDetailClosed = productDetailContainer.classList.contains("inactive")

  if (!isDesktopMenuClosed) {
    //si menu desktop esta abierto, lo cerramos
    desktopMenu.classList.add("inactive");
  }

  if(!productDetailClosed){
    productDetailContainer.classList.add("inactive");
  }

  if(!isAsideClosed){
    aside.classList.add("inactive");
  }

  if (!isMobileMenuClosed) {
    //Si mobile menu esta abierto, hay que cerrarlo
    mobileMenu.classList.add("inactive");
  }

  aside.classList.toggle("inactive");
}

function openProductDetailAside(){
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  const isAsideClosed = aside.classList.contains("inactive")
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  
  if (!isMobileMenuClosed) {
    //Si mobile menu esta abierto, hay que cerrarlo
    mobileMenu.classList.add("inactive");
  }

  if(!isAsideClosed){
    aside.classList.add("inactive");
  }
  if (!isDesktopMenuClosed) {
    //si menu desktop esta abierto, lo cerramos
    desktopMenu.classList.add("inactive");
  }

  productDetailContainer.classList.remove('inactive')
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
  name: "Remera Harry",
  price: 120,
  image:"./cards/HARRY_Mesa de trabajo 1.jpg"
});
productList.push({
  name: "Remera Cry Baby",
  price: 220,
  image:
    "./cards/crybaby1.jpg",
});
productList.push({
  name: "Comp",
  price: 620,
  image:
    "./cards/METAMORPHOSIS.jpg",
});
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener('click', openProductDetailAside)

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");
    const productInfoDiv = document.createElement("div");
    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/add_shopping_cart_FILL0_wght300_GRAD-25_opsz48.svg");
    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    cardsContainer.appendChild(productCard); 
  }
}
renderProducts(productList);
