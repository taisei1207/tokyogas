var owl = $('.sliders');
$('.sliders').owlCarousel({
    loop:true,
    nav:true,
    navText: ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"],
    dots: true,
    center:true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true, 
    smartSpeed: 3000,
    responsive:{
        0:{
            items:1,
            margin: 16,
            smartSpeed: 1000,
        },
        768:{
            items:2,
            margin: 16,
            smartSpeed: 1000,
        },
        1280:{
            items:4,
            margin: 16
        },
        1500:{
            items:4,
            margin: 16
        },
        1600:{
            items:4,
            margin: 16
        }
    }
})

var maxHeight = 0;

owl.find('.owl-item').each(function() {
    if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
    }
});

owl.find('.owl-item').height(maxHeight);

$(".qa-item .qa-header").click(function () {
    $(this).next(".qa-inner").slideToggle();
    $(this).toggleClass("open");
});

// $(".faq-item").click(function (){
//     $(this).parent().parent().find("a").removeClass("active");
//     $(this).addClass("active");
//     var id = $(this).attr("data-id");
//     var h = 145;
//     if($(window).width() < 768){
//         h = 60;
//     }
//     $("html, body").animate({ scrollTop: $(id).offset().top - h }, 600);
// })