// Document read
(function ($) {
    "use strict";

    var $window = $(window);

//////// -Mobile Menu- /////////
    var icon = $(".icon");
    var mobnav = $(".mobilenav");
    var topmen = $(".top-menu");
    var midmen = $(".mid-menu");
    var botmen = $(".bottom-menu");
    var close = $(".close-menu");
    $(icon).on('click', function () {
        $(mobnav).fadeToggle(500);
        $(topmen).toggleClass("top-animate");
        $(midmen).toggleClass("mid-animate");
        $(botmen).toggleClass("bottom-animate");
    });

    $(close).on('click', function () {
        $(mobnav).hide();
        $(topmen).removeClass("top-animate");
        $(midmen).removeClass("mid-animate");
        $(botmen).removeClass("bottom-animate");

    });


//////// -Smooth Scroll- /////////
    smoothScroll.init({
        selector: '[data-scroll]',
        selectorHeader: '[data-scroll-header]',
        speed: 1000, // Scrolling Time in Milliseconds(ms) // 1000ms = 1sec //
        easing: 'easeInOutCubic',
        offset: 0,
        updateURL: true,
        callback: function (anchor, toggle) {
        }
    });

//////// -Scroll to top button- /////////
    var scrolls = $('.scrollToTop');
    $window.on('scroll', function () {
        if ($(this).scrollTop() > 900) {
            $(scrolls).fadeIn();
        } else {
            $(scrolls).fadeOut();
        }
    });

    $(scrolls).on('click', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });


    //////// -Parallax Sections- /////////
    var first_parallax = $('.parallax-window');
    var second_parallax = $('.parallax-adventages');
    var parallax_testimonials = $('.parallax-testimonial');
    var single_image_parallax = $('.single-parallax');
    $(first_parallax).parallax();
    $(second_parallax).parallax();
    $(parallax_testimonials).parallax();
    $(single_image_parallax).parallax();


/*//////// -Slick Slider for Testimonials- /////////
    var testim = $('.testimonials');
    $(testim).slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,  // Default items to show
        dots: true,
        arrows: false,
        autoplay: true,
        autplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    centerPadding: '40px'
                }
            }
        ]
    });

//////// -Slick Slider for Our Team- /////////
    var center = $('.center');
    $(center).slick({
        centerMode: true,
        infinite: true,
        centerPadding: '50px',
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 3, //  Default items to show

        responsive: [{
            breakpoint: 1024,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '60px',
                slidesToShow: 1
            }
        },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });*/

})(jQuery);






