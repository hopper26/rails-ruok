import { Controller } from "@hotwired/stimulus";
import mapboxgl from "mapbox-gl"; // yarn add mapbox-gl

export default class extends Controller {
  static targets = ["input", "coords"];

  connect() {
    console.log("The geocoder controller is loaded!");
  }

  initialize() {
    this.token = "pk.eyJ1IjoiaGFsdWNhczkzIiwiYSI6ImNsOXhpZ3JrcjBha2szdXBhOGJ1dHEweWsifQ.HBOlhDzuu3Oq52Zhouf39w";
  }

  // AJAX
  geocode(event) { // action
    event.preventDefault();
    const address = this.inputTarget.value;
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${this.token}`)
      .then(response => response.json())
      .then((data) => {
        const longitude = data.features[0].center[0]; // found by looking at what was in the data
        const latitude = data.features[0].center[1];
        this.#addCoords(longitude, latitude);
      });
  }

  // adding the coordinates from the data fetched
  #addCoords(longitude, latitude) {
    this.coordsTarget.innerText = `${longitude} ${latitude}`;
  }

  // adding the map - most from the documention
  #addMap(longitude, latitude) {
    mapboxgl.accessToken = this.token;
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [longitude, latitude], // starting position [lng, lat]
      zoom: 12
    });
    new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);
  }
}
