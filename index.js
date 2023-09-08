const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show-1');
            entry.target.classList.add('show-2');
            entry.target.classList.add('show-3_1');
            entry.target.classList.add('show-3_2');
            entry.target.classList.add('show-3_3');
            entry.target.classList.add('show-4');
            entry.target.classList.add('show-4_1');
            entry.target.classList.add('show-5');
            entry.target.classList.add('show-6_1');
            entry.target.classList.add('show-6_2');
            entry.target.classList.add('show-6_3');
            entry.target.classList.add('show-7');
            entry.target.classList.add('show-8');
            entry.target.classList.add('show-9');
            entry.target.classList.add('show-9_1');
            entry.target.classList.add('show-9_2');
            entry.target.classList.add('show-9_3');
            entry.target.classList.add('show-10');
            entry.target.classList.add('show-11');
            entry.target.classList.add('show-19');
            // SCROLL ANIMATION FORM ABOUT PAGE
            entry.target.classList.add('show-12');
            entry.target.classList.add('show-13');
            entry.target.classList.add('show-14');
            // SCROLL ANIMATION FORM ABOUT PAGE
            // SCROLL ANIMATION ON PRICING PAGE
            entry.target.classList.add('show-15');
            // SCROLL ANIMATION ON PRICING PAGE
            
            // SCROLL ANIMATION ON GET A QUOTE PAGE
            entry.target.classList.add('show-16');
            // SCROLL ANIMATION ON GET A QUOTE PAGE

            // SCROLL ANIMATION ON CONTACT PAGE
            entry.target.classList.add('show-17');
            // SCROLL ANIMATION ON CONTACT PAGE

            // SCROLL ANIMATION ON SERVICE DETAILS PAGE
            entry.target.classList.add('show-18');
            // SCROLL ANIMATION ON SERVICE DETAILS PAGE

        }
        else{
            entry.target.classList.remove('show-1');
            entry.target.classList.remove('show-2');
            entry.target.classList.remove('show-3_1');
            entry.target.classList.remove('show-3_2');
            entry.target.classList.remove('show-3_3');
            entry.target.classList.remove('show-4');
            entry.target.classList.remove('show-4_1');
            entry.target.classList.remove('show-5');
            entry.target.classList.remove('show-6_1');
            entry.target.classList.remove('show-6_2');
            entry.target.classList.remove('show-6_3');
            entry.target.classList.remove('show-7');
            entry.target.classList.remove('show-8');
            entry.target.classList.remove('show-9');
            entry.target.classList.remove('show-9_1');
            entry.target.classList.remove('show-9_2');
            entry.target.classList.remove('show-9_3');
            entry.target.classList.remove('show-10');
            entry.target.classList.remove('show-11');
            entry.target.classList.remove('show-19');
            // SCROLL ANIMATION FORM ABOUT PAGE
            entry.target.classList.remove('show-12');
            entry.target.classList.remove('show-13');
            entry.target.classList.remove('show-14');
            // SCROLL ANIMATION FORM ABOUT PAGE

             // SCROLL ANIMATION ON PRICING PAGE
            entry.target.classList.remove('show-15');
             // SCROLL ANIMATION ON PRICING PAGE

             // SCROLL ANIMATION ON GET A QUOTE PAGE
             entry.target.classList.remove('show-16');
             // SCROLL ANIMATION ON GET A QUOTE PAGE

            // SCROLL ANIMATION ON CONTACT PAGE
            entry.target.classList.remove('show-17');
            // SCROLL ANIMATION ON CONTACT PAGE

            // SCROLL ANIMATION ON SERVICE DETAILS PAGE
            entry.target.classList.remove('show-18');
            // SCROLL ANIMATION ON CONTACT PAGE


        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden-1');
hiddenElements.forEach((el)=> observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.hidden-2');
hiddenElements2.forEach((el)=> observer.observe(el));

const hiddenElements3_1 = document.querySelectorAll('.hidden-3_1');
hiddenElements3_1.forEach((el)=> observer.observe(el));

const hiddenElements3_2 = document.querySelectorAll('.hidden-3_2');
hiddenElements3_2.forEach((el)=> observer.observe(el));

const hiddenElements3_3 = document.querySelectorAll('.hidden-3_3');
hiddenElements3_3.forEach((el)=> observer.observe(el));

const hiddenElements4 = document.querySelectorAll('.hidden-4');
hiddenElements4.forEach((el)=> observer.observe(el));

const hiddenElements4_1 = document.querySelectorAll('.hidden-4_1');
hiddenElements4_1.forEach((el)=> observer.observe(el));

const hiddenElements5 = document.querySelectorAll('.hidden-5');
hiddenElements5.forEach((el)=> observer.observe(el));

const hiddenElements6_1 = document.querySelectorAll('.hidden-6_1');
hiddenElements6_1.forEach((el)=> observer.observe(el));

const hiddenElements6_2 = document.querySelectorAll('.hidden-6_2');
hiddenElements6_2.forEach((el)=> observer.observe(el));

const hiddenElements6_3 = document.querySelectorAll('.hidden-6_3');
hiddenElements6_3.forEach((el)=> observer.observe(el));

const hiddenElements7 = document.querySelectorAll('.hidden-7');
hiddenElements7.forEach((el)=> observer.observe(el));

const hiddenElements8 = document.querySelectorAll('.hidden-8');
hiddenElements8.forEach((el)=> observer.observe(el));

const hiddenElements9 = document.querySelectorAll('.hidden-9');
hiddenElements9.forEach((el)=> observer.observe(el));

const hiddenElements9_1 = document.querySelectorAll('.hidden-9_1');
hiddenElements9_1.forEach((el)=> observer.observe(el));

const hiddenElements9_2 = document.querySelectorAll('.hidden-9_2');
hiddenElements9_2.forEach((el)=> observer.observe(el));

const hiddenElements9_3 = document.querySelectorAll('.hidden-9_3');
hiddenElements9_3.forEach((el)=> observer.observe(el));

const hiddenElements10 = document.querySelectorAll('.hidden-10');
hiddenElements10.forEach((el)=> observer.observe(el));

const hiddenElements11 = document.querySelectorAll('.hidden-11');
hiddenElements11.forEach((el)=> observer.observe(el));

const hiddenElements19 = document.querySelectorAll('.hidden-19');
hiddenElements19.forEach((el)=> observer.observe(el));

            // SCROLL ANIMATION FORM ABOUT PAGE
const hiddenElements12 = document.querySelectorAll('.hidden-12');
hiddenElements12.forEach((el)=> observer.observe(el));

const hiddenElements13 = document.querySelectorAll('.hidden-13');
hiddenElements13.forEach((el)=> observer.observe(el));

const hiddenElements14 = document.querySelectorAll('.hidden-14');
hiddenElements14.forEach((el)=> observer.observe(el));
            // SCROLL ANIMATION FORM ABOUT PAGE

             // SCROLL ANIMATION ON PRICING PAGE
const hiddenElements15 = document.querySelectorAll('.hidden-15');
hiddenElements15.forEach((el)=> observer.observe(el));
             // SCROLL ANIMATION ON PRICING PAGE

             // SCROLL ANIMATION ON GET A QUOTE PAGE
const hiddenElements16 = document.querySelectorAll('.hidden-16');
hiddenElements16.forEach((el)=> observer.observe(el));
             // SCROLL ANIMATION ON GET A QUOTE PAGE

            // SCROLL ANIMATION ON CONTACT PAGE
const hiddenElements17 = document.querySelectorAll('.hidden-17');
hiddenElements17.forEach((el)=> observer.observe(el));
            // SCROLL ANIMATION ON CONTACT PAGE

            // SCROLL ANIMATION ON SERVICE DETAILS PAGE
const hiddenElements18 = document.querySelectorAll('.hidden-18');
hiddenElements18.forEach((el)=> observer.observe(el));
            // SCROLL ANIMATION ON SERVICE DETAILS PAGE

// PRELOADER
const Interval = function(){
    const preLoader = document.getElementById('preloader');
    preLoader.classList.add('interval');
};
window.addEventListener('load', Interval);
// NAVBAR SCROLL ANIMATION
window.addEventListener('scroll',scrollEvent1);
function scrollEvent1(){
    if(pageYOffset > 80){
        document.querySelector('nav').classList.add('scroll');
        document.querySelector('.to-top-btn a').classList.add('active')
        document.querySelector('.small-screen-nav-btn').classList.add('hide')
    }
    else{
        document.querySelector('nav').classList.remove('scroll');
        document.querySelector('.to-top-btn a').classList.remove('active')
        document.querySelector('.small-screen-nav-btn').classList.remove('hide')

    }
};

// FAQ ACCORDION SECTION
const faqAccordionBtn1 = document.querySelector('.faq-accordion-label-btn-1');
faqAccordionBtn1.onclick = function(){
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-1').classList.toggle('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-2').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-3').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-4').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-5').classList.remove('show');
    document.querySelector('.faq-accordion-question-1 i').classList.toggle('rotate');
    document.querySelector('.faq-accordion-question-2 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-3 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-4 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-5 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-1').classList.toggle('active');
    document.querySelector('.faq-accordion-question-2').classList.remove('active');
    document.querySelector('.faq-accordion-question-3').classList.remove('active');
    document.querySelector('.faq-accordion-question-4').classList.remove('active');
    document.querySelector('.faq-accordion-question-5').classList.remove('active');
}

const faqAccordionBtn2 = document.querySelector('.faq-accordion-label-btn-2');
faqAccordionBtn2.onclick = function(){
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-1').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-2').classList.toggle('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-3').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-4').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-5').classList.remove('show');
    document.querySelector('.faq-accordion-question-1 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-2 i').classList.toggle('rotate');
    document.querySelector('.faq-accordion-question-3 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-4 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-5 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-1').classList.remove('active');
    document.querySelector('.faq-accordion-question-2').classList.toggle('active');
    document.querySelector('.faq-accordion-question-3').classList.remove('active');
    document.querySelector('.faq-accordion-question-4').classList.remove('active');
    document.querySelector('.faq-accordion-question-5').classList.remove('active');
}

const faqAccordionBtn3 = document.querySelector('.faq-accordion-label-btn-3');
faqAccordionBtn3.onclick = function(){
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-1').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-2').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-3').classList.toggle('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-4').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-5').classList.remove('show');
    document.querySelector('.faq-accordion-question-1 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-2 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-3 i').classList.toggle('rotate');
    document.querySelector('.faq-accordion-question-4 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-5 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-1').classList.remove('active');
    document.querySelector('.faq-accordion-question-2').classList.remove('active');
    document.querySelector('.faq-accordion-question-3').classList.toggle('active');
    document.querySelector('.faq-accordion-question-4').classList.remove('active');
    document.querySelector('.faq-accordion-question-5').classList.remove('active');
}

const faqAccordionBtn4 = document.querySelector('.faq-accordion-label-btn-4');
faqAccordionBtn4.onclick = function(){
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-1').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-2').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-3').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-4').classList.toggle('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-5').classList.remove('show');
    document.querySelector('.faq-accordion-question-1 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-2 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-3 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-4 i').classList.toggle('rotate');
    document.querySelector('.faq-accordion-question-5 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-1').classList.remove('active');
    document.querySelector('.faq-accordion-question-2').classList.remove('active');
    document.querySelector('.faq-accordion-question-3').classList.remove('active');
    document.querySelector('.faq-accordion-question-4').classList.toggle('active');
    document.querySelector('.faq-accordion-question-5').classList.remove('active');
}

const faqAccordionBtn5 = document.querySelector('.faq-accordion-label-btn-5');
faqAccordionBtn5.onclick = function(){
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-1').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-2').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-3').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-4').classList.remove('show');
    document.querySelector('.faq-accordion-section .faq-accordion-content .faq-accordion-label .faq-accordion-text-5').classList.toggle('show');
    document.querySelector('.faq-accordion-question-1 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-2 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-3 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-4 i').classList.remove('rotate');
    document.querySelector('.faq-accordion-question-5 i').classList.toggle('rotate');
    document.querySelector('.faq-accordion-question-1').classList.remove('active');
    document.querySelector('.faq-accordion-question-2').classList.remove('active');
    document.querySelector('.faq-accordion-question-3').classList.remove('active');
    document.querySelector('.faq-accordion-question-4').classList.remove('active');
    document.querySelector('.faq-accordion-question-5').classList.toggle('active');
}

// SMALL SCREEN MENU 
const smallDropBtn = document.querySelector('.small-screen-menu ul .small-screen-menu-dropdown button');
smallDropBtn.onclick = function(){
    document.querySelector('.small-screen-menu ul .small-screen-menu-dropdown .small-screen-deep-drop-down').classList.toggle('hide');
    document.querySelector('.small-screen-menu ul .small-screen-menu-dropdown button i').classList.toggle('rotate');
}

const toggleBtn1 = document.querySelector('.small-screen-nav-btn');
const toggleBtn2 = document.querySelector('.small-screen-nav-btn-2');


toggleBtn1.onclick = function(){
    document.querySelector('body').classList.add('static')
    document.querySelector('.small-screen-menu').classList.add('active');
    document.querySelector('.small-screen-nav-btn').classList.add('inactive');
    document.querySelector('.small-screen-nav-btn-2').classList.remove('inactive');
    document.querySelector('.small-screen-nav-btn-2').classList.add('active');
}

toggleBtn2.onclick = function(){
    document.querySelector('body').classList.remove('static')
    document.querySelector('.small-screen-menu').classList.remove('active');
    document.querySelector('.small-screen-nav-btn-2').classList.remove('active');
    document.querySelector('.small-screen-nav-btn-2').classList.add('inactive');
    document.querySelector('.small-screen-nav-btn').classList.remove('inactive');
    document.querySelector('.small-screen-nav-btn').classList.add('active');
}

// SWIPER TESTIMONIAL
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
   autoplay:{
      delay:5000,
    },
    speed:1000,
    loop:true,
  });