function initMap() {
    var options = {
        zoom: 15,
        center: {
            lat:51.50160, 
            lng:-0.07569}
    }

    var map = new 
    google.maps.Map(document.getElementById('map'), options);

    //add marker
    var marker = new google.maps.Marker({
        position:{lat:51.50160, lng:-0.07569},
        map:map,
    });
}
    
    