// ===== CONFIG =====
const totalImages = 59; // change this only

// ===== STATE =====
let currentIndex = 1;

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

// ===== FORCE CLEAN START =====
window.addEventListener("load", () => {
  popup1.classList.remove("active");
  popup2.classList.remove("active");
  gallery.classList.remove("active");
  viewer.classList.remove("active");

  bottomText.style.display = "none";
});

// ===== FLOW =====

// open first popup
viewBtn.onclick = () => {
  popup1.classList.add("active");
};

// popup1 -> popup2
yesBtn.onclick = () => {
  popup1.classList.remove("active");
  popup2.classList.add("active");
};

// close popup1
noBtn.onclick = () => {
  popup1.classList.remove("active");
};

// close popup2
closePopup2.onclick = () => {
  popup2.classList.remove("active");
};

// confirm -> show gallery
confirmBtn.onclick = () => {
  popup2.classList.remove("active");
  openGallery();
};

// ===== GALLERY =====
function openGallery() {
  // hide menu
  mainMenu.style.display = "none";

  // show gallery
  gallery.classList.add("active");
  bottomText.style.display = "block";

  // clear old images (important)
  gallery.innerHTML = "";

  for (let i = 1; i <= totalImages; i++) {
    const box = document.createElement("div");
    box.className = "image-box";

    const img = document.createElement("img");
    img.src = i + ".jpg";

    img.onclick = () => {
      openViewer(i);
    };

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

// close viewer
closeViewerBtn.onclick = () => {
  viewer.classList.remove("active");
};

// next image
nextBtn.onclick = () => {
  if (currentIndex < totalImages) {
    currentIndex++;
    updateViewer();
  }
};

// previous image
prevBtn.onclick = () => {
  if (currentIndex > 1) {
    currentIndex--;
    updateViewer();
  }
};

// ===== EXTRA (makes it feel better) =====

// ESC key closes viewer
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    viewer.classList.remove("active");
  }
});

// click outside image closes viewer
viewer.addEventListener("click", (e) => {
  if (e.target === viewer) {
    viewer.classList.remove("active");
  }
});
