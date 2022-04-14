// const body = $("#body");

// body.on("scroll", function(e) {
//     if (this.scrollTop > 220) {
//         body.addClass("test_fix");
//     } else {
//         body.removeClass("test_fix")
//     }
// })

test = document.getElementById("test");
navbartitle = document.getElementById('navbar_title')
document.getElementById('img1')
document.getElementById('img2')
document.getElementById('img3')

window.addEventListener('scroll', function(){
    const scroll = this.document.documentElement.scrollTop;
    console.log(scroll);
    if (scroll > 100){
        if (scroll > 1300){
            img1.style.opacity = "1"
            img2.style.opacity = "1"
            img8.style.opacity = "1"
        } else {
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
        if (scroll > 6700){
            img6.style.opacity = "1"
            img7.style.opacity = "1"
            img5.style.opacity = "0.1"
            img3.style.opacity = "0.1"
        } else   {
            img6.style.opacity = "0.1"
            img7.style.opacity = "0.1"
        }
        if (scroll > 7700){
            img3.style.opacity = "1"
            img5.style.opacity = "0.1"
            img6.style.opacity = "0.1"
            img7.style.opacity = "0.1"
            img9.style.opacity = "0.1"
        } else {
        }

    } 
    if (scroll > 900){
        img1
    }

})