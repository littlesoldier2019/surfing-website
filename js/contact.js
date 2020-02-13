// Initialize and add the map
// function initMap() {
//     // The location of Integrify
//     var Integrify = {lat: 60.170407, lng: 24.923704};
//     // The map, centered at Integrify
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 15, center: Integrify});
//     // The marker, positioned at Integrify
//     var marker = new google.maps.Marker({position: Integrify, map: map});
//   }  

window.addEventListener('load', () => {


let fullName = document.getElementById('full-name');
// let email = document.getElementById('email');
// let company = document.getElementById('company');
// let subject = document.getElementById('subject');
// let message = document.getElementById('message');
let errorText = document.getElementById('errorText');


let form = document.getElementById('form');

    form.addEventListener('submit', (e) => {

        let errorArr = [];

        if (!fullName.value.match(/^[a-zA-Z]$/)) {
            errorArr.push('Please use normal letter');
        }

        if (fullName.value.length < 2)
            errorArr.push('Name is too short');

        if (fullName.value.length > 20)
        errorArr.push('Name is too long');

        if (errorArr.length > 0) {
            e.preventDefault();
            errorText.innerHTML = errorArr.join('. ')
        }

    })

})