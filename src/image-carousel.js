export default function carousel() {
    const forward = document.querySelector('.forward');
    const backward = document.querySelector('.backward');
    const slides = document.querySelector('.slides');
    forward.addEventListener('click', () => {
        slides.style.position = 'absolute';
        slides.style.left = '360px';
        console.log('forward');
    })
    backward.addEventListener('click', () => {
        slides.style.transform = 'translateX(360px)';
        console.log('backward');
    })
}