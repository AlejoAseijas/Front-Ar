$(document).ready(function () {
    var altura = $(window).height();
    $('header').height(altura);
    $('section').height(altura);
    $('a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#con').offset().top
        }, 2000);
    });
});