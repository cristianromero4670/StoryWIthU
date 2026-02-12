const defaultPhotos = [
  "img/alberca.jpg",
  "img/atardecer.jpg",
  "img/IMG_4958.jpg",
  "img/IMG_4984.jpg",
  "img/IMG_5022.jpg",
  "img/IMG_5054.jpg",
];

const collage = document.querySelector("#collage");
const revealHint = document.querySelector("#reveal-hint");
const hero = document.querySelector(".hero");

function renderMinimalMosaic() {
  collage.innerHTML = "";

  for (let i = 0; i < 28; i += 1) {
    const tile = document.createElement("div");
    const colSpan = [2, 3, 4][i % 3];
    const rowSpan = [2, 3, 2, 4][i % 4];

    tile.className = "photo";
    tile.style.gridColumn = `span ${colSpan}`;
    tile.style.gridRow = `span ${rowSpan}`;
    tile.style.backgroundImage = `url('${defaultPhotos[i % defaultPhotos.length]}')`;
    collage.append(tile);
  }
}

function toggleReveal() {
  const revealed = document.body.classList.toggle("is-revealed");
  revealHint.textContent = revealed
    ? "Vista iluminada activa. Haz click de nuevo para volver al hero."
    : "Tip: haz click en la pantalla para iluminar el mosaico.";
}

hero.addEventListener("click", toggleReveal);
renderMinimalMosaic();