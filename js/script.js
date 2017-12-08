$(window).on("load", function() {

    // Load text from about file
    $('#includeAboutContent').load('about.html'); 

    // Hide drop down when it's clicked on
    $('#navbarCollapse').on('click', function() {
      $('#navbarCollapse').removeClass('show');
    });

    // Implement smooth scrolling for menu items
    $("nav ul li a[href^='#']").on('click', function(e) {
       e.preventDefault();
       var hash = this.hash;
       $('html, body').animate({
           scrollTop: $(hash).offset().top
         }, 500, function(){
           window.location.hash = hash;
         });
    });  

    // Unhide portfolio (after images fully loaded) and fade out spinner
    $('#portfolio').removeClass('hide');
    $('.loader').fadeOut('slow');
});
