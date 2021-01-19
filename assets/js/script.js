
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

// Button's will turn brown when clicked on
$(function () {
    $("button").click(function () {
        $(this).addClass("active");
        $("button").not(this).removeClass("active");
    })
});

//Hides the following components when page is loaded
$(".video-container").hide();
$('#reco-para-1').hide();
$('#reco-para-2').hide();
$('#reco-para-3').hide();

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