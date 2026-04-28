// ===== CONFIG =====
const TOTAL_IMAGES = 59; // <<< CHANGE THIS WHEN YOU ADD MORE

// ===== STATE =====
let currentIndex = 0;

// ===== ELEMENTS =====
const mainMenu = document.getElementById("mainMenu");
const viewBtn = document.getElementById("viewBtn");

const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const closePopup2 = document.getElementById("closePopup2");
const confirmBtn = document.getElementById("confirmBtn");

const gallery = document.getElementById("gallery");
const bottomText = document.getElementById("bottomText");

const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");
const closeViewerBtn = document.getElementById("closeViewer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// ===== START CLEAN =====
window.onload = () => {
  popup1.classList.remove("active");
  popup2.classList.remove("active");
  gallery.classList.remove("active");
  viewer.classList.remove("active");

  bottomText.style.display = "none";
};

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
  openGallery();
};

// ===== GALLERY =====
function openGallery() {
  mainMenu.style.display = "none";
  gallery.classList.add("active");
  bottomText.style.display = "block";

  gallery.innerHTML = "";

  for (let i = 1; i <= TOTAL_IMAGES; i++) {
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
function openViewer(index) {
  currentIndex = index;
  viewer.classList.add("active");
  updateViewer();
}

function updateViewer() {
  viewerImg.src = currentIndex + ".jpg";
}

closeViewerBtn.onclick = () => {
  viewer.classList.remove("active");
};

nextBtn.onclick = () => {
  if (currentIndex < TOTAL_IMAGES) {
    currentIndex++;
    updateViewer();
  }
};

prevBtn.onclick = () => {
  if (currentIndex > 1) {
    currentIndex--;
    updateViewer();
  }
};

// ===== EXTRA =====
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") viewer.classList.remove("active");
});

viewer.addEventListener("click", (e) => {
  if (e.target === viewer) viewer.classList.remove("active");
});
