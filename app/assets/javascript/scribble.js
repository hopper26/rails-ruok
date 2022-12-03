
  let points = new Array();
  colorInput = document.getElementById("color");
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
  ctx.lineWidth = 5;
  ctx.strokeStyle = colorInput.value;
  ctx.lineJoin = ctx.lineCap = 'round'
  points[points.length] = [mouseX, mouseY];
}
