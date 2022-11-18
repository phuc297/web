var slides = document.querySelectorAll(".slider-item")
var prev = document.querySelector(".slider-btn-prev")
var next = document.querySelector(".slider-btn-next")

var currentSlide = 0;

var manualBtn = function(manual){
    slides.forEach(slide => {
        slide.classList.remove("active");
    });
    slides[manual].classList.add("active");
    slides[manual].classList.remove("left");
    slides[manual].classList.remove("right");
}



next.addEventListener("click", function(){
    currentSlide++;
    if(currentSlide>=slides.length){
        currentSlide = 0;
        slides.forEach(slide => {
            if(slides[currentSlide].classList.contains("left"))
                slides[slide].classList.remove("left");
            slides[slide].classList.add("right");
        });
    }
    manualBtn(currentSlide)
    console.log("currentSlide: "+ currentSlide)
    console.log("slides length: "+ slides.length)
})

prev.addEventListener("click", function(){
    if(currentSlide>1)
        slides[currentSlide].classList.add("right");
    if(currentSlide==1){
        currentSlide=slides.length
        slides.forEach(slide => {
            if(slides[currentSlide].classList.contains("right"))
                slide[slide].classList.remove("right");
            slides[slide].classList.add("left");
        });
    }
    currentSlide--;
    manualBtn(currentSlide)
    console.log("currentSlide: "+ currentSlide)
    console.log("slides length: "+ slides.length)
})

