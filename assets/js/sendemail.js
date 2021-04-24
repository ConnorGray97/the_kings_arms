

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

let bookingModal = document.getElementById("booking");
bookingModal.addEventListener("submit", function (e) {
    e.preventDefault();
    let bookButton = document.getElementById("book-button");
    bookButton.innerHTML = "Booking!";
    emailjs.send("gmail", "kings booking", {
        "book_name": bookingModal.bookingname.value,
        "book_email": bookingModal.modalemailaddress.value,
        "book_date": bookingModal.date.value,
        "book_time": bookingModal.time.value
    })
    .then(
        function(){
            let bookButton = document.getElementById("book-button");
            bookButton.innerHTML = "Request sent";
            document.getElementById("book-button").disabled = true;
            setTimeout(function(){
                document.getElementById("book-button").disabled = false;
                document.getElementById("book-button").innerHTML = "Book";
            }, 3000);
        },
        function(error) {
            alert("Please try again");
            console.log('FAILED', error);
        });
    document.getElementById("booking").reset();
    setTimeout(function(){  //After reset it waits 2 seconds before removing modal from viewport.
        document.getElementById('booking-modal').style.transform = "translateY(-200%)";
    }, 2000);
   return false;
});


 