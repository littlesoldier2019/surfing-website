/*let slideIndex = 1;
showSlides(slideIndex);*/


//================ Next/previous controls =============
/*function navSlides(n) {
    showSlides(slideIndex += n);
}*/


//================ Thumbnail image controls ===========

/*function thumbnailSlide(n) {
    showSlides(slideIndex = n);
}*/


/*function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('banner_slide--Imgcontent');
    let rectangle = document.getElementsByClassName('dot');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < rectangle.length; i++) {
        rectangle[i].className = rectangle[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    rectangle[slideIndex - 1].className += " active";
}
showSlides() */

//================= Auto changing of slides ====================
let slideIndex = 0;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName('banner_slide--Imgcontent');
    let rectangle = document.getElementsByClassName('rectangle');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < rectangle.length; i++) {
        rectangle[i].className = rectangle[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    rectangle[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}
showSlides();