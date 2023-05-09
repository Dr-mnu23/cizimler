/*
 * @name Temel Şekiller
 * @description Bu örnekler bir daire, kare, üçgen ve bir çiçek içerir.
 */
function setup() {
  // canvas oluştur
  createCanvas(720, 400);
  background(200);

  // Renk Ayarı
  fill(204, 101, 192, 127);
  stroke(127, 63, 120);

  // Dikdörtgen
  rect(40, 120, 120, 40);
  // elips
  ellipse(240, 240, 80, 80);
  // Üçgen
  triangle(300, 100, 320, 100, 310, 80);

  // Basit bir çiçek
  translate(580, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
}
