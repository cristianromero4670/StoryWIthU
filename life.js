const photoItems = [
  {
    url: "img/alberca.jpg",
    description: "Momento especial en la alberca."
  },
  {
    url: "img/atardecer.jpg",
    description: "Atardecer juntos, lleno de calma."
  },
  {
    url: "img/IMG_4958.jpg",
    description: "Recuerdo favorito capturado en IMG_4958."
  },
  {
    url: "img/IMG_4984.jpg",
    description: "Detalle bonito de nuestro día (IMG_4984)."
  },
  {
    url: "img/IMG_5022.jpg",
    description: "Sonrisas compartidas en IMG_5022."
  },
  {
    url: "img/IMG_5054.jpg",
    description: "Cierre perfecto del día en IMG_5054."
  }
];

const collage = document.querySelector("#collage");
const revealHint = document.querySelector("#reveal-hint");
const hero = document.querySelector(".hero");
const preview = document.querySelector("#photo-preview");
const previewImage = document.querySelector("#preview-image");
const previewDescription = document.querySelector("#preview-description");

function renderMinimalMosaic() {
  collage.innerHTML = "";

  for (let i = 0; i < 28; i += 1) {
    const tile = document.createElement("div");
    const colSpan = [2, 3, 4][i % 3];
    const rowSpan = [2, 3, 2, 4][i % 4];
    const item = photoItems[i % photoItems.length];

    tile.className = "photo";
    tile.style.gridColumn = `span ${colSpan}`;
    tile.style.gridRow = `span ${rowSpan}`;
    tile.style.backgroundImage = `url('${item.url}')`;

    tile.addEventListener("click", (event) => {
      if (!document.body.classList.contains("is-revealed")) return;
      event.stopPropagation();
      showPreview(item.url, item.description);
    });

    collage.append(tile);
  }
}

function showPreview(url, description) {
  previewImage.src = url;
  previewDescription.textContent = description;
  preview.classList.add("is-visible");
}

function hidePreview() {
  preview.classList.remove("is-visible");
}

function toggleReveal(event) {
  if (event.target.closest(".photo-preview")) return;

  const revealed = document.body.classList.toggle("is-revealed");
  revealHint.textContent = revealed
    ? "Vista iluminada activa. Haz click en una foto para verla completa."
    : "Tip: haz click para iluminar el mosaico y luego haz click en una foto para verla completa.";

  if (!revealed) hidePreview();
}

hero.addEventListener("click", toggleReveal);
preview.addEventListener("click", (event) => event.stopPropagation());
document.addEventListener("click", (event) => {
  if (!event.target.closest(".photo") && !event.target.closest(".photo-preview")) {
    hidePreview();
  }
});

renderMinimalMosaic();
