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

    // // ADD IMAGE
    $('.image-uploader').change(function (event){
        $(this).parents('.images-upload-block').append('<div class="uploaded-block"><img src="'+ URL.createObjectURL(event.target.files[0]) +'"><button class="close"><i class="icon-trash text-white"></i></button></div>');
    });
    
    // REMOVE IMAGE
    $('.images-upload-block').on('click', '.close',function (){
        $(this).parents('.uploaded-block').remove();
    });

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
    
    // Click Open Cart
    $(document).on("click", ".open-cart, .overlay-fixed",function() {
        $(".view-cart").toggleClass("back");
        $(".overlay-fixed").toggleClass("back");
        $("body").toggleClass("overflow-hidden");
    });

    // Filterion
    $(document).on("click", ".open-filter",function() {
        $(".up-in-filter").toggleClass("showing");
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
    
    // Click Remove Class For All Section
    $(document).on("click", ".overlay-absolute",function() {
        $(".form-search").removeClass("showing");
        $(".up-in-filter").removeClass("showing");
        $("body").removeClass("overflow-hidden");
    });
    
    // Count Plus And Minus
    $(document).ready(function() {
        $('.minus').click(function () {
            var $input = $(this).parent().find('input');
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus').click(function () {
            var $input = $(this).parent().find('input');
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
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

    $('.owl-category').owlCarousel({
        items:1,
        loop:false,
        center:true,
        autoplay:false,
        margin:0,
        animateOut: 'fadeOut',
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash'
    });
    
    $('.owl-sub-category').owlCarousel({
        items:3,
        loop:false,
        autoplay:false,
        center:false,
        margin:0,
        URLhashListener:true,
        autoplayHoverPause:true,
        startPosition: 'URLHash',
        nav:false
    });
    
});


