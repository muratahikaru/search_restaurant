let map
let lat = $('#lat').data('lat');
let lng = $('#lng').data('lng');

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: lat, lng: lng},
        zoom: 15,
    });

    marker = new google.maps.Marker({
        position:  {lat: lat, lng: lng},
        map: map
    });
}

$(document).ready(function() {
    initMap();
});