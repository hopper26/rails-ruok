import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

// export default class extends Controller {
  static targets = ["quote"]
  static values = { url: String }

  connect() {
    fetch(this.urlValue)
    .then((response) => {return response.json()})
    .then((data) => {
      this.quoteTarget.innerHTML = data[Math.floor(Math.random() * data.length)].text
    })
  }
}
