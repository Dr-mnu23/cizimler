/*
  * @name Darbeler
  * @description Yazılımı çizim araçları, çizilmiş hareketlerden bağımsız olarak bir ritim izleyebilir veya kurallara uyabilir. 
  * Bu, ressamın görüntünün bazı yönlerini kontrol ettiği ve yazılımın diğerlerini kontrol ettiği bir ortak çizim biçimidir.
  */
let angle = 0;

function setup() {
  createCanvas(710, 400);
  background(102);
  noStroke();
  fill(0, 102);
}

function draw() {
  // Sadece mouse basılıyken çiz
  if (mouseIsPressed === true) {
    angle += 5;
    let val = cos(radians(angle)) * 12.0;
    for (let a = 0; a < 360; a += 75) {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      fill(0);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(255);
    ellipse(mouseX, mouseY, 2, 2);
  }
}
