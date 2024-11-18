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


$(document).ready(function () {
    $(".dropdown-toggle").on("click", function () {
        $(".dropdown-menu").toggle(); // Toggle visibility of the dropdown menu
    });

    // Handle dropdown item click
    $(".dropdown-item").on("click", function () {
        const selectedText = $(this).text(); // Get the text of the clicked item
        $(".dropdown-toggle").text(selectedText); // Update the toggle button text
        $(".dropdown-menu").hide(); // Hide the menu
    });

    // Close dropdown when clicking outside
    $(document).on("click", function (e) {
        if (!$(e.target).closest(".dropdown").length) {
            $(".dropdown-menu").hide();
        }
    });
});