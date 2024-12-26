import "./image-carousel.css";
export default function carousel() {

        // const c1 = document.querySelector('#one');
        // c1.style.backgroundColor = 'black';



    setInterval(() => {
    moveForward()
 }, 5000);
    
    
  const forward = document.querySelector(".forward");
  const backward = document.querySelector(".backward");
    const slides = document.querySelector(".slides");
    const test = document.querySelector('.currentpos');
    const currentPosition = slides.getBoundingClientRect();
    let currentLeft = parseInt(currentPosition.left);
    test.textContent = currentLeft;
    slides.style.left = currentLeft - 790 + 'px';
    test.textContent = slides.style.left


    const moveForward = function () {

      // const currentPosition = slides.getBoundingClientRect();
      let currentLeft = parseInt(slides.style.left);
      if (currentLeft >= -1080) {
          test.textContent = currentLeft;
          slides.style.left = currentLeft - 360 + 'px';
          console.log(currentLeft);
          test.textContent = currentLeft;  
      } else {
          console.log('lastt image');
      }
  };

  const moveBackward = function () { 
    let currentLeft = parseInt(slides.style.left);
      if (currentLeft < 0) {
          test.textContent = currentLeft;
          slides.style.left = currentLeft + 360 + 'px';
          console.log(currentLeft);
          test.textContent = currentLeft;
      } else console.log('first image');
  };
  forward.addEventListener("click", () => {
    moveForward();
  });
  backward.addEventListener("click", () => {
    moveBackward();
  });
}


const circleBtns = document.querySelectorAll('.jumpCircles > button');
circleBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.style.backgroundColor!='black') {
      btn.style.backgroundColor = 'black';
      
    } else {
      btn.style.backgroundColor = 'white';
    }
  
    
  })
})
