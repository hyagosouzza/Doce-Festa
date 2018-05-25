$(document).ready(function () {
    $(document).mousemove(function () {
        if (!justHidden) {
            justHidden = false;
            clearTimeout(j);
            $('.btn-to-top').removeClass('hidden');
            j = setTimeout('hide();', 1000);
        }
    });
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
    $('.list-group-item').click(function () {
        $('.list-group-item.active').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({
            scrollTop: $("#vertical").offset().top
        }, 700);
    })
    $(function () {
        $('[data-toggle="popover"]').popover({ html: true });
    })
    $('.popover-dismiss').popover({
        trigger: 'focus',
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
});