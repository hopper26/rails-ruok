import { Controller } from "@hotwired/stimulus";
import mapboxgl from "mapbox-gl"; // yarn add mapbox-gl

export default class extends Controller {
  // static targets = ["input", "coords"];

  // connect() {
  //   // console.log("The geocoder controller is loaded!");
  // }

  // initialize() {
  //   this.token = "pk.eyJ1IjoiaGFsdWNhczkzIiwiYSI6ImNsOXhpZ3JrcjBha2szdXBhOGJ1dHEweWsifQ.HBOlhDzuu3Oq52Zhouf39w";
  // }


  // map = new mapboxgl.Map({
  //     container: 'map',
  //     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  //     style: 'mapbox://styles/mapbox/streets-v12',
  //     center: [-79.4512, 43.6568],
  //     zoom: 13
  // });

  // geocoder = new MapboxGeocoder({
  //     accessToken: this.token,
  //     marker: {
  //         color: 'orange'
  //     },
  //     mapboxgl: mapboxgl
  // });

  // locator = new mapboxgl.GeolocateControl({
  //     positionOptions: {
  //       enableHighAccuracy: true
  //     },
  //     trackUserLocation: true,
  //     showUserHeading: true
  //   });

  //   addControl(geocoder);
  //   addControl(locator);

  // // AJAX
  // geocode(event) { // action
  //   event.preventDefault();
  //   const address = this.inputTarget.value;
  //   fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${this.token}`)
  //     .then(response => response.json())
  //     .then((data) => {
  //       console.log(data)
  //       const longitude = data.features[0].center[0]; // found by looking at what was in the data
  //       const latitude = data.features[0].center[1];
  //       this.#addCoords(longitude, latitude);
  //       this.#addMap(longitude, latitude);
  //     });

  // }

  // // adding the coordinates from the data fetched
  // #addCoords(longitude, latitude) {
  //   console.log('coord');
  //   this.coordsTarget.innerText = `${longitude} ${latitude}`;
  // }

  // // adding the map - most from the documention
  // #addMap(longitude, latitude) {
  //   mapboxgl.accessToken = this.token;
  //   const map = new mapboxgl.Map({
  //     container: 'map', // container ID
  //     style: 'mapbox://styles/mapbox/streets-v12', // style URL
  //     center: [longitude, latitude], // starting position [lng, lat]
  //     // autocomplete: true,
  //     zoom: 15
  //   });

  //   locator = new mapboxgl.GeolocateControl({
  //     positionOptions: {
  //       enableHighAccuracy: true
  //     },
  //     trackUserLocation: true,
  //     showUserHeading: true
  //   });

  //   geocoder = new MapboxGeocoder({
  //     accessToken: mapboxgl.accessToken,
  //      mapboxgl: mapboxgl
  //   });

  //   //can use location services
  //   // map.addControl()(
  //   //   new mapboxgl.GeolocateControl({
  //   //     positionOptions: {
  //   //       enableHighAccuracy: true
  //   //     },
  //   //     trackUserLocation: true,
  //   //     showUserHeading: true
  //   //   }),
  //   // );

  //   map.addControl(geocoder);
  //   map.addControl(locator);

  //   new mapboxgl.Marker()
  //     .setLngLat([longitude, latitude])
  //     .addTo(map);
  // }
}
