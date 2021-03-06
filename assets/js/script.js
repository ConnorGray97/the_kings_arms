
//-----------------------------------------------RESPONSIVE PARALLAX SCROLL VALIDATION
// Credits to inkplant for the responsive parallax image https://inkplant.com/code/responsive-parallax-images 


//Resize images on page load
$(document).ready(function () {
    resize_all_parallax();
});

// Resizes images on page resize
$(window).on('resize', function () {
    resize_all_parallax();
});

// Resize function calls for image one.
function resize_all_parallax() {
    let div_id = 'img1';
    let img_w = 2000;
    let img_h = 1333;
    resize_parallax(div_id, img_w, img_h);
}

//this resizes the parallax image down to an appropriate size for the viewport 
function resize_parallax(div_id, img_w, img_h) {
    let div = $('#' + div_id);
    let divwidth = div.width();
    if (divwidth < 769) {
        var pct = (img_h / img_w) * 105;
    } else {
        var pct = 60;
    }
    var newheight = Math.round(divwidth * (pct / 100));
    newheight = newheight + 'px';
    div.height(newheight);
}


//-----------------------------------------------END RESPONSIVE PARALLAX SCROLL VALIDATION

//Opens nav on icon click
document.getElementById('icon').addEventListener('click', navOpen, navClose);
function navOpen() {
    document.querySelector('.nav-right').style.transform = 'translateX(0)';
}
//Closes nav on close button click
document.getElementById('navClose').addEventListener('click', closeNav);
function closeNav() {
    document.querySelector('.nav-right').style.transform = 'translateX(-100%)';
}

//Closes nav on link click
let navLinks = document.getElementsByClassName('nav-link');
function linkClose() {
    document.querySelector('.nav-right').style.transform = 'translateX(-100%)';

}
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', linkClose);
}