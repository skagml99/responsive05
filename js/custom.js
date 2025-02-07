$(function () {
    const mvs = new Swiper('.main_visual_slide', {
        loop: true,
        speed: 1000,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    })
})

$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('#flk').on('change', function () {
        let lnk = $(this).val();
        if (lnk) { window.open(lnk) }
    })

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000)
    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 600) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    })
})

$(function () {
    const MMS = new Swiper('.main_product_slide', {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },

        breakpoints: {
            769: {
                slidesPerView: 5,
                spaceBetween: 40,
            },
        },
    })
});

// 반응형

$(function () {
    $('.header .mbtn').on('click', function () {
        $(this).toggleClass('on')
        $(' .header .gnb').toggleClass('on')
    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul ul').stop().slideUp();
            $(this).next().stop().slideDown();
        }

    });

    $(window).on('resize', function () {
        $('.header .mbtn').removeClass('on');
        $('.header .gnb').removeClass('on');
        $('.header .gnb>ul ul').removeAttr('style')
    });

    $('.header .gnb').on('whell touchmove', function (e) {
        e.preventDefault();
    })
});