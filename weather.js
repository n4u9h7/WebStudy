const weather = document.querySelector( ".js-weather" );
const API_KEY = "c26b0da632cf8a5f5a40d02f300a188f";
const COORDS = "coords";

function getWeather( lat, lnt ) {
    fetch( 
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lnt}&appid=${API_KEY}&units=metric`
    ).then( function( response ) {
        //console.log( response.json() );
        return response.json();
    }).then( function( json ) {
        console.log( json );
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });
}

function saveCoords( coordsObj ) {
    localStorage.setItem( COORDS, JSON.stringify( coordsObj ) );
}

function handleGeoSuccess( position ) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude: latitude,
        longitude: longitude,
    };

    saveCoords( coordsObj );
    getWeather( latitude, longitude );
}

function handleGeoError() {
    console.log( "Cant access geo location" );
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition( handleGeoSuccess, handleGeoError );
}

function loadCoords() {
    const loadedCoords = localStorage.getItem( COORDS );

    if( loadedCoords === null ) {
        askForCoords();
    } else {
        const parseCoords = JSON.parse( loadedCoords );
        getWeather( parseCoords.latitude, parseCoords.longitude );
    }
}

function init() {
    loadCoords();
}

init();