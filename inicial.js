let slideIndex = 0;

function moveSlider(n) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    slideIndex = (slideIndex + n + totalSlides) % totalSlides;

    const slideWidth = slides[0].clientWidth;
    const offset = -slideIndex * slideWidth;

    document.querySelector('.slider').style.transform = `translateX(${offset}px)`;
}

moveSlider(0); // inicializa o slider
