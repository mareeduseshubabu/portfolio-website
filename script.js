
// JavaScript to change the header style on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});


 // Function to scroll to the top of the page
 function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
}

// Function to show or hide the button based on scroll position
window.onscroll = function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.style.display = "block"; // Show button
    } else {
        backToTopButton.style.display = "none"; // Hide button
    }
};


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simulating form submission with a delay
    setTimeout(function() {
        const responseMessage = document.getElementById('response-message');
        responseMessage.innerHTML = `Thank you, ${name}. Your message has been sent!`;
        responseMessage.style.color = '#28a745';

        // Clear the form fields
        document.getElementById('contact-form').reset();
    }, 1000);
});








        