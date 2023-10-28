const fullPhoto = document.querySelector('.full_photo img');
const gallery = document.querySelectorAll('.gallery img');
const leftBtn = document.querySelector('.left_btn');
const rightBtn = document.querySelector('.right_btn');

let currentIndex = 1;

function updateImage(index) {
  fullPhoto.src = gallery[index].src;
}
updateImage(currentIndex);

gallery.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    updateImage(currentIndex);
  });
});

rightBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % gallery.length;
  updateImage(currentIndex);
});

leftBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
  updateImage(currentIndex);
});

