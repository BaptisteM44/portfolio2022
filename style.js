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
        // navbartitle.style.padding = "12px"
        // navbartitle.style.fontSize = "14px"
        if (scroll > 900){
            img1.style.opacity = "1"
            img2.style.opacity = "1"
        } else {
            img1.style.opacity = "0.2"
            img2.style.opacity = "0.2"
        }
        if (scroll > 1600){
            img3.style.opacity = "1"
        } else {
            img3.style.opacity = "0.2"
        }
    } else {
        img3.style.opacity = "0.2"
        // navbartitle.style.padding = "35px"
        // navbartitle.style.fontSize = "35px"
    }
    if (scroll > 900){
        img1
    }

})