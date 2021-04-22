

//Credits to code institute
//Retrieves data from contact form and sends email.

let contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let sendButton = document.getElementById("form-button");
    sendButton.innerHTML = "One moment please";
    emailjs.send("gmail", "The Kings Arms", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value

    })
    .then(
        function(){
            let sendButton = document.getElementById('form-button');
            sendButton.innerHTML = "Your Message is sent!"; // Resets contact form after timeout reached.
            document.getElementById("form-button").disabled = true;
            setTimeout(function () {
                document.getElementById("form-button").disabled = false;
                document.getElementById("form-button").innerHTML = "Send";
            }, 3000);

        },

        function(error) {
            alert("Please try again.");
            console.log('FAILED', error);
        });

    document.getElementById("contact-form").reset();
    return false;
});

