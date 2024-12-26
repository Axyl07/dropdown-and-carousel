import "./image-carousel.css";
export default function carousel() {
 setInterval(() => {
    moveForward()
 }, 5000);
    
  const forward = document.querySelector(".forward");
  const backward = document.querySelector(".backward");
  const slides = document.querySelector(".slides");

  const moveForward = function () {
    const currentPosition = slides.getBoundingClientRect();
    let currentLeft = parseInt(currentPosition.left);
    console.log(currentLeft);
    if (currentLeft >= -290) {
      slides.style.left = currentLeft - 360 + "px";
      console.log("forward");
      console.log(slides.style.left);
    } else {
      console.log("last image");
    }
  };

  const moveBackward = function () {
    const currentPosition = slides.getBoundingClientRect();
    let currentLeft = parseInt(currentPosition.left);
    console.log(currentLeft);
    if (currentLeft < 790) {
      slides.style.left = currentLeft + 360 + "px";
      console.log(slides.style.right);
      console.log("backward");
    } else {
      console.log("First image");
    }
  };
  forward.addEventListener("click", () => {
    moveForward();
  });
  backward.addEventListener("click", () => {
    moveBackward();
  });
}
