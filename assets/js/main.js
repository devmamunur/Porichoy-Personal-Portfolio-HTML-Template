(function ($) {
    "use strict";


/*========  CounterUp ===========*/
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });
    
    var $window = $(window),
        $body = $('body');

    jQuery(document).ready(function ($) {

      
        /*======== Sticky header ===========*/
        $('.navbar-collapse a').on('click', function () {
            $(".navbar-collapse").collapse('hide');
        });

        $window.on('scroll', function () {
            if ($(".header").offset().top > 0) {
                $(".header").addClass("style");
            } else {
                $(".header").removeClass("style");
            }
        });

        /*======== Smoothscroll js ===========*/
        $(function () {
            $('a.smoth-scroll, .scroll').on('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 0
                }, 1000);
                event.preventDefault();
            });
        });

        /*======== jquery scroll spy ===========*/
        $body.scrollspy({
            target: "#ca-navbar",
            offset: 95
        });


        //    bottom to top js start
        var html_body = $('html, body');
        var amountScrolled = 300;
        var bootomclass = $('.back-top-btn');
        bootomclass.hide();
        $window.on('scroll', function () {
            if ($window.scrollTop() > amountScrolled) {
                bootomclass.fadeIn('slow');
            } else {
                bootomclass.fadeOut('slow');
            }
            var scrollPos = $window.scrollTop();
        });

        bootomclass.on('click', function () {
            html_body.animate({
                scrollTop: 0
            }, 600);
            return false;
        });


        /*======== Intro typer ===========*/
        var element = $(".element");
        $(function () {
            element.typed({
                strings: ["Web Designer.", "Graphic Designer.", "Freelancer."],
                typeSpeed: 100,
                loop: true,
            });
        });

        //  Tool Tip Active Code
        var W = $(window);
        var fb = $('.fb');
        var tw = $('.tw');
        var linkd = $('.in');
        var gp = $('.gp');

        //tilt js active code

        $('.tilt').UniversalTilt();



        /*======== Magnific Popup ===========*/
        $('.work-popup').magnificPopup({
            type: 'image'
        });

        /*======== jQuery mixItUp ===========*/
        $('.work-inner').mixItUp();

        /*========   owl carousel testimonial ===========*/
        $(".testimonial-list").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


    });


    $window.on('load', function () {

        /*======== Preloder ===========*/
        setTimeout(function () {
            $('body').addClass('loaded');
        }, 2500);

    });

}(jQuery));


/*
 =================================================================

Template Name: Porichoy - Multipurpose Personal Portfolio HTML Template
Author: Envatoprime
Version: 1.0

====================================================================
*/