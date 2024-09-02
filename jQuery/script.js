$(document).ready(function() {
    let slideIndex = 0;

    function showSlides(n) {
        let slides = $('.slides img');
        if (n >= slides.length) { slideIndex = 0; }
        if (n < 0) { slideIndex = slides.length - 1; }
        
        slides.each(function(index) {
            $(this).css('display', index === slideIndex ? 'block' : 'none');
        });
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    $('.prev').click(function() {
        plusSlides(-1);
    });

    $('.next').click(function() {
        plusSlides(1);
    });

    showSlides(slideIndex); // Mostrar a primeira imagem
});
