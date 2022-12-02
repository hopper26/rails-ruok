const points = new Array(),
  colorInput = document.getElementById("color");

  function startPosition(event) {
    const mouseX = event.pageX - canvas.offsetLeft;
    const mouseY = event.pageY - canvas.offsetTop;
    painting = true;
    ctx.beginPath();
    ctx.moveTo(mouseX, mouseY);
    points[points.length] = [mouseX, mouseY];
    // draw(event);
  }

  function finsihedPosition(event) {
    painting = false;
    const s = JSON.stringify(points);
    localStorage['lines'] = s;
  }

  function draw(event) {
    if (!painting) return;
    const mouseX = event.pageX - canvas.offsetLeft;
    const mouseY = event.pageY - canvas.offsetTop;
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
    ctx.lineWidth = 5;
    ctx.strokeStyle = colorInput.value;
    ctx.lineJoin = ctx.lineCap = 'round'
    points[points.length] = [mouseX, mouseY];
  }

  let painting = false;
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finsihedPosition);
  canvas.addEventListener("mousemove", draw);
