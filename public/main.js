var voice = $('.voice-list');

var maxHeight = 0;

voice.find('.voice-item').each(function() {
    if ($(this).height() > maxHeight) {
        maxHeight = $(this).height();
    }
});

voice.find('.voice-item').height(maxHeight);



$(".qa-item .qa-header").click(function () {
    $(this).next(".qa-inner").slideToggle();
    $(this).toggleClass("open");
});

var simpleBar = $('.feature-table-container');


$(".scroll-mess").click(function (){
    var h = 145;
    if($(window).width() < 768){
        h = 60;
    }
    $("html, body").animate({ scrollTop: $('#mess').offset().top - h }, 600);
})