const photoItems = [
  {
    url: "img/alberca.jpg",
    description: "Una prueba de que podemos aparentar ser solo amigos.",
    spotify: "https://open.spotify.com/embed/track/4qUBWszQ0OOSVw2ik497YS?utm_source=generator"
  },
  {
    url: "img/atardecer.jpg",
    description: "Asi se siente la vida desde que te conoci Reny",
    spotify: "https://open.spotify.com/embed/track/4pmb0BSHAGxaHPMd8aFSMk?utm_source=generator"
  },
  {
    url: "img/IMG_4958.jpg",
    description: "que lindo se siente haberte conocido, coincidimos en un dia cualquiera",
    spotify: "https://open.spotify.com/embed/track/2a0ckSGLnsGThrwXMPuxCQ?utm_source=generator"
  },
  {
    url: "img/IMG_4984.jpg",
    description: "Tienes diferentes formas de marcarme en mi vida",
    spotify: "https://open.spotify.com/embed/track/2ECSDcH0Fk1yRO5KkVZwKn?utm_source=generator"
  },
  {
    url: "img/IMG_5022.jpg",
    description: "ya me lo habia acabado para cuanbdo tome la foto, siempre sabes que me gusta jaja",
    spotify: "https://open.spotify.com/embed/track/2GZmcIwvFeu3NgKu1HJL4u?utm_source=generator"
  },
  {
    url: "img/IMG_5054.jpg",
    description: "cada cosa que hacemos jutos es un recuerdo que me gusta guardar",
    spotify: "https://open.spotify.com/embed/track/5SEyiGqIMeZcFpC5ycODJc?utm_source=generator"
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