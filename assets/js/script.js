//Responsive parallax scroll
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
    var div_id = 'img1';
    var img_w = 1200;
    var img_h = 636;
    resize_parallax(div_id, img_w, img_h);
}

//this resizes the parallax image down to an appropriate size for the viewport 
function resize_parallax(div_id, img_w, img_h) {
    var div = $('#' + div_id);
    var divwidth = div.width();
    if (divwidth < 769) {
        var pct = (img_h / img_w) * 105;
    } else {
        var pct = 60;
    }
    var newheight = Math.round(divwidth * (pct / 100));
    newheight = newheight + 'px';
    div.height(newheight);
}
// End of responsive parallax scroll