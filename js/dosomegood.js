

// Initialize and add the map
function initMap() {
    // The location of Uluru
    const wellington = { lat: -41.24194560476159, lng: 174.94459692315016 };
    // The map, centered at Wellington
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: wellington,
    });
   

    const schools = [
        {lat: -41.24194560476159, lng: 174.94459692315016},
        {lat: -41.129607975114794, lng: 174.83455859157453},
        {lat: -41.17218683361262, lng: 174.96391155567406},
        {lat: -41.18101853110376, lng: 174.95568847148795},
        {lat: -41.15608288668568, lng: 174.83561091752176},
        {lat: -41.166275935706444, lng: 174.8234880812725},
        {lat: -41.163662808171104, lng: 174.83336279847046},
        {lat: -41.32096211234522, lng: 174.77437213842975},
        {lat: -41.31121105611271, lng: 174.78212809847355},
        {lat: -41.162657859559104, lng: 174.82343831010854},
        {lat: -41.153286470133615, lng: 174.837704980754},
        {lat: -41.3111835269655, lng: 174.77984864080116},
        {lat: -41.2893860487872, lng: 174.72336728498163},
    ]


    for (let i = 0; i < schools.length; i++) {
        const marker = new google.maps.Marker({
            position: schools[i],
            map: map,
        });
    }

}