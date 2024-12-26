import "./image-carousel.css";
export default function carousel() {
  const forward = document.querySelector(".forward");
  const backward = document.querySelector(".backward");
  const slides = document.querySelector(".slides");
  slides.style.position = "absolute";
    // const currentPosDiv = document.querySelector('.currentpos');
  forward.addEventListener("click", () => {
    const currentPosition = slides.getBoundingClientRect();
      let currentLeft = parseInt(currentPosition.left);
    //   currentPosDiv.textContent = currentLeft;
    console.log(currentLeft);
    if (currentLeft >= -290) {
      slides.style.left = currentLeft - 360 + "px";
      console.log("forward");
      console.log(slides.style.left);
    } else {
      console.log("last image");
    }
  });
  backward.addEventListener("click", () => {
    const currentPosition = slides.getBoundingClientRect();
      let currentLeft = parseInt(currentPosition.left);
    //   currentPosDiv.textContent = currentLeft;
    console.log(currentLeft);
    if (currentLeft <790) {
      slides.style.left = currentLeft + 360 + "px";
      console.log(slides.style.right);
      console.log("backward");
    } else {
      console.log("First image");
    }
  });
}
