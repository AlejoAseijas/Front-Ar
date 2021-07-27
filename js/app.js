$(document).ready(function () {

    /*$('.inicio').hover(function () {
        $('.inicioDesplegado').css('width', '240px');
    }, function () {
        $('.inicioDesplegado').css('width', '0px');
    });*/

    $('.desarrollos').hover(function () {
        $('.desarrollosDesplegado').css('width', '240px');
    }, function () {
        $('.desarrollosDesplegado').css('width', '0px');
    });


    $('.proyectos').hover(function () {
        $('.proyectosDesplegado').css('width', '240px');
    }, function () {
        $('.proyectosDesplegado').css('width', '0px');
    });

    $('.proyectos').hover(function () {
        $('.proyectosDesplegado').css('width', '240px');
    }, function () {
        $('.proyectosDesplegado').css('width', '0px');
    });

    $('.contacto').hover(function () {
        $('.contactoDesplegado').css('width', '240px');

    }, function () {
        $('.contactoDesplegado').css('width', '0px');
    });



    $('.inicio').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('footer').offset().top
        }, 2000);
    });

    $('.desarrollos').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#desarrollos').offset().top
        }, 2000);
    });

    $('.proyectos').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#proyectos').offset().top
        }, 2000);
    });

    $('.contacto').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('footer').offset().top
        }, 2000);
    });

    $('.wspItem').click(function (e) {
        e.preventDefault();
        window.open('https://api.whatsapp.com/send?phone=541138785999&text=Hola%2C%20como%20estan%3F%20Quisiera...');
    });

});