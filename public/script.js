$(document).ready(function () {
    $('.list-group-item').click(function () {
        $('.list-group-item.active').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $("#vertical").offset().top
        }, 700);
    })
    $('.div-btn-top').click(function () {
        $('html, body').animate({
            scrollTop: $("#row").offset().top
        }, 700);
    })
    $(function () {
        $('[data-toggle="popover"]').popover({ html: true });
    })
    $('.popover-dismiss').popover({
        trigger: 'click'
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 120) {
            $('.main').addClass('sticky-top');
            $('.navbar-brand').addClass('img-fixed');
            $('.navbar-brand').removeClass('img-normal');
            $('.main').addClass('animated fadeInDown');
            $('nav.container.navbar.navbar-expand-lg.navbar-light').css("opacity", "0.9");

        } else if ($(this).scrollTop() <= 100) {
            $('.main').removeClass('sticky-top');
            $('.navbar-brand').removeClass('img-fixed');
            $('.navbar-brand').addClass('img-normal');
            $('.main').removeClass('animated fadeInDown');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $('.div-btn-top').addClass('animated fadeInUp');
            $('.div-btn-top').css("display", "inline");

        } else if ($(this).scrollTop() <= 200) {
            $('.div-btn-top').removeClass('animated fadeInUp');
            $('.div-btn-top').css("display", "none");
        }
    });
});