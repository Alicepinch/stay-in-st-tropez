/// Slideshow created following the Snook tutorial https://snook.ca/archives/javascript/simplest-jquery-slideshow using jQuery
/// Flicks through images in the header

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

// Display Youtube video on click

$(function () {
    $(".video-container").hide();
    $("#youtube-video").click(function () {
        $(".video-container").slideToggle();
        $("#youtube-video").html("Hide Video");
    });

});

// Button styling for when a Button is active Jquery 

$(function () {
    $("button").click(function () {
        $(this).addClass("active");
    })
});

