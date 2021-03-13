//slider start
var $headerLeft = $('.header-right');
var $slider1 = $('.section1-right');
var $slider2 = $('.section2-right');
var $slider3 = $('.section3-right');
var $slider4 = $('.section4-right');
var $slider5 = $('.section5-right');
var $slider6 = $('.section6-right');
$(window).on('scroll', function() {
    var scrollTopHeader = $(window).scrollTop(),
    elementOffsetHeader = $headerLeft.offset().top,
    distanceHeader = (elementOffsetHeader - scrollTopHeader);
    var scrollTop1 = $(window).scrollTop(),
    elementOffset1 = $slider1.offset().top,
    distance1 = (elementOffset1 - scrollTop1);
    var scrollTop2 = $(window).scrollTop(),
    elementOffset2 = $slider2.offset().top,
    distance2 = (elementOffset2 - scrollTop2);
    var scrollTop3 = $(window).scrollTop(),
    elementOffset3 = $slider3.offset().top,
    distance3 = (elementOffset3 - scrollTop3);
    var scrollTop4 = $(window).scrollTop(),
    elementOffset4 = $slider4.offset().top,
    distance4 = (elementOffset4 - scrollTop4);
    var scrollTop5 = $(window).scrollTop(),
    elementOffset5 = $slider5.offset().top,
    distance5 = (elementOffset5 - scrollTop5);
    var scrollTop6 = $(window).scrollTop(),
    elementOffset6 = $slider6.offset().top,
    distance6 = (elementOffset6 - scrollTop6);

    if (Math.abs(distanceHeader) < Math.abs(distance1) && Math.abs(distanceHeader) < Math.abs(distance2) && Math.abs(distanceHeader) < Math.abs(distance3) && Math.abs(distanceHeader) < Math.abs(distance4) && Math.abs(distanceHeader) < Math.abs(distance5) && Math.abs(distanceHeader) < Math.abs(distance6)){
        document.querySelector('.header-section').style.background = "#ffffff";
        document.querySelector('.section1').style.background = "#6c757d";
        document.querySelector('.section2').style.background = "#6c757d";
        document.querySelector('.section3').style.background = "#6c757d";
        document.querySelector('.section4').style.background = "#6c757d";
        document.querySelector('.section5').style.background = "#6c757d";
        document.querySelector('.section6').style.background = "#6c757d";
    }
    else if (Math.abs(distance1) < Math.abs(distanceHeader) && Math.abs(distance1) < Math.abs(distance2) && Math.abs(distance1) < Math.abs(distance3) && Math.abs(distance1) < Math.abs(distance4) && Math.abs(distance1) < Math.abs(distance5) && Math.abs(distance1) < Math.abs(distance6)){
        document.querySelector('.header-section').style.background = "#6c757d";
        document.querySelector('.section1').style.background = "#ffffff";
        document.querySelector('.section2').style.background = "#6c757d";
        document.querySelector('.section3').style.background = "#6c757d";
        document.querySelector('.section4').style.background = "#6c757d";
        document.querySelector('.section5').style.background = "#6c757d";
        document.querySelector('.section6').style.background = "#6c757d";
    }
    else if (Math.abs(distance2) < Math.abs(distanceHeader) && Math.abs(distance2) < Math.abs(distance1) && Math.abs(distance2) < Math.abs(distance3) && Math.abs(distance2) < Math.abs(distance4) && Math.abs(distance2) < Math.abs(distance5) && Math.abs(distance2) < Math.abs(distance6)){
        document.querySelector('.header-section').style.background = "#6c757d";
        document.querySelector('.section1').style.background = "#6c757d";
        document.querySelector('.section2').style.background = "#ffffff";
        document.querySelector('.section3').style.background = "#6c757d";
        document.querySelector('.section4').style.background = "#6c757d";
        document.querySelector('.section5').style.background = "#6c757d";
        document.querySelector('.section6').style.background = "#6c757d";
    }
    else if (Math.abs(distance3) < Math.abs(distanceHeader) && Math.abs(distance3) < Math.abs(distance1) && Math.abs(distance3) < Math.abs(distance2) && Math.abs(distance3) < Math.abs(distance4) && Math.abs(distance3) < Math.abs(distance5) && Math.abs(distance3) < Math.abs(distance6)){
        document.querySelector('.header-section').style.background = "#6c757d";
        document.querySelector('.section1').style.background = "#6c757d";
        document.querySelector('.section2').style.background = "#6c757d";
        document.querySelector('.section3').style.background = "#ffffff";
        document.querySelector('.section4').style.background = "#6c757d";
        document.querySelector('.section5').style.background = "#6c757d";
        document.querySelector('.section6').style.background = "#6c757d";
    }
    else if (Math.abs(distance4) < Math.abs(distanceHeader) && Math.abs(distance4) < Math.abs(distance1) && Math.abs(distance4) < Math.abs(distance2) && Math.abs(distance4) < Math.abs(distance3) && Math.abs(distance4) < Math.abs(distance5) && Math.abs(distance4) < Math.abs(distance6)){
        document.querySelector('.header-section').style.background = "#6c757d";
        document.querySelector('.section1').style.background = "#6c757d";
        document.querySelector('.section2').style.background = "#6c757d";
        document.querySelector('.section3').style.background = "#6c757d";
        document.querySelector('.section4').style.background = "#ffffff";
        document.querySelector('.section5').style.background = "#6c757d";
        document.querySelector('.section6').style.background = "#6c757d";
    }
    else if (Math.abs(distance5) < Math.abs(distanceHeader) && Math.abs(distance5) < Math.abs(distance1) && Math.abs(distance5) < Math.abs(distance2) && Math.abs(distance5) < Math.abs(distance3) && Math.abs(distance5) < Math.abs(distance4) && Math.abs(distance5) < Math.abs(distance6)){
        document.querySelector('.header-section').style.background = "#6c757d";
        document.querySelector('.section1').style.background = "#6c757d";
        document.querySelector('.section2').style.background = "#6c757d";
        document.querySelector('.section3').style.background = "#6c757d";
        document.querySelector('.section4').style.background = "#6c757d";
        document.querySelector('.section5').style.background = "#ffffff";
        document.querySelector('.section6').style.background = "#6c757d";
    }
    else if (Math.abs(distance6) < Math.abs(distanceHeader) && Math.abs(distance6) < Math.abs(distance1) && Math.abs(distance6) < Math.abs(distance2) && Math.abs(distance6) < Math.abs(distance3) && Math.abs(distance6) < Math.abs(distance4) && Math.abs(distance6) < Math.abs(distance5)){
        document.querySelector('.header-section').style.background = "#6c757d";
        document.querySelector('.section1').style.background = "#6c757d";
        document.querySelector('.section2').style.background = "#6c757d";
        document.querySelector('.section3').style.background = "#6c757d";
        document.querySelector('.section4').style.background = "#6c757d";
        document.querySelector('.section5').style.background = "#6c757d";
        document.querySelector('.section6').style.background = "#ffffff";
    }
});

//slider koniec