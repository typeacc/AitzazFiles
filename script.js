// ===== CONFIG =====
const TOTAL = 59; // <<< change this if you add more images

// ===== STATE =====
let current = 1;

// ===== ELEMENTS =====
const viewBtn = document.getElementById("viewBtn");
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const gallery = document.getElementById("gallery");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");

// ===== FLOW =====
viewBtn.onclick = () => popup1.classList.add("active");

yesBtn.onclick = () => {
  popup1.classList.remove("active");
  popup2.classList.add("active");
};

noBtn.onclick = () => popup1.classList.remove("active");

closePopup2.onclick = () => popup2.classList.remove("active");

confirmBtn.onclick = () => {
  popup2.classList.remove("active");
  startGallery();
};

// ===== GALLERY =====
function startGallery() {
  document.getElementById("mainMenu").style.display = "none";
  gallery.classList.add("active");
  bottomText.style.display = "block";

  for (let i = 1; i <= TOTAL; i++) {
    const box = document.createElement("div");
    box.className = "image-box";

    const img = document.createElement("img");
    img.src = i + ".jpg";

    img.onclick = () => openViewer(i);

    const label = document.createElement("p");
    label.textContent = i + ".jpg";

    box.appendChild(img);
    box.appendChild(label);
    gallery.appendChild(box);
  }
}

// ===== VIEWER =====
function openViewer(i) {
  current = i;
  viewer.classList.add("active");
  update();
}

function update() {
  viewerImg.src = current + ".jpg";
}

closeViewer.onclick = () => viewer.classList.remove("active");

nextBtn.onclick = () => {
  if (current < TOTAL) {
    current++;
    update();
  }
};

prevBtn.onclick = () => {
  if (current > 1) {
    current--;
    update();
  }
};
