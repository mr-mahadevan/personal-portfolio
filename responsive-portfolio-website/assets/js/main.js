/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav__menu'),
      navToggle = document.getElementById('nav__toggle'),
      navClose = document.getElementById('nav__close')

     /* ===========MENU SHOW ==========*/
     /* validate if constant exists */
     if(navToggle){
      navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
     })
   }

   /* ========= MENU HIDDEN ========= */
   /* validate if constant exists */
   if(navClose){
      navClose.addEventListener('click',()=>{
         navMenu.classList.remove('show-menu')
      })
   }


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
   const navMenu = document.getElementById('nav__menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

/*=============== SWIPER PROJECTS ===============*/
var swiper = new Swiper(".projects__container", {
   cssMode: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   pagination: {
     el: ".swiper-pagination",
   },
   breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: -56,
      },
    },
 });

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactQuery = document.getElementById('contact-query'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
      e.preventDefault()

      // Check if the field has a Value
      if(contactName.value === '' || contactEmail.value === '' || contactQuery.value === ''){
         //Add and Remove color
         contactQuery.classList.remove('color-blue')
         contactQuery.classList.add('color-red');

         //Show message
         contactMessage.textContent = 'Write all the input fields'
      }else{
         //serviceID - templateID - #form
      }
}

contactForm.addEventListener('submit', sendEmail);




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/

