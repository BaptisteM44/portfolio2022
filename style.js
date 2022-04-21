ScrollReveal().reveal('.headline', { delay: 400 });
// burger

function toggleMenu () {  
    const navbar = document.querySelector('.nav-elements');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {    
      navbar.classList.toggle('show-nav');
    });    
  }
  toggleMenu();
// END burger

navbartitle = document.getElementById('navbar_title')
document.getElementById('img1')
document.getElementById('img2')
document.getElementById('img3')

window.addEventListener('scroll', function(){
    const scroll = this.document.documentElement.scrollTop;
    const min500 = window.matchMedia("(min-width: 500px)");
    console.log(scroll);
    // if (scroll > 100, min500.matches){
    //     navbar_title.style.transform = "translate(-100px, 80%)rotate(270deg)"
    // } else{
    //     navbar_title.style.transform = "translate(0px, 0%)rotate(0deg)"
    // }
    if (min500.matches && scroll > 100) {
        navbar_title.style.transform = "translate(-210px, 110%)rotate(270deg)"
        
    }else if (window.matchMedia("(max-width: 500px)").matches && scroll > 100) {
        navbar_title.style.transform = "translate(-110px, 240%)rotate(270deg)"
    }
    else{
        navbar_title.style.transform = "rotate(0deg)"
    }
    
        if (scroll > 1300){
            img1.style.opacity = "1"
            img2.style.opacity = "1"
            img8.style.opacity = "1"
        } else {
            navbar_title.style.opacity = "1"
            img1.style.opacity = "0.1"
            img2.style.opacity = "0.1"
            img9.style.opacity = "0.1"
        }
        if (scroll > 2400){
            img3.style.opacity = "1"
        } else {
            img3.style.opacity = "0.1"
        }
        if (scroll > 4500){
            img4.style.opacity = "1"
        } else   {
            img4.style.opacity = "0.1"
        }
        if (scroll > 5600){
            img5.style.opacity = "1"
            img9.style.opacity = "1"
        } else   {
            img5.style.opacity = "0.1"
            img9.style.opacity = "0.1"
        }
        if (scroll > 6300){
            img6.style.opacity = "1"
            img7.style.opacity = "1"
            img5.style.opacity = "0.1"
            img3.style.opacity = "0.1"
        } else   {
            img6.style.opacity = "0.1"
            img7.style.opacity = "0.1"
        }
        if (scroll > 7300){
            img3.style.opacity = "1"
            img5.style.opacity = "0.1"
            img6.style.opacity = "0.1"
            img7.style.opacity = "0.1"
            img9.style.opacity = "0.1"
        } else {
            
        }
})