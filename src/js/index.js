document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const message = "Eu te amo";

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function drawHeart(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y + size / 2);
    ctx.bezierCurveTo(x, y, x - size / 2, y - size / 2, x - size, y - size / 2);
    ctx.bezierCurveTo(
      x - 1.5 * size,
      y - size / 2,
      x - 1.5 * size,
      y + size / 2,
      x - 1.5 * size,
      y + size / 2
    );
    ctx.bezierCurveTo(
      x - 1.5 * size,
      y + size,
      x - size,
      y + 1.5 * size,
      x,
      y + 2 * size
    );
    ctx.bezierCurveTo(
      x + size,
      y + 1.5 * size,
      x + 1.5 * size,
      y + size,
      x + 1.5 * size,
      y + size / 2
    );
    ctx.bezierCurveTo(
      x + 1.5 * size,
      y + size / 2,
      x + 1.5 * size,
      y - size / 2,
      x + size,
      y - size / 2
    );
    ctx.bezierCurveTo(x + size / 2, y - size / 2, x, y, x, y + size / 2);
    ctx.fillStyle = "#ff4136";
    ctx.fill();
  }

  function showMessage(x, y) {
    ctx.font = "bold 30px Arial";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    ctx.fillText(message, x, y);
  }

  const centerHeartSize = 150;
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;

  drawHeart(centerX, centerY, centerHeartSize);

  canvas.addEventListener("click", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (
      Math.abs(mouseX - centerX) < centerHeartSize / 2 &&
      Math.abs(mouseY - centerY) < centerHeartSize / 2
    ) {
      showMessage(centerX, centerY);
    }
  });
});
