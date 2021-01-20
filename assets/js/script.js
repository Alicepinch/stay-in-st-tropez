
//Hides the following components when page is loaded
$(".video-container").hide();
$('#reco-para-1').hide();
$('#reco-para-2').hide();
$('#reco-para-3').hide();

/// Slideshow created following the Snook tutorial https://snook.ca/archives/javascript/simplest-jquery-slideshow using jQuery
/// Creats a slideshow of images for the header

$(function () {
    $('.slideshow img:gt(0)').hide();
    setInterval(function () {
        $('.slideshow :first-child')
            .fadeOut(3000)
            .next('img')
            .fadeIn(3000)
            .end()
            .appendTo('.slideshow');
    },
        7000);
});

//End of credit

// Toggles content when button is clicked for youtube video and more details
$(function () {
    $("#youtube-video").click(function () {
        $(".video-container").slideToggle();
    });

    $('#reco-button-1').click(function () {
        $('#reco-para-1').slideToggle();
    });

    $('#reco-button-2').click(function () {
        $('#reco-para-2').slideToggle();
    });

    $('#reco-button-3').click(function () {
        $('#reco-para-3').slideToggle();
    });

});

//End of jQuery

//Assigns scroll button to variable
var scrollButton = document.getElementById("scroll-top");

//Assigns the scroll function to window scroll
window.onscroll = function () { scrollToTop() };

//Function displays the button if the window is less than 40px from the top of the window, keeps it hidden if not
function scrollToTop() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }

};

//Function sets the location as 0px from top of the page to be called by button
function topOfPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}