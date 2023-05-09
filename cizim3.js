/*
  * @name Kalıpları
  * @description Farenin hızına tepki veren bir yazılım aracıyla çizim yapmak için imleci resmin üzerine getirin.
  */
function setup() {
  createCanvas(710, 400);
  background(102);
}

function draw() {
//variableEllipse() yöntemini çağırın ve ona geçerli fare konumu ve önceki fare konumu için parametreleri gönderin
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

// Bu program için özel olarak variableEllipse() basit yöntemi oluşturuldu. 
// Farenin hızını hesaplar ve fare yavaş hareket ediyorsa küçük bir elips, 
// hızlı hareket ediyorsa büyük bir elips çizer.

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
}
