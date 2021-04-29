var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});


$('.slider-for').slick({  /* big images */
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false, 
  fade: true,
  asNavFor: '.slider-nav'  /* will be changed by clicking small images */
});
$('.slider-nav').slick({   /* small images */
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',  
  dots: false,
  vertical: true,
  verticalSwiping: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        vertical: false,
        verticalSwiping: false,
        dots: true,
        arrows: true
      }
    }
  ]
});
