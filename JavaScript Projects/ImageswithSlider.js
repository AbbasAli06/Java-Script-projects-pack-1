    let slideIndex = 0;
    let slides = document.getElementsByClassName("carousel-slide");
    let slideWidth = slides[0].offsetWidth;

    function showSlide(n) {
        slideIndex = n;
        document.querySelector(".carousel-track").style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    }

    function plusSlides(n) {
        slideIndex += n;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        } else if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        document.querySelector(".carousel-track").style.transform = `translateX(${-slideIndex * slideWidth}px)`;
    }

    function currentSlide(n) {
        showSlide(n - 1);
    }

    // Show the first slide by default
    showSlide(0);