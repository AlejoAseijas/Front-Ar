$(document).ready(function () {

    $('.inicio').hover(function () {
        $('.inicioDesplegado').css('width', '240px');
        $('.inicioText').css('display', 'inline-block');
    }, function () {
        $('.inicioDesplegado').css('width', '0px');
        $('.inicioText').css('display', 'none');
    });

    $('.desarrollos').hover(function () {
        $('.desarrollosDesplegado').css('width', '240px');
        $('.desarrolloText').css('display', 'inline-block');
    }, function () {
        $('.desarrollosDesplegado').css('width', '0px');
        $('.desarrolloText').css('display', 'none');
    });


    $('.proyectos').hover(function () {
        $('.proyectosDesplegado').css('width', '240px');
        $('.proyectoText').css('display', 'inline-block');
    }, function () {
        $('.proyectosDesplegado').css('width', '0px');
        $('.proyectoText').css('display', 'none');
    });

    $('.contacto').hover(function () {
        $('.contactoDesplegado').css('width', '240px');
        $('.contactoText').css('display', 'inline-block');

    }, function () {
        $('.contactoDesplegado').css('width', '0px');
        $('.contactoText').css('display', 'none');
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

    $('.webInstitucional').click(function (e) {
        e.preventDefault();
        $('.aEcommerce').css('display', 'none');
        $('.bEcommerce').css('display', 'none');
        $('.cEcommerce').css('display', 'none');
        $('.dEcommerce').css('display', 'none');
        $('.eEcommerce').css('display', 'none');
        $('.fEcommerce').css('display', 'none');
        $('.gEcommerce').css('display', 'none');
        $('.oneCel').css('display', 'none');
        $('.secondCel').css('display', 'none');
        $('.ecommerceSection').css('border-bottom', '0px');
        $('.ecommerceText').css('color', 'rgba(10, 10, 10, 0.5)');
        $('.cartIcon').attr('src', './style/img/cartIconDisabled.png');
        $('.webInstitucionalImg').attr('src', './style/img/webInstitucionalIcon.png');
        $('.webInstitucionalText').css('color', ' #084347');
        $('.webInstitucional').css('border-bottom', '9px solid  #084347');
    });

    $('.ecommerceSection').click(function (e) {
        e.preventDefault();
        $('.aEcommerce').css('display', 'block');
        $('.bEcommerce').css('display', 'block');
        $('.cEcommerce').css('display', 'block');
        $('.dEcommerce').css('display', 'block');
        $('.eEcommerce').css('display', 'block');
        $('.fEcommerce').css('display', 'block');
        $('.gEcommerce').css('display', 'block');
        $('.oneCel').css('display', 'block');
        $('.secondCel').css('display', 'block');
        $('.ecommerceSection').css('border-bottom', '9px solid #084347');
        $('.ecommerceText').css('color', '#084347');
        $('.cartIcon').attr('src', './style/img/cartIcon.png');
        $('.webInstitucionalImg').attr('src', './style/img/webInstitucionalIconDisabled.png');
        $('.webInstitucionalText').css('color', 'rgba(10, 10, 10, 0.5)');
        $('.webInstitucional').css('border-bottom', '0px solid  #084347');
    });

});