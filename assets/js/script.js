//Hides the following components when page is loaded

$(function () {
    $(".video-container").hide();
    $('#reco-para-1').hide();
    $('#reco-para-2').hide();
    $('#reco-para-3').hide();
});


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

//Assigns the scroll function to window scroll
window.onscroll = function () { scrollToTop() };

//Function displays the button if the window is less than 40px 
function scrollToTop() {

    //Assigns scroll button to variable
    var scrollButton = document.getElementById("scroll-top");

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
};

//Setting global variable for 'Watch Video' button
let videoButton = document.getElementById("youtube-video");

//Function changes text and colour of button when clicked for 'Watch Video CTA'
function changeText() {
    if (videoButton.innerHTML === "Watch Video") {
        videoButton.innerHTML = "Hide Video";
        videoButton.classList.add("active");
    }
    else {
        videoButton.innerHTML = "Watch Video";
        videoButton.classList.remove("active");
    }
};

//Event listener for when customer clicks on the 'watch video' cta
videoButton.addEventListener("click", function () {
    changeText()
});

//Setting global variables for the recommendation buttons
let reco1 = document.getElementById("reco-button-1");
let reco2 = document.getElementById("reco-button-2");
let reco3 = document.getElementById("reco-button-3");

//Function that changes text and colour of button 
function showDetails(reco) {

    if (reco.innerHTML === "More Details") {
        reco.innerHTML = "Hide Details";
        reco.classList.add("active");
    }
    else {
        reco.innerHTML = "More Details";
        reco.classList.remove("active");
    }

};

//Event listeners for the 'More Details' Buttons
reco1.addEventListener("click", function () {
    showDetails(reco1);
});

reco2.addEventListener("click", function () {
    showDetails(reco2);
});

reco3.addEventListener("click", function () {
    showDetails(reco3);
});
