let currentIndex = 1;
const totalImages = 59; // ONLY thing you change

// elements
const viewBtn = document.getElementById("viewBtn");
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const gallery = document.getElementById("gallery");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");

// buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const closePopup2 = document.getElementById("closePopup2");
const confirmBtn = document.getElementById("confirmBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeViewer = document.getElementById("closeViewer");

// FLOW

viewBtn.onclick = () => {
  popup1.classList.remove("hidden");
};

yesBtn.onclick = () => {
  popup1.classList.add("hidden");
  popup2.classList.remove("hidden");
};

noBtn.onclick = () => {
  popup1.classList.add("hidden");
};

closePopup2.onclick = () => {
  popup2.classList.add("hidden");
};

confirmBtn.onclick = () => {
  popup2.classList.add("hidden");
  showGallery();
};

// GALLERY

function showGallery() {
  gallery.classList.remove("hidden");
  document.getElementById("bottomText").classList.remove("hidden");

  for (let i = 1; i <= totalImages; i++) {
    let box = document.createElement("div");
    box.className = "image-box";

    let img = document.createElement("img");
    img.src = i + ".jpg";

    img.onclick = () => {
      openViewer(i);
    };

    let label = document.createElement("p");
    label.innerText = i + ".jpg";

    box.appendChild(img);
    box.appendChild(label);
    gallery.appendChild(box);
  }
}

// VIEWER

function openViewer(index) {
  currentIndex = index;
  viewer.classList.remove("hidden");
  viewerImg.src = currentIndex + ".jpg";
}

closeViewer.onclick = () => {
  viewer.classList.add("hidden");
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
