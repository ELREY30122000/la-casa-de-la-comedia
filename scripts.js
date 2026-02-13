console.log("Página cargada correctamente");

const modal = document.getElementById("artistModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".modal-close");
const nextBtn = document.querySelector(".modal-next");
const prevBtn = document.querySelector(".modal-prev");
const overlay = document.querySelector(".modal-overlay");

let currentImages = [];
let currentIndex = 0;

/* GALERÍAS POR ARTISTA (usa tus imágenes reales) */
const galleries = {
  0: [
    "images/Xiomy Kanashiro/Xiomy1.png",
    "images/Xiomy Kanashiro/Xiomy2.png",
    "images/Xiomy Kanashiro/Xiomy3.png",
    "images/Xiomy Kanashiro/Xiomy4.png",
    "images/Xiomy Kanashiro/Xiomy5.png",
  ],

  1: [
    "images/sapito/1.jpg",
    "images/sapito/2.jpg",
    "images/sapito/3.jpg"
  ],

  2: [
    "images/jefferson/1.jpg",
    "images/jefferson/2.jpg",
    "images/jefferson/3.jpg"
  ],

  3: [
    "images/luigui/1.jpg",
    "images/luigui/2.jpg"
  ],

  4: [
    "images/shirley/1.jpg",
    "images/shirley/2.jpg",
    "images/shirley/3.jpg"
  ],

  5: [
    "images/dayanita/1.jpg",
    "images/dayanita/2.jpg"
  ],

  6: [
    "images/flautin/1.jpg",
    "images/flautin/2.jpg"
  ],

  7: [
    "images/lisandra/1.jpg",
    "images/lisandra/2.jpg",
    "images/lisandra/3.jpg"
  ],

  8: [
    "images/frejolito/1.jpg",
    "images/frejolito/2.jpg",
    "images/frejolito/3.jpg"
  ],

  9: [
    "images/jofresito/1.jpg",
    "images/jofresito/2.jpg"
  ]
};

/* CLIC EN ARTISTA */
document.querySelectorAll(".artist").forEach((artist, index) => {
  artist.addEventListener("click", () => {
    currentImages = galleries[index];
    currentIndex = 0;
    modalImg.src = currentImages[currentIndex];
    modal.style.display = "block";
  });
});

/* SIGUIENTE */
nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  modalImg.src = currentImages[currentIndex];
};

/* ANTERIOR */
prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  modalImg.src = currentImages[currentIndex];
};

/* CERRAR */
closeBtn.onclick = overlay.onclick = () => {
  modal.style.display = "none";
};
