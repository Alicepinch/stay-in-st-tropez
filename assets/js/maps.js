// Setting variables to be used throughout file
const stTropez = { lat: 43.23223137004324, lng: 6.648551015233651 };
const pampellone = { lat: 43.22816264096342, lng: 6.649391087955331 };
const cogolin = { lat: 43.305768388687284, lng: 6.557175604097107 };
const stTropezTown = { lat: 43.25842782566118, lng: 6.657048252167533 };
const hotels = { lat: 43.24811013466114, lng: 6.633655222212774 };
const address = `<strong>Address:</strong>`
const book = `<strong>Book Now:</strong>`
const makeBooking = `Make A Booking`
const contact = `<strong>Contact:</strong>`
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
    <p class="info-text">
    ${address} 1093 Chemin de l'EPI, 83350 Ramatuelle, France
    <br>
    ${book} <a href="tel:+33494798204">+33 4 94 798 204</a>
    <br>
    <a href="mailto:reservations.sttropez@nikkibeach.com">reservations.sttropez@nikkibeach.com</a>
    </div>`
}, {
    //La Reserve a la plage 
    coords: {
        lat: 43.221748,
        lng: 6.662247
    },
    content: `<div class="info-window">
   <h6 class="info-heading">La Reserve a la plage</h6>
   <p class="info-text">
    ${address} Chemin de l'EPI, 83350 Ramatuelle, France
    <br>
    ${book} <a href="tel:+33494449444">+33 4 94 79 82 04</a>
    <br>
    <a href="mailto:reservation@lareserve-ramatuelle.com">rreservation@lareserve-ramatuelle.com</a></p>
   </div>`
}, {
    // Indie beach house
    coords: {
        lat: 43.213635,
        lng: 6.663711
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Indie beach house</h6>
    <p class="info-text">
    ${address} Route de Bonne Terrasse, 83350 Ramatuelle, France
    <br>
    ${book} <a href="tel:+33(0)494798104">+33 4 94 79 82 04</a>
    <br>
    <a href="mailto:info@indiebeach.fr">info@indiebeach.fr</a></p>
    </div>`
}, {
    // Verde by Yeeels
    coords: {
        lat: 43.220365,
        lng: 6.662333
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Verde by Yeeels</h6>
    <p class="info-text">
    ${address} 1149 Chemin de l'EPI, 83350 Ramatuelle, France
    <br>
    ${book} <a href="tel:+33647523620">+33 6 47 52 36 20</a>
    </p>
    </div>`
}, {
    // La serena
    coords: {
        lat: 43.225180432602436,
        lng: 6.6621437043536575
    },
    content: `<div class="info-window">
    <h6 class="info-heading">La serena</h6>
    <p class="info-text">
    ${address} 83350 Ramatuelle, France
    <br>
    Book Now: <a href="tel:+33494433185">+33 4 94 43 31 85</a></p>
    </div>`
}, {
    // Le Club 55
    coords: {
        lat: 43.22756587461226,
        lng: 6.66138701442197
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Le Club 55</h6>
    <p class="info-text">
    ${address} 43 Boulevard Patch, 83350 Ramatuelle, France
    <br>
    Book Now: <a href="tel:+33494555555">+33 4 94 55 55 55</a></p>
    </div>`
}, {
    //  Tiki club
    coords: {
        lat: 43.2337601876218,
        lng: 6.662992767265478
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Tiki club</h6>
    <p class="info-text">
    ${address} Kon Tiki - Plage de Pampelonne, 4363 Route des Plages, 83350 Ramatuelle, France
    <br>
    Book Now: <a href="tel:+33494559694">+33 4 94 55 96 94</a></p>
    </div>`
}, {
    //  Bagatelle St Tropez
    coords: {
        lat: 43.23475505131009,
        lng: 6.662593225615649
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Bagatelle St Tropez</h6>
    <p class="info-text">
    ${address} Les Tamaris, Chemin de Matarane, 83350 Ramatuelle, France
    <br>
    Book Now: <a href="tel:+33494798325">+33 4 94 79 83 25</a></p>
    </div>`
}, {
    //  Shellona
    coords: {
        lat: 43.237680614465525,
        lng: 6.662758165624775
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Shellona</h6>
    <p class="info-text">
    ${address} Chemin des Tamaris, 83350 Ramatuelle, France
    <br>
    Book Now: <a href="tel:+33494438734">+33 4 94 43 87 34</a>
    <br></p>
    </div>`
}, {
    //  Plage Restaurant L'Orangerie
    coords: {
        lat: 43.23808248164883,
        lng: 6.663513436392091
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Plage Restaurant L'Orangerie</h6>
    <p class="info-text">
    ${address} Quartier De Pampelonne, 962 Chemin des Tamaris, 83350 Ramatuelle, France
    <br>
    Book Now: <a href="tel:+33494798474">+33 4 94 79 84 74</a></p>
    </div>`
}, {
    //  Club Les Palmiers Ramatuelle
    coords: {
        lat: 43.23883435507257,
        lng: 6.662888657437822
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Club Les Palmiers Ramatuelle</h6>
    <p class="info-text">
    ${address} Chemin des Tamaris, 83350 Ramatuelle, France
    <br>
    ${book} <a href="tel:+33494798270">+33 4 94 79 82 70</a>
    <br>
    <a href="mailto:s.cachat@wanadoo.fr">s.cachat@wanadoo.fr</a></p>
    </div>`
}, {
    //  Restaurant Tahiti Beach
    coords: {
        lat: 43.244190824586596,
        lng: 6.666079775341165
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Tahiti Beach</h6>
    <p class="info-text">
    ${address} 83350 Ramatuelle, France
    <br>
    ${book} <a href="tel:+33494971802">+33 4 94 97 18 02</a>
    <br>
    <a href="mailto:reception@tahiti-beach.com">reception@tahiti-beach.com</a></p>
    </div>`
}, {
    //  Tropezina Beach
    coords: {
        lat: 43.24500712500184,
        lng: 6.667101309880046
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Tropezina Beach</h6>
    <p class="info-text">
    ${address} 4 Route du Pinet, 83350 Ramatuelle, France
    <br>
    ${book} <a href="tel:+33494973678"> +33 4 94 97 36 78</a>
    </p>
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
    <p class="info-text">
    ${address} Quartier Beaucas, 83120 Sainte-Maxime, France
    <br>
    ${contact}<a href="tel:+33494407376">+33 4 94 40 73 76</a></p>
    </div>`
}, {
    //Domaine Mirabeau
    coords: {
        lat: 43.39895631610248, lng: 6.47609213097163
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Domaine Mirabeau</h6>
    <p class="info-text">
    ${address} D74, 83680 La Garde-Freinet, France
    <br>
    ${contact}<a href="tel:+33644389496">+33 6 44 38 94 964</a></p>
    </div>`
}, {
    //Château Minuty
    coords: {
        lat: 43.246187427866225,
        lng: 6.6155934312658475
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Château Minuty</h6>
    <p class="info-text">
    ${address} 2491 Route de la Berle, 83580 Gassin, France
    <br>
    ${contact}<a href="tel:+33494561209">+33 4 94 56 12 09</a></p>
    </div>`
}, {
    //Château des Marres
    coords: {
        lat: 43.2451870917524,
        lng: 6.664001938769536
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Domaine Des Beaucas</h6>
    <p class="info-text">
    ${address} 2998 Route des Plages, 83350 Ramatuelle, France
    <br>
    ${contact}<a href="tel:+33494972261">+33 4 94 97 22 61</a></p>
    </div>`
}, {
    //Domaine de la Croix
    coords: {
        lat: 43.20190683545636,
        lng: 6.587784289318764
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Domaine de la Croix</h6>
    <p class="info-text">
    ${address} 816 Boulevard Tabarin, 83420 La Croix-Valmer, France
    <br>
    ${contact}<a href="tel:+33494950175">+33 4 94 95 01 75</a></p>
    </div>`
}, {
    //Chateau Barbeyrolles
    coords: {
        lat: 43.24143568423566,
        lng: 6.582634448094969
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Chateau Barbeyrolles</h6>
    <p class="info-text">
    ${address} 2065 Route de la Berle, 83580 Gassin, France
    <br>
    ${contact}<a href="tel:+33494563358">+33 4 94 56 33 58</a></p>
    </div>`
}, {
    //Cave de Saint Tropez
    coords: {
        lat: 43.257049965208395,
        lng: 6.644431137091388
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Cave de Saint Tropez</h6>
    <p class="info-text">
    ${address} Route des Plages, 83990 Saint-Tropez, France
    <br>
    ${contact}<a href="tel:+33494970160">+33 4 94 97 01 60</a></p>
    </div>`
}, {
    //Maison Angelvin
    coords: {
        lat: 43.260487882026055,
        lng: 6.678076766373552
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Maison Angelvin</h6>
    <p class="info-text">
    ${address} 65 La Pierre Plantée, 83990 Saint-Tropez, France
    <br>
    ${contact}<a href="tel:+33627842447">+33 6 27 84 24 47</a></p>
    </div>`
}, {
    //Domaine Bertaud Belieu
    coords: {
        lat: 43.25529967830405,
        lng: 6.597910904558934
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Domaine Bertaud Belieu</h6>
    <p class="info-text">
    ${address} Domaine Bertaud Belieu 635 RD61, Route de Ramatuelle, 83580 Gassin,France
    <br>
    ${contact}<a href="tel:+33494561683">+33 4 94 56 16 83</a></p>
    </div>`
}, {
    //Domaine La Rouillère - AOC Côtes de Provence
    coords: {
        lat: 43.239419778334785,
        lng: 6.611901306393376
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Domaine La Rouillère - AOC Côtes de Provence</h6>
    <p class="info-text">
    ${address} 2991 D61, 83580 Gassin, France
    <br>
    ${contact} <a href="tel:+33494557260">+33 4 94 55 72 60</a></p>
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
    <p class="info-text">
    ${address} 29 Quai Jean Jaurès, 83990 Saint-Tropez, France
    <br>
    ${book} <a href="tel:+33494972020">+33 4 94 97 20 20</a></p>
    </div>`
}, {
    //Dior Des Lices
    coords: {
        lat: 43.27096421961096,
        lng: 6.640466423161481
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Dior Des Lices</h6>
    <p class="info-text">
    ${address} 13 Rue François Sibilli, 83990 Saint-Tropez, France
    <br>
    ${book} <a href="tel:+33498126765">+33 4 98 12 67 65</a></p>
    </div>`
}, {
    //Restaurant L'Italien
    coords: {
        lat: 43.272680856557976,
        lng: 6.639042170181241
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Restaurant L'Italien</h6>
    <p class="info-text">
    ${address} 17 Quai Jean Jaurès, 83990 Saint-Tropez, France
    <br>
    ${book} <a href="tel:+33489816191">+33 4 89 81 61 91</a></p>
    </div>`
}, {
    //Resto Thaï
    coords: {
        lat: 43.27074158055439,
        lng: 6.637950511118492
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Resto Thaï</h6>
    <p class="info-text">
    ${address} 3 Rue des Charrons, 83990 Saint-Tropez, France
    <br>
    ${book} <a href="tel:+33489780758">+33 4 89 78 07 58</a></p>
    </div>`
}, {
    //Pablo
    coords: {
        lat: 43.26989202930117,
        lng: 6.64170426260321
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Pablo</h6>
    <p class="info-text">
    ${address} Place des Lices, 83990 Saint-Tropez, France
    <br>
    ${book} <a href="tel:+33494971133">+33 4 94 97 11 33</a></p>
    </div>`
}, {
    //Luna Rossa
    coords: {
        lat: 43.26984515716403,
        lng: 6.641968460216969
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Luna Rossa</h6>
    <p class="info-text">
    ${address} 1 place des lices, 83990 Saint-Tropez, France
    <br>
    ${book} <a href="tel:+33494973127">+33 4 94 97 31 27</a></p>
    </div>`
}, {
    //La Ramade
    coords: {
        lat: 43.2692582758765,
        lng: 6.641541988985785
    },
    content: `<div class="info-window">
    <h6 class="info-heading">La Ramade</h6>
    <p class="info-text">
    ${address} Rue du Temple, 83990 Saint-Tropez, France
    <br>
    ${book} <a href="tel:+33494815867">+33 4 94 81 58 67</a></p>
    </div>`
}, {
    //Salama
    coords: {
        lat: 43.268067712159066,
        lng: 6.6397375229399636
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Salama</h6>
    <p class="info-text">
    ${address} 1 Chemin des Conquettes, 83990 Saint-Tropez, France
    <br>
    ${book} <a href="tel:+33494965293">+33 4 94 96 52 93</a></p>
    </div>`
}, {
    //Le Pomme De Pin
    coords: {
        lat: 43.24759066207041,
        lng: 6.662984513111073
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Le Pomme De Pin</h6>
    <p class="info-text">
    ${address} Route de Tahiti, 83350 Ramatuelle, France
    <br>
    ${book} <a href="tel:+33494977370">+33 4 94 97 73 70</a></p>
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
    <p class="info-text">
    ${address} Route de Tahiti, 83350 Ramatuelle, France
    <br>
    <a href="https://www.lagarbine.com/en/" target="_blank">${makeBooking}</a></p>
    </div>`
}, {
    //La Ferme d'Augustin Hôtel 4 étoiles
    coords: {
        lat: 43.24728588107085,
        lng: 6.664014481210252
    },
    content: `<div class="info-window">
    <h6 class="info-heading">La Ferme d'Augustin Hôtel 4 étoiles</h6>
    <p class="info-text">
    ${address} Route de Tahiti, 83350 Ramatuelle, France
    <br>
    <a href="https://www.fermeaugustin.com/en" target="_blank">${makeBooking}</a></p>
    </div>`
}, {
    //Hotel Saint Vincent
    coords: {
        lat: 43.251161958453785,
        lng: 6.658692978612329
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Hotel Saint Vincent</h6>
    <p class="info-text">
    ${address} 464 Route de Tahiti, 83350 Ramatuelle, France
    <br>
    <a href="https://hotelsaintvincent.com/en/" target="_blank">${makeBooking}</a></p>
    </div>`
}, {
    //La Figuière
    coords: {
        lat: 43.25047428530443,
        lng: 6.658263825177013
    },
    content: `<div class="info-window">
    <h6 class="info-heading">La Figuière</h6>
    <p class="info-text">
    ${address} 534 Route de Tahiti, 83350 Ramatuelle, France
    <br>
    <a href="https://www.hotel-lafiguiere.com/en/" target="_blank">${makeBooking}</a></p>
    </div>`
}, {
    //Château de la Messardière
    coords: {
        lat: 43.25578792146569,
        lng: 6.658177994489949
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Château de la Messardière</h6>
    <p class="info-text">
    ${address} 2 Route de Tahiti, 83990 Saint-Tropez, France
    <br> 
    <a href="https://www.messardiere.com/en/index.php" target="_blank">${makeBooking}</a></p>
    </div>`
}, {
    //Hôtel de Paris Saint-Tropez
    coords: {
        lat: 43.27066363622626,
        lng: 6.636119507914687
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Hôtel de Paris Saint-Tropez</h6>
    <p class="info-text">
    ${address} 1 Traverse de la Gendarmerie, 83990 Saint-Tropez, France
    <br>
    <a href="https://www.messardiere.com/en/index.php" target="_blank">${makeBooking}</a></p>
    </div>`
}, {
    //Hôtel La Mandarine
    coords: {
        lat: 43.26616380347856,
        lng: 6.648221634790609
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Hôtel La Mandarine</h6>
    <p class="info-text">
    ${address} Chemin de Belle Isnarde, 83990 Saint-Tropez, France
    <br>
    <a href="https://www.booking.com/hotel/fr/lemandarine.en-gb.html" target="_blank">${makeBooking}</a></p>
    </div>`
}, {
    //Hotel Sezz Saint-tropez
    coords: {
        lat: 43.265538800398005,
        lng: 6.669421814495238
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Hotel Sezz Saint-tropez</h6>
    <p class="info-text">
    ${address} 151 Chemin des Salins, 83990 Saint-Tropez, France
    <br>
    <a href="https://saint-tropez.hotelsezz.com/en/" target="_blank">${makeBooking}</a></p>
    </div>`
}, {
    //Le Pre de la Mer
    coords: {
        lat: 43.265226296451345,
        lng: 6.669078491746986
    },
    content: `<div class="info-window">
    <h6 class="info-heading">Le Pre de la Mer</h6>
    <p class="info-text">
    ${address} Les Salins, 83990 Saint-Tropez, France
    <br>
    <a href="https://www.lepredelamer.fr/" target="_blank">${makeBooking}</a></p>
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
    <p class="info-text">
    ${address} 364 Chemin de, 83350 Ramatuelle, France
    <br>
    <a href="https://www.muse-hotels.com/" target="_blank">${makeBooking}</a></p>
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
    <p class="info-text">
    ${address} Chemin des Salins, 83990 Saint-Tropez, France
    <br>
    <a href="https://www.saintamour-hotel.com/en/" target="_blank">${makeBooking}</a></p>
    </div>`
}];

//Google map API created following the guides and adjusting code from https://developers.google.com/maps/documentation/javascript/how-tos

// Init map is the initial map users will see
function initMap() {

    mapOptions = {
        zoom: 12,
        center: stTropez
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

}

//Function to loop through all markers to be called for each location map
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

//New map created to be displayed when clicked on the "Beaches" Button
function initMapBeach(locations) {

    mapOptions = {
        zoom: 14,
        center: pampellone
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

}

//New map created to be displayed when clicked on the "Vineyards" Button
function initMapVineyards(locations) {

    mapOptions = {
        zoom: 11,
        center: cogolin
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

}

//New map created to be displayed when clicked on the "Restaurants" Button
function initMapRestaurants(locations) {

    mapOptions = {
        zoom: 14,
        center: stTropezTown
    };

    map = new google.maps.Map(document.getElementById("map"), mapOptions);

}

//New map created to be displayed when clicked on the "Hotels" Button
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