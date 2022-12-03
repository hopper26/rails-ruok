
  let points = new Array();
  colorInput = document.getElementById("color");
  lineInput = document.getElementById("line-width");
  let painting = false;
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 600;
  canvas.height = 600;
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);




function startPosition(event) {
  const mouseX = event.clientX - canvas.getBoundingClientRect().left;
  const mouseY = event.clientY - canvas.getBoundingClientRect().top;
  painting = true;
  ctx.beginPath();
  ctx.moveTo(mouseX, mouseY);
  points[points.length] = [mouseX, mouseY];
  // draw(event);
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
  // var win = window.open();
  // if(navigator.userAgent.indexOf("Chrome") == -1 ) {
  //   win.location = imageURL;
  // } else{
  //   canvas.write('<iframe src="' + imageURL + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')
  // }
  myImage = new Image();
  myImage.src = imageURL;
  ctx.drawImage(myImage, 0, 0);
}
