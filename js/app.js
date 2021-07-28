function buildTag(nameCategory) {
    let categoryText = `<div class= "categorytext">  </div>`
    $(categoryText).css('display', 'inline-block');
    $(categoryText).css('width', '172px');
    $(categoryText).css('height', '62px');
    let nameMenu = `<h3> ${nameCategory} </h3>`
    $(nameMenu).css('width', '68px');
    $(nameMenu).css('margin-top', '19px');
    $(nameMenu).css('margin-left', '80px');
    $(nameMenu).css('font-family', 'Cardo,sans-serif');
    $(nameMenu).css('font-style', 'normal');
    $(nameMenu).css('font-weight', 'normal');
    $(nameMenu).css('font-size', '24px');
    $(nameMenu).css('line-height', '32px');
    $(nameMenu).css('color', '#FFFFFF');
    $(categoryText).append(nameMenu);
    return categoryText;
}



$(document).ready(function () {

    $('.inicio').hover(function () {
        let newTag = buildTag("inicio");
        $('.inicioDesplegado').css('width', '240px');
    }, function () {
        $('.inicioDesplegado').css('width', '0px');
    });

    $('.desarrollos').hover(function () {
        let newTag = buildTag("desarrollos");
        $('.desarrollosDesplegado').css('width', '240px');
        console.log(newTag);
    }, function () {
        $('.desarrollosDesplegado').css('width', '0px');
    });


    $('.proyectos').hover(function () {
        let newTag = buildTag("proyectos");
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
        let newTag = buildTag("contacto");
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