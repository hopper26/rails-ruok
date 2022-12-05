// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"
import "chartkick/chart.js"
import "trix"
import "@rails/actiontext"
import { initScribble } from "./custom/scribble"

document.addEventListener('turbo:load', (e) => {
  if (document.getElementById('canvas')) {
    initScribble()
  }
})
