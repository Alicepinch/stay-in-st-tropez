function sendMail(contactForm) {
    emailjs.send("service_6asdbl8", "stay-in-st-tropez", {
        "from_name": contactForm.fname.value,
        "from_email": contactForm.email.value,
        "contact_inquiry": contactForm.message.value,
        "subject": contactForm.subject.value,
    })
        .then(
            function () {
                document.getElementById("submit-button").innerHTML = "Message Sent!";
                alert("Thank you for getting in touch, We will get back to you soon.");
            });

    document.getElementById("subject").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";

    return false;
}