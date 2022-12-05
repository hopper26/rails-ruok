
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
    let imageURL;

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
  }

  //clear canvas
  document.getElementById('clear').onclick = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  //loads it back
  document.getElementById('load').onclick = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const myImage = new Image();
    myImage.src = imageURL;
    ctx.drawImage(myImage, 0, 0);
  }
}

export { initScribble }
