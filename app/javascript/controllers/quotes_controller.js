import { Controller } from "@hotwired/stimulus"
// import Rails from "@rails/ujs";
// const header = new Headers({ "Access-Control-Allow-Origin": "*" });

// let headers = new Headers();

// headers.append('Content-Type', 'application/json');
// headers.append('Accept', 'application/json');

// headers.append('Access-Control-Allow-Origin', '*' );
// headers.append('Access-Control-Allow-Credentials', 'true');


export default class extends Controller {

// export default class extends Controller {
  static targets = ["quote"]
  static values = { url: String }

  connect() {
    fetch(this.urlValue)
    .then((response) => {return response.json()})
    .then((data) => {
      this.quoteTarget.innerHTML = data[35].text
    })
  }

  // day_quote() {
    // console.log(this.urlValue);
    // const options = {
    //   mode: "no-cors",
    //   headers: { "Accept": "application/json" },
    //   //mode: "no-cors",
    //   method: "POST"
    // }
    // fetch(this.urlValue, options)
  //   fetch(this.urlValue)
  //     .then((response) => {return response.json()})
  //     .then((data) => {
  //       //console.log(data.q)
  //       // console.log(data)
  //       this.quoteTarget.innerHTML = data[35].text
  //     })
  // }
//https://type.fit/api/quotes - this works



    // Access to fetch at 'https://zenquotes.io/api/today' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
    // fetch("https://zenquotes.io/api/today", {
    //   mode: 'no-cors',
    //   method: "post",
    //   headers: {
    //      "Content-Type": "application/json"
    //   }})
    //   // body: JSON.stringify(ob)})
    //   .then (response => response.json())
    //   .then((data) => {
    //   console.log(data)
    //   })
      // this.day_quote.preventDefault;

  // day_quote() {
  //   Rails.ajax({
  //     type: "post",
  //     url: this.data.get('url'),
  //     data: new FormData(this.element),
  //     mode: "no-cors"
  //   })
  //   console.log(data);
  // }
    // url = "https://zenquotes.io/api/today"
    // fetch("https://zenquotes.io/api/today", { headers: { accept: "application/json" } })
    //   .then (response => response.json())
    //   .then((data) => {
    //    console.log(data)
    //   })
  }
