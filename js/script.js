// Window Load screen

$(window).on('load', function () {

    // Loading Page
    $(".loader").fadeOut(500,function(){
        $(".spinner").delay(1000).fadeOut(500);
    });
    $("body").css("overflow-y", "auto");

    // Animation Page
    AOS.init();

});

$(document).ready(function () {

    // Click Open Nav In Mobile
    $(document).on("click", ".click-nav, .overlay, .modal-country",function() {
        $(".handle").toggleClass("closed");
        $("nav").toggleClass("back");
        $(".overlay-fixed").toggleClass("back");
        $("nav li").toggleClass("animSlideIn");
        $("body").toggleClass("overflow-hidden");
    });

    // Click Open Search In Mobile
    $(document).on("click", ".open-search",function() {
        $(".form-search").toggleClass("showing");
        $(".handle").toggleClass("closed");
        $("nav").toggleClass("back");
        $(".overlay-fixed").toggleClass("back");
    });
    // Click Open Search In Mobile
    $(document).on("click", ".overlay-absolute",function() {
        $(".form-search").toggleClass("showing");
        $("body").toggleClass("overflow-hidden");
    });

    // Slider Skills
    $('#sliderHome').owlCarousel({
        loop:true,
        margin:5,
        center:false,
        autoplay:true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 3000,
        pagination : false,
        nav:true,
        navText: [
            '<i class="icon-arrow"></i>',
            '<i class="icon-arrow"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            900:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});

