import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  conect() {
    console.log(this.element);
  }

  toggle(event) {
    const id = event.target.dataset.id
    const csrfToken = document.querySelector("[name='csrf-token'").content


    fetch(`/goals/${id}/toggle`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify({ completed: event.target.checked }) // body data type must match "Content-Type" header
  })
    .then(response => response.json())
    .then(data => {
       alert(data.message)
     })
  }
}
