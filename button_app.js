// zamiana kształtu
var change = document.querySelector(".navigation")
const hamburger = document.querySelector(".hamburger")
var count = 0;

const handleClick = () => {
    if(count % 2 == 0){
        hamburger.classList.toggle('hamburger--active');
        change.style.opacity = 1;
        count += 1;
    }
    else{
        change.style.opacity = 0;
        count += 1;
    }
}

hamburger.addEventListener('click', handleClick);


// zamiana koloru
var heightForHamburger = $(window).height();

$(window).on('scroll', function() {
    var scrollTopHamburger = $(window).scrollTop();

    if(Math.abs(scrollTopHamburger)> heightForHamburger){
        document.querySelector('.hamburgerTopLine').style.background = "#f4f4f9";
        document.querySelector('.hamburgerMiddleLine').style.background = "#f4f4f9";
        document.querySelector('.hamburgerBottomLine').style.background = "#f4f4f9";
    }
    else{
        document.querySelector('.hamburgerTopLine').style.background = "#000000";
        document.querySelector('.hamburgerMiddleLine').style.background = "#000000";
        document.querySelector('.hamburgerBottomLine').style.background = "#000000";
    }
})

// linki do poszczególnych sekcji
const scrollToSection1 = () => {
    window.scrollTo(0, document.querySelector('.header-right').offsetTop);
}
document.querySelector('.navigation-section1').addEventListener('click', scrollToSection1)

const scrollToSection2 = () => {
    window.scrollTo(0, document.querySelector('.section1-right').offsetTop);
}
document.querySelector('.navigation-section2').addEventListener('click', scrollToSection2)

const scrollToSection3 = () => {
    window.scrollTo(0, document.querySelector('.section2-right').offsetTop);
}
document.querySelector('.navigation-section3').addEventListener('click', scrollToSection3)

const scrollToSection4 = () => {
    window.scrollTo(0, document.querySelector('.section3-right').offsetTop);
}
document.querySelector('.navigation-section4').addEventListener('click', scrollToSection4)

const scrollToSection5 = () => {
    window.scrollTo(0, document.querySelector('.section4-right').offsetTop);
}
document.querySelector('.navigation-section5').addEventListener('click', scrollToSection5)

const scrollToSection6 = () => {
    window.scrollTo(0, document.querySelector('.section5-right').offsetTop);
}
document.querySelector('.navigation-section6').addEventListener('click', scrollToSection6)

const scrollToSection7 = () => {
    window.scrollTo(0, document.querySelector('.section6-right').offsetTop);
}
document.querySelector('.navigation-section7').addEventListener('click', scrollToSection7)