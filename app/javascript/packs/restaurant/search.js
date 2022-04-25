let latitude = 0;
let longitude = 0;

if('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
    })
}

document.addEventListener("DOMContentLoaded", function(){
    document.forms['search_form'].addEventListener('submit', function(e) {
        e.preventDefault();
        searchRequest(this.elements['arrange'].value, latitude, longitude)
    })
})

const searchRequest = (arrange, latitude, longitude) => {
    location.href = '/restaurants?arrange=' + arrange + "&latitude=" + latitude + "&longitude=" + longitude;
}