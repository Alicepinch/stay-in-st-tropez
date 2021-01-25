function sendMail(contactForm) {
    emailjs.send("service_6asdbl8","stay-in-st-tropez", {
        "from_name": contactForm.fname.value,
        "from_email": contactForm.email.value,
        "contact_inquiry": contactForm.message.value,
        "subject": contactForm.subject.value,
    })
    .then
    alert("Thank you for getting in touch, We will get back to you soon.");
    return false;
}