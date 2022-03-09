// Basic initialization is like this:
// $('.your-class').slick();

// I added some other properties to customize my slider
// Play around with the numbers and stuff to see


jQuery(document).ready(function(){
  jQuery('.slick-carousel').slick({
    infinite: true,
    autoplay:true,
    autoplaySpeed:1500,
    slidesToShow: 1, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: false, // Adds arrows to sides of slider
    dots: true // Adds the dots on the bottom
  });
  jQuery(".backtotop a").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery("#header").offset().top
    }, 2000);
});
});

