let responsibility = false;
let currentIndex = 1;
const totalImages = 59; // 🔥 CHANGE THIS to how many images you uploaded

const viewBtn = document.getElementById("viewBtn");
const popup1 = document.getElementById("popup1");
const popup2 = document.getElementById("popup2");
const gallery = document.getElementById("gallery");
const viewer = document.getElementById("viewer");
const viewerImg = document.getElementById("viewerImg");

viewBtn.onclick = () => popup1.classList.remove("hidden");

document.getElementById("yesBtn").onclick = () => {
  popup1.classList.add("hidden");
  popup2.classList.remove("hidden");
};

function closePopup(id) {
  document.getElementById(id).classList.add("hidden");
}

function setResponsibility(val) {
  responsibility = val;
}

document.getElementById("confirmBtn").onclick = () => {
  popup2.classList.add("hidden");
  showGallery();
};

function showGallery() {
  gallery.classList.remove("hidden");
  document.getElementById("bottomText").classList.remove("hidden");

  for (let i = 1; i <= totalImages; i++) {
    let box = document.createElement("div");
    box.className = "image-box";

    let img = document.createElement("img");
    img.src = `${i}.jpg`;
    img.onclick = () => openViewer(i);

    let label = document.createElement("p");
    label.innerText = `${i}.jpg`;

    box.appendChild(img);
    box.appendChild(label);
    gallery.appendChild(box);
  }
}

function openViewer(index) {
  currentIndex = index;
  viewer.classList.remove("hidden");
  viewerImg.src = `${currentIndex}.jpg`;
}

function closeViewer() {
  viewer.classList.add("hidden");
}

function nextImage() {
  if (currentIndex < totalImages) {
    currentIndex++;
    viewerImg.src = `${currentIndex}.jpg`;
  }
}

function prevImage() {
  if (currentIndex > 1) {
    currentIndex--;
    viewerImg.src = `${currentIndex}.jpg`;
  }
}
