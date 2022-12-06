
  let imageURL = '';

  function initScribble() {
    let points = new Array();
    const colorInput = document.getElementById("color");
    const lineInput = document.getElementById("line-width");
    let painting = false;
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    // let imageURL;

    function startPosition(event) {
      const mouseX = event.clientX - canvas.getBoundingClientRect().left;
      const mouseY = event.clientY - canvas.getBoundingClientRect().top;
      painting = true;
      ctx.lineWidth = lineInput.value;
      ctx.strokeStyle = colorInput.value;
      ctx.beginPath();
      ctx.moveTo(mouseX, mouseY);
      points[points.length] = [mouseX, mouseY];

    }

    function finishedPosition(event) {
      painting = false;
      const s = JSON.stringify(points);
      localStorage['lines'] = s;
    }

    function draw(event) {
      if (!painting) return;
      const mouseX = event.clientX - canvas.getBoundingClientRect().left;
      const mouseY = event.clientY - canvas.getBoundingClientRect().top;
      ctx.lineTo(mouseX, mouseY);
      ctx.stroke();
      ctx.lineWidth = lineInput.value;
      ctx.strokeStyle = colorInput.value;
      ctx.lineJoin = ctx.lineCap = 'round'
      points[points.length] = [mouseX, mouseY];
    }


  // saves image
  document.getElementById('save').onclick = function () {
    imageURL = canvas.toDataURL('image/png');
    console.log(imageURL);
    // const file = dataURLtoBlob(imageURL);
    // const fd = new FormData();
    // fd.append("image", file);

    // $.ajax({
    //   url: `/posts/${"id"}?date=${params["post"]["date"]}`,
    //   type: "POST",
    //   data: fd,
    //   processData: false,
    //   contentType: false,
    // })
  }

  //clear canvas
  document.getElementById('clear').onclick = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  //loads it back
  document.getElementById('load').onclick = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const myImage = new Image();

    myImage.onload = function () {
      ctx.drawImage(myImage,0,0);
    }
    myImage.src = imageURL;
    // ctx.drawImage(myImage, 0, 0);
  }


//   window.onload = function(){
//     // make ajax call to get image data url
//     var request = new XMLHttpRequest();
//     request.open("GET", "imageURL.txt", true);
//     request.onreadystatechange = function(){
//         if (request.readyState == 4) {
//             if (request.status == 200) { // successful response
//                 loadCanvas(request.responseText);
//             }
//         }
//     };
//     request.send(null);
// };



  // function dataURLtoBlob(imageURL) {
  //   let byteString;
  //   if (imageURL.split(',')[0].indexOf('base64') >= 0)
  //       byteString = atob(imageURL.split(',')[1]);
  //   else
  //       byteString = unescape(imageURL.split(',')[1]);
  //   // separate out the mime component
  //   let mimeString = imageURL.split(',')[0].split(':')[1].split(';')[0];
  //   // console.log(mimeString);
  //   // write the bytes of the string to a typed array
  //   let ia = new Uint8Array(byteString.length);
  //   for (var i = 0; i < byteString.length; i++) {
  //       ia[i] = byteString.charCodeAt(i);
  //   }
  //   return new Blob([ia], {type:mimeString});
  //   }

  //   const binary = atob(imageURL.split(','[1]));
  //   const array = [];
  //   for (let i = 0; i< binary.length; i++) {
  //     array.push(binary.charCodeAt(i));
  //   }
  //   return new Blob([new Uint8Array(array)], {type: 'image/png'})
  // }
}

export { initScribble }
