// Setting variables to be used in functions
const stTropez = { lat: 43.23223137004324, lng: 6.648551015233651 };
const pampellone = { lat: 43.22816264096342, lng: 6.649391087955331 };
const cogolin = { lat: 43.25811227628343, lng: 6.609622630343837 };
const stTropezTown = { lat: 43.253986592356014, lng: 6.651336343911749 };
const hotels = { lat: 43.24811013466114, lng: 6.633655222212774 }
let mapOptions;
let map;

// Setting const variables for locations
//Beach Locations 
const beachLocations = [{
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

//Vineyard Locations

const vineyardLocations = [{
    //Domaine des Beaucas
    coords: {
        lat: 43.36874546377021, lng: 6.569942916534111
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Domaine des Beaucas</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Domaine Mirabeau
    coords: {
        lat: 43.39895631610248, lng: 6.47609213097163
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Domaine Mirabeau</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Château Minuty
    coords: {
        lat: 43.246187427866225,
        lng: 6.6155934312658475
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Château Minuty</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Château des Marres
    coords: {
        lat: 43.2451870917524,
        lng: 6.664001938769536
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Domaine Des Beaucas</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Domaine de la Croix
    coords: {
        lat: 43.20190683545636,
        lng: 6.587784289318764
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Domaine de la Croix</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Chateau Barbeyrolles
    coords: {
        lat: 43.24143568423566,
        lng: 6.582634448094969
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Chateau Barbeyrolles</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Cave de Saint Tropez
    coords: {
        lat: 43.257049965208395,
        lng: 6.644431137091388
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Cave de Saint Tropez</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Maison Angelvin
    coords: {
        lat: 43.260487882026055,
        lng: 6.678076766373552
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Maison Angelvin</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Domaine Bertaud Belieu
    coords: {
        lat: 43.25529967830405,
        lng: 6.597910904558934
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Domaine Bertaud Belieu</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Domaine La Rouillère - AOC Côtes de Provence
    coords: {
        lat: 43.239419778334785,
        lng: 6.611901306393376
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Domaine La Rouillère - AOC Côtes de Provence</h6>
    <p class="info-text">Info text</p>
    </div>`
}];

//Restaurant locations

const restaurantsLocations = [{
    //Senequier
    coords: {
        lat: 43.272405494824405,
        lng: 6.639452548172136
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Senequier</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Dior Des Lices
    coords: {
        lat: 43.27096421961096,
        lng: 6.640466423161481
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Dior Des Lices</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Restaurant L'Italien
    coords: {
        lat: 43.272680856557976,
        lng: 6.639042170181241
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Restaurant L'Italien</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Cave de Saint Tropez
    coords: {
        lat: 43.271423165972216,
        lng: 6.638843686717584
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Cave de Saint Tropez</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Resto Thaï
    coords: {
        lat: 43.27074158055439,
        lng: 6.637950511118492
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Resto Thaï</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Pablo
    coords: {
        lat: 43.26989202930117,
        lng: 6.64170426260321
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Pablo</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Luna Rossa
    coords: {
        lat: 43.26984515716403,
        lng: 6.641968460216969
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Luna Rossa</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //La Ramade
    coords: {
        lat: 43.2692582758765,
        lng: 6.641541988985785
    },
    content: `<div class="info-window">
    <h6 class="info-heading">La Ramade</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Salama
    coords: {
        lat: 43.268067712159066,
        lng: 6.6397375229399636
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Salama</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Le Pomme De Pin
    coords: {
        lat: 43.24759066207041,
        lng: 6.662984513111073
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Le Pomme De Pin</h6>
    <p class="info-text">Info text</p>
    </div>`
}];

//Hotels locations

const hotelsLocations = [{
    //Hotel La Garbine Ramatuelle | Séminaires À St Tropez
    coords: {
        lat: 43.25247476745094,
        lng: 6.657577179680506
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Hotel La Garbine Ramatuelle | Séminaires À St Tropez</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //La Ferme d'Augustin Hôtel 4 étoiles
    coords: {
        lat: 43.24728588107085,
        lng: 6.664014481210252
    },
    content: `<div class="info-window">
    <h6 class="info-heading">La Ferme d'Augustin Hôtel 4 étoiles</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Hotel Saint Vincent
    coords: {
        lat: 43.251161958453785,
        lng: 6.658692978612329
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Hotel Saint Vincent</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //La Figuière
    coords: {
        lat: 43.25047428530443,
        lng: 6.658263825177013
    },
    content: `<div class="info-window">
    <h6 class="info-heading">La Figuière</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Château de la Messardière
    coords: {
        lat: 43.25578792146569,
        lng: 6.658177994489949
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Château de la Messardière</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Hôtel de Paris Saint-Tropez
    coords: {
        lat: 43.27066363622626,
        lng: 6.636119507914687
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Hôtel de Paris Saint-Tropez</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Hôtel La Mandarine
    coords: {
        lat: 43.26616380347856,
        lng: 6.648221634790609
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Hôtel La Mandarine</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Hotel Sezz Saint-tropez
    coords: {
        lat: 43.265538800398005,
        lng: 6.669421814495238
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Hotel Sezz Saint-tropez</h6>
    <p class="info-text">Info text</p>
    </div>`
}, {
    //Le Pre de la Mer
    coords: {
        lat: 43.265226296451345,
        lng: 6.669078491746986
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Le Pre de la Mer</h6>
    <p class="info-text">Info text</p>
    </div>`
},
{
    //Muse Hotel Saint Tropez
    coords: {
        lat: 43.252662309283316,
        lng: 6.6363769999758775
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Muse Hotel Saint Tropez</h6>
    <p class="info-text">Info text</p>
    </div>`
},
{
    //Hôtel Saint Amour La Tartane
    coords: {
        lat: 43.2636012500679,
        lng: 6.6802364810652115
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Hôtel Saint Amour La Tartane</h6>
    <p class="info-text">Info text</p>
    </div>`
}];

//Google map API created following the guides from https://developers.google.com/maps/documentation/javascript/how-tos

// Init map is the first map users will see
function initMap(locations) {

    mapOptions = {
        zoom: 12,
        center: stTropez
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

}

//Function to loop through all markers to be called for each location
function addMarker(locations) {

    if (locations) {
        // For loop to loop through all the locations
        for (let i = 0; i < locations.length; i++) {
            let marker = new google.maps.Marker({
                position: locations[i].coords,
                map: map,
                animation: google.maps.Animation.DROP,
            });

            //Create infoWindow for the content in the locations arrays
            let infoWindow = new google.maps.InfoWindow({
                content: locations[i].content,
            });

            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open(map, marker);
                if (currWindow != null) {
                    currWindow.close();
                }
                infoWindow.open(map, marker);
                currWindow = infoWindow;
            });

            var currWindow = null;
        }
    }
}

//Map displayed when clicked on the "Beaches" Button
function initMapBeach(locations) {

    mapOptions = {
        zoom: 13,
        center: pampellone
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

}

//Map displayed when clicked on the "Vineyards" Button
function initMapVineyards(locations) {

    mapOptions = {
        zoom: 12,
        center: cogolin
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

}

//Map displayed when clicked on the "Restaurants" Button
function initMapRestaurants(locations) {

    mapOptions = {
        zoom: 13,
        center: stTropezTown
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

}

//Map displayed when clicked on the "Hotels" Button
function initMapHotels(locations) {

    mapOptions = {
        zoom: 13,
        center: hotels
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

//Event listener when clicking 'Beach' CTA
document.getElementById("beach-clubs").addEventListener("click", function () {
    initMapBeach(beachLocations);
    addMarker(beachLocations);
});

//Event listener when clicking 'Vineyard' CTA
document.getElementById("vineyards").addEventListener("click", function () {
    initMapVineyards(vineyardLocations);
    addMarker(vineyardLocations);
});

//Event listener when clicking 'Restaurant' CTA
document.getElementById("restaurants").addEventListener("click", function () {
    initMapRestaurants(restaurantsLocations);
    addMarker(restaurantsLocations);
});

//Event listener when clicking 'Hotel' CTA
document.getElementById("hotels").addEventListener("click", function () {
    initMapHotels(hotelsLocations);
    addMarker(hotelsLocations);
});