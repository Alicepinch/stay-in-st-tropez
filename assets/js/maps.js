//Google map API

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: {
            lat: 43.26781,
            lng: 6.640711
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

}

// Setting locations for the beach locations

let beachLocations = [
    {
        //Nikki Beach
        coords: {
            lat: 43.221006,
            lng: 6.660079
        }
    },{
        //La Reserve a la plage 
        coords: {
            lat: 43.221748,
            lng: 6.662247
        }
    },{
        // Indie beach house
        coords: {
            lat: 43.213635,
            lng: 6.663711
        }
    }, {
        // Verde by Yeeels
        coords: {
            lat: 43.220365,
            lng: 6.662333
        }
    }, {
        // La serena
        coords: {
            lat: 43.225180432602436,
            lng: 6.6621437043536575
        }
    },{
        // Le Club 55
        coords: {
            lat: 43.22756587461226,
            lng: 6.66138701442197
        }
    },{
        //  Cap 21
        coords: {
            lat: 43.22746269214879,
            lng: 6.661637360135607
        }
    },{
        //  Tiki club
        coords: {
            lat: 43.2337601876218,
            lng: 6.662992767265478
        }
    },{
        //  Bagatelle St Tropez
        coords: {
            lat: 43.23475505131009,
            lng: 6.662593225615649
        }
    },{
        //  Neptune Plage
        coords: {
            lat: 43.23578490236438,
            lng: 6.66307115834659
        }
    },{
        //  Shellona
        coords: {
            lat: 43.237680614465525,
            lng: 6.662758165624775
        }
    },{
        //  Plage Restaurant L'Orangerie
        coords: {
            lat: 43.23808248164883,
            lng: 6.663513436392091
        }
    },{
        //  Club Les Palmiers Ramatuelle
        coords: {
            lat: 43.23883435507257,
            lng: 6.662888657437822
        }
    },{
        //  Restaurant Tahiti Beach
        coords: {
            lat: 43.244190824586596,
            lng: 6.666079775341165
        }
    },{
        //  Tropezina Beach
        coords: {
            lat: 43.24500712500184,
            lng: 6.667101309880046
        }
    },
];