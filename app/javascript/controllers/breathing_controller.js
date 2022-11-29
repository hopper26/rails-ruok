import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['breathe','inhale','exhale','stop'];

  connect() {
    this.start_breath.preventDefault;
  }

  start_breath() {
    this.breatheTarget.classList.toggle('play');
    this.inhaleTarget.classList.toggle('play2');
    this.exhaleTarget.classList.toggle('play3');
    if (this.stopTarget.innerHTML == "Start") {
      this.stopTarget.innerHTML = "Stop";
    } else if (this.stopTarget.innerHTML == "Stop") {
      this.stopTarget.innerHTML = "Start";
    } else {
      null
    }
  }
}
