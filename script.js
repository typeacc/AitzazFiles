// ===== STATE =====
let currentIndex = 1;
let images = []; // stores all valid images

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

// ===== AUTO LOAD IMAGES =====
function loadImages() {
  return new Promise((resolve) => {
    let maxCheck = 500; // will check up to 500.jpg (more than enough)

    let loaded = 0;

    for (let i = 1; i <= maxCheck; i++) {
      const img = new Image();
      img.src = i + ".jpg";

      img.onload = () => {
        images.push(i);
        loaded++;
      };

      img.onerror = () => {
        loaded++;
      };

      if (i === maxCheck) {
        // small delay to ensure all async loads finish
        setTimeout(() => resolve(), 300);
      }
    }
  });
}

// ===== GALLERY =====
async function openGallery() {
  mainMenu.style.display = "none";
  gallery.classList.add("active");
  bottomText.style.display = "block";

  gallery.innerHTML = [];

  images = [];
  await loadImages();

  images.forEach((num) => {
    const box = document.createElement("div");
    box.className = "image-box";

    const img = document.createElement("img");
    img.src = num + ".jpg";

    img.onclick = () => openViewer(num);

    const label = document.createElement("p");
    label.textContent = num + ".jpg";

    box.appendChild(img);
    box.appendChild(label);
    gallery.appendChild(box);
  });
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
