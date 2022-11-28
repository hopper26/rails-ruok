import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['breathe','inhale','exhale','stop'];

  connect() {
    this.start_breath.preventDefault;
  }

  start_breath() {
    let count = 0;
    this.breatheTarget.classList.toggle('play');
    this.inhaleTarget.classList.toggle('play2');
    this.exhaleTarget.classList.toggle('play3');
    // this.stopTarget.textContent = "Stop";
    // if this.stopTarget.textContent == "Stop"
  }
}
