var brands = [
  {
    name: 'Migtor',
    logo: 'assets/img/logo-migtor.svg',
    business: 'Adhesivos Industriales',
    intro: "Desde hace 25 años MIGTOR es sinonimo de cálidad en la fabricación de adhesivos para distintos sectores industriales. Es una empresa Mexicana en expansión global.",
    url: 'http://www.migtor.com',
    backgroundAside: 'linear-gradient(180deg, rgba(255,255,255,1) 33%, rgba(0,68,127,1) 62%)',
    backgroundContent: '#007da8',
    frontPage: 'assets/img/migtor-frontpage.jpg',
  },
  {
    name: 'AUUN',
    logo: 'assets/img/logo-auun.svg',
    business: 'Buffete Jurídico',
    intro: "Firma legal con más de 20 años de experiencia en la consultoría legal, los distingue el alto grado de compromiso con sus representados",
    url: 'http://auun-lawyers.com',
    backgroundAside: 'rgba(48,6,13,1.00)',
    backgroundContent: 'linear-gradient(180deg, rgba(217,210,210,1) 33%, rgba(79,80,82,1) 100%)',
    frontPage: 'assets/img/auun-frontpage.jpg',
  },
  {
    name: 'Metate Negro',
    logo: 'assets/img/logo-metatenegro.svg',
    business: 'Restaurante Gourmet',
    intro: "Un lugar de comida mexicana contemporánea y cocina de autor que fusiona técnicas tradicionales con la alta cocina moderna. Tomando como base nuestras líneas de mezcales y productos gourmet para brindarte una experiencia gastronomica innigualable",
    url: 'http://metatenegro.com',
    backgroundAside: 'black',
    backgroundContent: 'url(assets/img/fondo.jpg)',
    frontPage: 'assets/img/metate-frontpage.jpg',
  },
  {
    name: 'Casa Amor MX',
    logo: 'assets/img/logo-casaamor.svg',
    business: 'Artesanias Méxicanas',
    intro: "Casa Amor MX es un espacio lleno de amor por México. Aquí encontrarás colchas, edredones, manteles, cortinas, caminos de mesa, pies de cama y cojines que han sido desarrollados por manos artesanas mexicanas.",
    url: 'https://www.facebook.com/casaamormx',
    backgroundAside: 'linear-gradient(180deg, rgba(255,255,255,1) 33%, rgba(199,21,133,1) 100%)',
    backgroundContent: 'url(assets/img/fondo-ca.jpg)',
    frontPage: 'assets/img/casaamor-frontpage.jpg',
  },
  {
    name: 'Iris & Roa',
    logo: 'assets/img/logo-irisroa.svg',
    business: 'Seguros e Inversiones',
    intro: "Grupo de asesores profesionales con gran experiencia en seguros de vida y proyectos de ahorro.",
    url: 'http://www.irisroa.com',
    backgroundAside: 'linear-gradient(180deg, rgba(108, 109, 112, 1) 60%, rgba(165, 167, 169, 1) 100%)',
    backgroundContent: 'linear-gradient(180deg, rgba(231,173,74,1) 20%, rgba(223,145,46,1) 53%)',
    frontPage: 'assets/img/iris-frontpage.jpg',
  },
  {
    name: 'Visión MX',
    logo: 'assets/img/logo-visionmx.svg',
    business: 'Agencia',
    intro: "Firma legal con más de 20 años de experiencia en la consultoría legal, los distingue el alto grado de compromiso con sus representados",
    url: 'http://auun-lawyers.com',
    backgroundAside: 'linear-gradient(180deg, rgba(0,121,64,1) 20%, rgba(9,59,121,1) 53%)',
    backgroundContent: 'linear-gradient(180deg, rgba(231,173,74,1) 20%, rgba(223,145,46,1) 53%)',
    frontPage: 'assets/img/vision-frontpage.jpg',
  },
]

var actualBrand = 2;
var modal = document.getElementById('modal');
var modalAside = document.getElementsByClassName('modal-aside')[0];
var modalContent = document.getElementsByClassName('modal-content')[0];



  function openModal (index) {
    let modalLogo = document.getElementById('logo-modal');
    let businessText = document.getElementById('business');
    let introText = document.getElementById('intro');
    let webSite = document.getElementById('web-site');
    let frontPage = document.getElementById('frontpage');
    modalLogo.src = brands[actualBrand].logo;
    modalAside.style.background = brands[actualBrand].backgroundAside;
    modalContent.style.background = brands[actualBrand].backgroundContent;
    businessText.innerHTML = brands[actualBrand].business;
    introText.innerHTML = brands[actualBrand].intro;
    webSite.href = brands[actualBrand].url;
    frontPage.src = brands[actualBrand].frontPage;

    webSite.addEventListener("mouseover", function() {
      webSite.style.color = "darkcyan";
    });

    webSite.addEventListener("mouseout", function() {
      webSite.style.color = "white";
    });

    modal.style.display = 'flex';
  }

  function closeModal () {
    modal.style.display = 'none';
  }