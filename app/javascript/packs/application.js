// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
require('jquery')

Rails.start()
Turbolinks.start()
ActiveStorage.start()

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