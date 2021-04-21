function initMap() {
    var options = {
        zoom: 8,
        center: {
            lat:51.5074, 
            lng:-0.1278}
    }

    var map = new 
    google.maps.Map(document.getElementById('map'), options);

    //add marker
    var marker = new google.maps.Marker({
        position:{lat:51.50562, lng:-0.04052},
        map:map,
        icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });
}
    
    