import { Controller } from "@hotwired/stimulus";
import mapboxgl from "mapbox-gl"; // yarn add mapbox-gl

export default class extends Controller {
  static targets = ["input", "coords"];

  connect() {
    // console.log("The geocoder controller is loaded!");
  }

  initialize() {
    this.token = "pk.eyJ1IjoiaGFsdWNhczkzIiwiYSI6ImNsOXhpZ3JrcjBha2szdXBhOGJ1dHEweWsifQ.HBOlhDzuu3Oq52Zhouf39w";
  }

  // AJAX
  geocode(event) { // action
    event.preventDefault();
    const address = this.inputTarget.value;
    console.log('hi')
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${this.token}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        const longitude = data.features[0].center[0]; // found by looking at what was in the data
        const latitude = data.features[0].center[1];
        this.#addCoords(longitude, latitude);
        this.#addMap(longitude, latitude);
      });
  }

  // adding the coordinates from the data fetched
  #addCoords(longitude, latitude) {
    console.log('coord');
    this.coordsTarget.innerText = `${longitude} ${latitude}`;
  }

  // adding the map - most from the documention
  #addMap(longitude, latitude) {
    console.log('map');
    mapboxgl.accessToken = this.token;
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [longitude, latitude], // starting position [lng, lat]
      zoom: 5
    });

    //can use location services
    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
      })
    );

    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);
  }
}
