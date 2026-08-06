// ===== CONFIG =====
const totalImages = 68;
const PASSWORD = "password"; // change this anytime

// ===== STATE =====
let currentIndex = 1;

// ===== ELEMENTS =====
const mainMenu = document.getElementById("mainMenu");
const viewBtn = document.getElementById("viewBtn");

const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");

// NEW (password)
const passwordPopup = document.getElementById("passwordPopup");
const passwordInput = document.getElementById("passwordInput");
const passwordConfirm = document.getElementById("passwordConfirm");
const closePassword = document.getElementById("closePassword");

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
window.addEventListener("load", () => {
  popup1.classList.remove("active");
  popup2.classList.remove("active");
  passwordPopup.classList.remove("active");
  gallery.classList.remove("active");
  viewer.classList.remove("active");

  bottomText.style.display = "none";
});

// ===== FLOW =====

// STEP 1: open PASSWORD popup first
viewBtn.onclick = () => {
  passwordPopup.classList.add("active");
};

// close password popup
closePassword.onclick = () => {
  passwordPopup.classList.remove("active");
};

// check password
passwordConfirm.onclick = () => {
  if (passwordInput.value === PASSWORD) {
    passwordPopup.classList.remove("active");
    popup1.classList.add("active");
    passwordInput.value = "";
  } else {
    passwordInput.value = "";
    passwordInput.placeholder = "Wrong password";
  }
};

// press Enter key for password
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    passwordConfirm.click();
  }
});

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
  mainMenu.style.display = "none";
  gallery.classList.add("active");
  bottomText.style.display = "block";

  gallery.innerHTML = "";

  for (let i = 1; i <= totalImages; i++) {
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

// ===== EXTRA =====
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    viewer.classList.remove("active");
  }
});

viewer.addEventListener("click", (e) => {
  if (e.target === viewer) {
    viewer.classList.remove("active");
  }
});
