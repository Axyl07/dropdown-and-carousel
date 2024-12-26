export default function carousel() {
 

    const forward = document.querySelector('.forward');
    const backward = document.querySelector('.backward');
    const slides = document.querySelector('.slides');
    slides.style.position = 'absolute';
    
    
    forward.addEventListener('click', () => {
        const currentPosition = slides.getBoundingClientRect();
        let currentLeft = parseInt(currentPosition.left);
        console.log(currentLeft);
        slides.style.left = currentLeft - 360 + 'px';
        console.log('forward');
        console.log(slides.style.left)
    })
    backward.addEventListener('click', () => {
        const currentPosition = slides.getBoundingClientRect();
        let currentLeft = parseInt(currentPosition.left);
        console.log(currentLeft);
        slides.style.left = currentLeft + 360 + 'px';
        console.log(slides.style.right);
        console.log('backward');


    })
}