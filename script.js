let currentIndex = 1;
const totalImages = 20; // CHANGE THIS ONLY

// elements
const viewBtn = document.getElementById("viewBtn");
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const gallery = document.getElementById("gallery");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const closePopup2 = document.getElementById("closePopup2");
const confirmBtn = document.getElementById("confirmBtn");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeViewer = document.getElementById("closeViewer");

// ---- START CLEAN STATE ----
window.onload = () => {
  popup1.classList.remove("active");
  popup2.classList.remove("active");
  gallery.classList.remove("active");
  viewer.classList.remove("active");
};

// ---- FLOW ----
viewBtn.onclick = () => {
  popup1.classList.add("active");
};

yesBtn.onclick = () => {
  popup1.classList.remove("active");
  popup2.classList.add("active");
};

noBtn.onclick = () => {
  popup1.classList.remove("active");
};

closePopup2.onclick = () => {
  popup2.classList.remove("active");
};

confirmBtn.onclick = () => {
  popup2.classList.remove("active");
  showGallery();
};

// ---- GALLERY ----
function showGallery() {
  // HIDE MAIN MENU
  document.getElementById("mainMenu").style.display = "none";

  // SHOW GALLERY
  gallery.classList.add("active");
  document.getElementById("bottomText").style.display = "block";

  gallery.innerHTML = "";

  for (let i = 1; i <= totalImages; i++) {
    let box = document.createElement("div");
    box.className = "image-box";

    let img = document.createElement("img");
    img.src = i + ".jpg";
    img.onclick = () => openViewer(i);

    let label = document.createElement("p");
    label.innerText = i + ".jpg";

    box.appendChild(img);
    box.appendChild(label);
    gallery.appendChild(box);
  }
}
  gallery.classList.add("active");
  document.getElementById("bottomText").style.display = "block";

  gallery.innerHTML = ""; // prevent duplicates

  for (let i = 1; i <= totalImages; i++) {
    let box = document.createElement("div");
    box.className = "image-box";

    let img = document.createElement("img");
    img.src = i + ".jpg";

    img.onclick = () => openViewer(i);

    let label = document.createElement("p");
    label.innerText = i + ".jpg";

    box.appendChild(img);
    box.appendChild(label);
    gallery.appendChild(box);
  }
}

// ---- VIEWER ----
function openViewer(index) {
  currentIndex = index;
  viewer.classList.add("active");
  viewerImg.src = currentIndex + ".jpg";
}

closeViewer.onclick = () => {
  viewer.classList.remove("active");
};

nextBtn.onclick = () => {
  if (currentIndex < totalImages) {
    currentIndex++;
    viewerImg.src = currentIndex + ".jpg";
  }
};

prevBtn.onclick = () => {
  if (currentIndex > 1) {
    currentIndex--;
    viewerImg.src = currentIndex + ".jpg";
  }
};
