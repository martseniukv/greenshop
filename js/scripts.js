$('.main__banner-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    responsive: {
        0: {
            items: 1
        },
        1100: {
            items: 1
        }
    }

});

$('.blog-cards__owl-carousel').owlCarousel({
    autoplay: true,
    items:4,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    margin: 0,
    responsive: {
        0: {
            items: 1
        },
        768: {
          items: 2  
        },
        1000: {
            items: 3
        },
        1100: {
            items: 4
        }
    }
});


$( function() {
    $( "#search-section__filter-accordion" ).accordion();
} );

$(function () {
    let sliderRange = "#slider-range";
    $(sliderRange).slider({
        range: true,
        min: 0,
        max: 1600,
        values: [39, 1230],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $(sliderRange).slider("values", 0) +
        " - $" + $(sliderRange).slider("values", 1));
});

var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var wrapper = document.querySelector('.navigation__mobile_wrapper');
var lineOne = document.querySelector('.menu-btn .line--1');
var lineTwo = document.querySelector('.menu-btn .line--2');
var lineThree = document.querySelector('.menu-btn .line--3');
var link = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
    wrapper.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
});

$(document).ready(function () {
    $(".search-section__filter__header").click(function () {
        $(this).find(".search-section__filter__arrow").toggleClass("rotate");
        $(this).siblings(".dropdown__content").slideToggle(500);
    });
});