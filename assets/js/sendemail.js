

//Credits to code institute for initial set up.
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

//Opens modal when book now button is clicked 
document.getElementById('modal-open').addEventListener('click', modalOpen);
function modalOpen(){
    document.querySelector('#booking-modal').style.transform = 'translateY(0)';
}

//Closes modal when close icon in the modal in clicked
document.getElementById('modal-close').addEventListener('click', modalClose);
function modalClose(){
    document.querySelector('#booking-modal').style.transform = 'translateY(-200%)';
}

