// Setting locations for the beach locations

var beachLocations = [{
    //Nikki Beach
    coords: {
        lat: 43.221006,
        lng: 6.660079
    },
    content: `<h6>Nikki Beach</h6>`
}, {
    //La Reserve a la plage 
    coords: {
        lat: 43.221748,
        lng: 6.662247
    },
    content: `<h6>La Reserve a la plage</h6>`
}, {
    // Indie beach house
    coords: {
        lat: 43.213635,
        lng: 6.663711
    },
    content: `<h6>Indie beach house</h6>`
}, {
    // Verde by Yeeels
    coords: {
        lat: 43.220365,
        lng: 6.662333
    },
    content: `<h6>Verde by Yeeels</h6>`
}, {
    // La serena
    coords: {
        lat: 43.225180432602436,
        lng: 6.6621437043536575
    },
    content: `<h6>La serena</h6>`
}, {
    // Le Club 55
    coords: {
        lat: 43.22756587461226,
        lng: 6.66138701442197
    },
    content: `<h6>Le Club 55</h6>`
}, {
    //  Cap 21
    coords: {
        lat: 43.22746269214879,
        lng: 6.661637360135607
    },
    content: `<h6>Cap 21</h6>`
}, {
    //  Tiki club
    coords: {
        lat: 43.2337601876218,
        lng: 6.662992767265478
    },
    content: `<h6>Tiki club</h6>`
}, {
    //  Bagatelle St Tropez
    coords: {
        lat: 43.23475505131009,
        lng: 6.662593225615649
    },
    content: `<h6>Bagatelle St Tropez</h6>`
}, {
    //  Neptune Plage
    coords: {
        lat: 43.23578490236438,
        lng: 6.66307115834659
    },
    content: `<h6>Neptune Plage</h6>`
}, {
    //  Shellona
    coords: {
        lat: 43.237680614465525,
        lng: 6.662758165624775
    },
    content: `<h6>Shellona</h6>`
}, {
    //  Plage Restaurant L'Orangerie
    coords: {
        lat: 43.23808248164883,
        lng: 6.663513436392091
    },
    content: `<h6>Plage Restaurant L'Orangerie</h6>`
}, {
    //  Club Les Palmiers Ramatuelle
    coords: {
        lat: 43.23883435507257,
        lng: 6.662888657437822
    },
    content: `<h6>Club Les Palmiers Ramatuelle</h6>`
}, {
    //  Restaurant Tahiti Beach
    coords: {
        lat: 43.244190824586596,
        lng: 6.666079775341165
    },
    content: `<h6>Tahiti Beach</h6>`
}, {
    //  Tropezina Beach
    coords: {
        lat: 43.24500712500184,
        lng: 6.667101309880046
    },
    content: `<h6>Tropezina Beach</h6>`
}];




//Google map API

function initMap(locations) {

    //mapOptions set as St Tropez Coordinates
    var mapOptions = {
        zoom: 12,
        center: { lat: 43.241231711164154, lng: 6.642027488761515 },
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //For loop to iterate through all of the beach location markers
    for (var i = 0; i < locations.length; i++) {
        addMarker(locations[i]),
         map.setZoom(13);
    }



    //Function with props paramater passed through to pull coords from the location array. 
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });

        //If statement to check whether the array has a content property to display info window. 
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content,
            });

            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });

        }

    };

}

//Event listener when clicking 'Beach'CTA
document.getElementById("beach-clubs").addEventListener("click", function () {
    initMap(beachLocations);

});

