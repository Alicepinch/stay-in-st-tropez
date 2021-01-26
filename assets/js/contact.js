//Set const variable for submit button
const submitButton = document.getElementById("submit-button");

function sendMail(contactForm) {
    emailjs.send("service_6asdbl8", "stay-in-st-tropez", {
        "from_name": contactForm.fname.value,
        "from_email": contactForm.email.value,
        "contact_inquiry": contactForm.message.value,
        "subject": contactForm.subject.value,
    })
        .then(

            //Function changes the submit button when form submitted alerts user
            function () {
                submitButton.innerHTML = "Message Sent!";
                submitButton.classList.add("active");
                alert("Thank you for getting in touch, We will get back to you soon.");
            },

            //Function alerts user with error if the form was unsuccesful
            function (error) {
                alert("Sorry something, please try again", error);
            });

    // Clears the form fields after form is submitted
    document.getElementById("subject").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

    return false;
}