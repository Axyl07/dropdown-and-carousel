import "./image-carousel.css";
export default function carousel() {


  // setInterval(() => {
  //   moveForward();
  // }, 5000);

  const forward = document.querySelector(".forward");
  const backward = document.querySelector(".backward");
  const slides = document.querySelector(".slides");
  const test = document.querySelector(".currentpos");
  const currentPosition = slides.getBoundingClientRect();
  let currentLeft = parseInt(currentPosition.left);
  // test.textContent = currentLeft;
  slides.style.left = currentLeft - 790 + "px";
  // test.textContent = slides.style.left;

  const circleBtns = document.querySelectorAll(".jumpCircles > input");
  console.log(circleBtns);
  //radio event listener
  circleBtns.forEach((button) => {
    button.addEventListener('click', () => {
      sliderJump();
    })
  })



  const sliderJump = function () {
    circleBtns.forEach((btn) => {
      if (btn.checked === true) {
        test.textContent = btn.id;
        const currentPosition = slides.getBoundingClientRect();
        let currentLeft = parseInt(currentPosition.left);
        slides.style.left = currentLeft - 790 + "px";
        let startingPosition = slides.style.left;
        test.textContent += " "+startingPosition;
        if (startingPosition==='0px') {
          if (btn.id==='two') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft - 360 + "px";
          }
          if (btn.id==='three') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft - 720 + "px";
          }
          if (btn.id==='four') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft - 1080 + "px";
          }
          if (btn.id==='five') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft - 1440 + "px";
          }
        }
        if (startingPosition==='-360px') {
          if (btn.id==='one') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft + 360 + "px";
          }
          if (btn.id==='three') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft - 360 + "px";
          }
          if (btn.id==='four') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft - 720 + "px";
          }
          if (btn.id==='five') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft - 1080 + "px";
          }
        }
        if (startingPosition==='-720px') {
          if (btn.id==='one') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft + 720 + "px";
          }
          if (btn.id==='two') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft + 360 + "px";
          }
          if (btn.id==='four') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft - 360 + "px";
          }
          if (btn.id==='five') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft - 720 + "px";
          }
        }
        if (startingPosition==='-1080px') {
          if (btn.id==='one') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft + 1080 + "px";
          }
          if (btn.id==='two') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft + 720 + "px";
          }
          if (btn.id==='three') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft + 360 + "px";
          }
          if (btn.id==='five') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft - 360 + "px";
          }
        }
        if (startingPosition==='-1440px') {
          if (btn.id==='one') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft + 1440 + "px";
          }
          if (btn.id==='two') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft + 1080 + "px";
          }
          if (btn.id==='three') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft + 720 + "px";
          }
          if (btn.id==='four') {
            let currentLeft = parseInt(slides.style.left);
            slides.style.left = currentLeft + 360 + "px";
          }
        }
  
      }
    });
    
  }
  sliderJump();

  const moveForward = function () {
    // const currentPosition = slides.getBoundingClientRect();
    let currentLeft = parseInt(slides.style.left);
    if (currentLeft >= -1080) {
      // test.textContent = currentLeft;
      slides.style.left = currentLeft - 360 + "px";
      console.log(currentLeft);
      test.textContent = slides.style.left;
    } else {
      console.log("lastt image");
    }
  };

  const moveBackward = function () {
    let currentLeft = parseInt(slides.style.left);
    if (currentLeft < 0) {
      // test.textContent = currentLeft;
      slides.style.left = currentLeft + 360 + "px";
      console.log(currentLeft);
      test.textContent = slides.style.left;
    } else console.log("first image");
  };

  forward.addEventListener("click", () => {
    moveForward();
  });
  backward.addEventListener("click", () => {
    moveBackward();
  });
}
