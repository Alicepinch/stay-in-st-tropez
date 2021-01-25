 //Setting constant variables for buttons 
const beachReco = document.getElementById("reco-button-1");
const restaurantReco = document.getElementById("reco-button-2");
const vineyardReco = document.getElementById("reco-button-3");
const watchVideo = document.getElementById("youtube-video");
const videoContainer = document.getElementsByClassName("video-container");
const beachRecoPara = document.getElementById("reco-para-1");
const restaurantRecoPara = document.getElementById("reco-para-2");
const vineyardRecoPara = document.getElementById("reco-para-3");
let pageHeight = 40;

//Hides the following components when page is loaded

$(function () {
    $(videoContainer).hide();
    $(beachRecoPara).hide();
    $(restaurantRecoPara).hide();
    $(vineyardRecoPara).hide();
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
    $(watchVideo).click(function () {
        $(videoContainer).slideToggle();
    });

    $(beachReco).click(function () {
        $(beachRecoPara).slideToggle();
    });

    $(restaurantReco).click(function () {
        $(restaurantRecoPara).slideToggle();
    });

    $(vineyardReco).click(function () {
        $(vineyardRecoPara).slideToggle();
    });

});

//End of jQuery

//Assigns the scroll function to window scroll
window.onscroll = function () {
    scrollToTop();
}

//Function displays the button if the window is less than 40px 
function scrollToTop() {

    //Assigns scroll button to variable
    var scrollButton = document.getElementById("scroll-top");

    if (document.body.scrollTop > pageHeight || document.documentElement.scrollTop > pageHeight) {
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


//Function changes text and colour of button when clicked for 'Watch Video CTA'
function changeText() {
    if (watchVideo.innerHTML === "Watch Video") {
        watchVideo.innerHTML = "Hide Video";
        watchVideo.classList.add("active");
    }
    else {
        watchVideo.innerHTML = "Watch Video";
        watchVideo.classList.remove("active");
    }
};

//Event listener for when customer clicks on the 'watch video' cta
watchVideo.addEventListener("click", function () {
    changeText()
});

//Function that changes text and colour of button 
function showDetails(recommendation) {

    if (recommendation.innerHTML === "More Details") {
        recommendation.innerHTML = "Hide Details";
        recommendation.classList.add("active");
    }
    else {
        recommendation.innerHTML = "More Details";
        recommendation.classList.remove("active");
    }

};


//Event listeners for the 'More Details' Buttons
beachReco.addEventListener("click", function () {
    showDetails(beachReco);
});

restaurantReco.addEventListener("click", function () {
    showDetails(restaurantReco);
});

vineyardReco.addEventListener("click", function () {
    showDetails(vineyardReco);
});
