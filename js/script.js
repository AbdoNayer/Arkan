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
    
    // Click Remove Class For All Section
    $(document).on("click", ".overlay-absolute",function() {
        $(".form-search").removeClass("showing");
        $("body").removeClass("overflow-hidden");
    });
    
    // Click Open Cart
    $(document).on("click", ".open-cart, .overlay-fixed",function() {
        $(".view-cart").toggleClass("back");
        $(".overlay-fixed").toggleClass("back");
        $("body").toggleClass("overflow-hidden");
    });

    /// Show And Hide Password
    $(document).on("click", ".icon-eye",function() {
        $('.icon-eye').toggleClass("icon-eye-off");
        if ($('.input-password').attr("type") === "password") {
            $('.input-password').attr("type", "text");
            console.log('vv')
        } else {
            $('.input-password').attr("type", "password");
            console.log('nn')
        }
    });

    // Slider Skills
    $('#sliderHome').owlCarousel({
        loop:true,
        margin:0,
        center:true,
        autoplay:true,
        autoplayTimeout: 7000,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        dragEndSpeed: 7000,
        pagination : false,
        nav:false,
        navText: [
            '<i class="icon-arrow-left"></i>',
            '<i class="icon-arrow-right"></i>'
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

