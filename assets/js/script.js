//Setting variables for buttons and containers
const detailsButton = document.getElementsByClassName("reco-button")
const watchVideo = document.getElementById("video-btn");
const videoContainer = document.getElementsByClassName("video-container");
const moreDetails = document.getElementsByClassName("more-details");
const scrollButton = document.getElementById("scroll-top");

//Document ready function
$(function () {
    //Components hidden on page load
    $(videoContainer).hide();
    $(moreDetails).hide();

    /* Slideshow created following the Snook tutorial https://snook.ca/archives/javascript/simplest-jquery-slideshow using jQuery */
    //Images fade in and out creating a slideshow 
    $('.slideshow img:gt(0)').hide();
    setInterval(function () {
        $('.slideshow :first-child')
            .fadeOut(2000)
            .next('img')
            .fadeIn(2000)
            .end()
            .appendTo('.slideshow');
    },
        6000);
});

$(watchVideo).click(function () {
    //Content toggled when clicked
    $(this).siblings(".video-container").slideToggle();

    //Colour and text of button changes when content is shown
    if ($(this).html() === "Watch Video") {
        $(this).html("Hide Video");
        $(this).addClass("active");
    } else {
        $(this).html("Watch Video");
        $(this).removeClass("active");
    }
});

$(detailsButton).click(function () {
    //Content toggled when clicked
    $(this).siblings('.more-details').slideToggle();

    //Colour and text of button changes when content is shown
    if ($(this).html() === "More Details") {
        $(this).html("Hide Details");
        $(this).addClass("active");
    } else {
        $(this).html("More Details");
        $(this).removeClass("active");
    }
});

//Scroll to top button functionality adjusted from W3schools
window.onscroll = scrollToTop; //Assigns scroll function to window on scroll

//Displays button to user when they have scolled 200px from top
function scrollToTop() {

    let scrollHeight = 200;

    if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }

}

//Takes customer to top of page when button is clicked
$(scrollButton).click(function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
