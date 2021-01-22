// Setting locations for the beach locations

var beachLocations = [{
    //Nikki Beach
    coords: {
        lat: 43.221006,
        lng: 6.660079
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Nikki Beach</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //La Reserve a la plage 
    coords: {
        lat: 43.221748,
        lng: 6.662247
    },
    content: `<div class="info-window">
   <h6 class="info-heading">La Reserve a la plage</h6>
   <p class="info-text">Info text</p>
   </div>`
}, {
    // Indie beach house
    coords: {
        lat: 43.213635,
        lng: 6.663711
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Indie beach house</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    // Verde by Yeeels
    coords: {
        lat: 43.220365,
        lng: 6.662333
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Verde by Yeeels</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    // La serena
    coords: {
        lat: 43.225180432602436,
        lng: 6.6621437043536575
    },
    content: `<div class="info-window">
    <h6 class="info-heading">La serena</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    // Le Club 55
    coords: {
        lat: 43.22756587461226,
        lng: 6.66138701442197
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Le Club 55</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //  Tiki club
    coords: {
        lat: 43.2337601876218,
        lng: 6.662992767265478
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Tiki club</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //  Bagatelle St Tropez
    coords: {
        lat: 43.23475505131009,
        lng: 6.662593225615649
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Bagatelle St Tropez</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //  Shellona
    coords: {
        lat: 43.237680614465525,
        lng: 6.662758165624775
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Shellona</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //  Plage Restaurant L'Orangerie
    coords: {
        lat: 43.23808248164883,
        lng: 6.663513436392091
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Plage Restaurant L'Orangerie</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //  Club Les Palmiers Ramatuelle
    coords: {
        lat: 43.23883435507257,
        lng: 6.662888657437822
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Club Les Palmiers Ramatuelle</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //  Restaurant Tahiti Beach
    coords: {
        lat: 43.244190824586596,
        lng: 6.666079775341165
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Tahiti Beach</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //  Tropezina Beach
    coords: {
        lat: 43.24500712500184,
        lng: 6.667101309880046
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Tropezina Beach</h6>
    <p class="info-text">Info text</p>
    </div>`
}];


//Google map API created following the guides from https://developers.google.com/maps/documentation/javascript/how-tos

function initMap(locations) {

    //mapOptions set as St Tropez Coordinates
    var mapOptions = {
        zoom: 12,
        center: { lat: 43.22697421106884, lng: 6.606236091462182 },
    };

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //For loop to iterate through all of the location markers
    for (var i = 0; i < locations.length; i++) {
        addMarker(locations[i]),
            map.setZoom(13);
    }

    //Function with props paramater passed through to pull coords from the location array. 
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            animation: google.maps.Animation.DROP,
        });

        //If statement to check whether the array has a content property to display info window. 
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content,
            });

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
            });
        }

    }
}


//Event listener when clicking 'Beach'CTA
document.getElementById("beach-clubs").addEventListener("click", function () {
    initMap(beachLocations);
});

