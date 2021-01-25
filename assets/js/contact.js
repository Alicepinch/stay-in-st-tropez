function sendMail(contactForm) {
    emailjs.send("gmail", "stay-in-st-tropez", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "contact_inquiry": contactForm.message.value,
        "subject": contactForm.subject.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        }, 
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;
}