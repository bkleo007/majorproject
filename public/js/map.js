mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, // starting position [lng, lat]
    zoom: 9, // starting zoom
});

const marker = new mapboxgl.Marker( { color: "red" })
    .setLngLat(listing.geometry.coordinates) //listing.geometry.coordinate
    .setPopup(new mapboxgl.Popup({offset: 35})
    .setHTML(
        `<h4>${listing.title}</h4><p>Exact Location will be provided post booking !</p>`
        )
    )
    .addTo(map);
