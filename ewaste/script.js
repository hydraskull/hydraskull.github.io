$(document).ready(function() {
    // owl carousel
    $("#carousel-container").owlCarousel({
        autoPlay : false,
        navigation: true,
        goToFirstSpeed : 5000,
        paginationSpeed: 150,
        singleItem : true,
        responsive: true,
        navigationText: ["Prev", "Next"],
    });

    //Preloader
    $(window).load(function(){
        $('#preloader').fadeOut('slow',function(){
            $(this).remove();
        });
    });
});

smoothScroll.init({
    speed: 750,
    easing: 'easeInOutCubic',
    updateURL: false,
    offset: 0,
});