
function sendMail(contactForm) {
    emailjs.send("gmail", "The Kings Arms", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value

    })
    .then(
        function(response){
            console.log('SUCCESS', reponse);

        },
        function(error) {
            console.log('FAILED', error);
        });
        
    return false;
}