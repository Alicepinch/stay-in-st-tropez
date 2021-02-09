//Setting constant variables for buttons and containers
const detailsButton = document.getElementsByClassName("reco-button")
const watchVideo = document.getElementById("video-btn");
const videoContainer = document.getElementsByClassName("video-container");
const moreDetails = document.getElementsByClassName("more-details");
const scrollButton = document.getElementById("scroll-top");

//Hides the following components when document is ready
$(function () {
    $(videoContainer).hide();
    $(moreDetails).hide();
});

/* Slideshow created following the Snook tutorial https://snook.ca/archives/javascript/simplest-jquery-slideshow using jQuery */
// Function fades in and out from different images producing a slideshow effect 
$(function () {
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
//End of credit

//Click events for the "Watch Video" CTA
$(watchVideo).click(function () {
    $(this).siblings(".video-container").slideToggle()

    if ($(this).html() === "Watch Video") {
        $(this).html("Hide Video");
        $(this).addClass("active");
    } else {
        $(this).html("Watch Video");
        $(this).removeClass("active");
    }
});

//On click events for the "More Details CTA's"
$(detailsButton).click(function () {
    $(this).siblings('.more-details').slideToggle();

    if ($(this).html() === "More Details") {
        $(this).html("Hide Details");
        $(this).addClass("active");
    } else {
        $(this).html("More Details");
        $(this).removeClass("active");
    }
});

// On scroll button adjusted from following WS3schools
window.onscroll = scrollToTop; // Assigns scroll function to window on scroll

//Function displays the button to user when they have scolled 200px from top
function scrollToTop() {

    let scrollHeight = 200;
    
    if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }

}

// On click function to take customer to top of page when button is clicked
$(scrollButton).click(function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
