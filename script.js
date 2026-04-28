// ===== STATE =====
let currentIndex = 0;
let images = [];

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

// ===== CLEAN START =====
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

// ===== GALLERY (SIMPLE + RELIABLE) =====
function openGallery() {
  mainMenu.style.display = "none";
  gallery.classList.add("active");
  bottomText.style.display = "block";

  gallery.innerHTML = "";
  images = [];

  const maxImages = 200; // just a safe limit

  for (let i = 1; i <= maxImages; i++) {
    const img = new Image();
    img.src = i + ".jpg";

    img.onload = () => {
      images.push(i);

      const box = document.createElement("div");
      box.className = "image-box";

      const imageEl = document.createElement("img");
      imageEl.src = i + ".jpg";

      imageEl.onclick = () => openViewer(i);

      const label = document.createElement("p");
      label.textContent = i + ".jpg";

      box.appendChild(imageEl);
      box.appendChild(label);
      gallery.appendChild(box);
    };
  }
}

// ===== VIEWER =====
function openViewer(index) {
  currentIndex = images.indexOf(index);
  viewer.classList.add("active");
  updateViewer();
}

function updateViewer() {
  viewerImg.src = images[currentIndex] + ".jpg";
}

closeViewerBtn.onclick = () => {
  viewer.classList.remove("active");
};

nextBtn.onclick = () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateViewer();
  }
};

prevBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateViewer();
  }
};

// ===== EXTRA UX =====
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") viewer.classList.remove("active");
});

viewer.addEventListener("click", (e) => {
  if (e.target === viewer) viewer.classList.remove("active");
});
