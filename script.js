document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60, // Space for navbar
                behavior: 'smooth'
            });
        }
    });
});

// Handle contact form submission
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Send to Formspree (replace YOUR_FORM_ID with your actual Formspree form ID)
    // Visit https://formspree.io to set up your form
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you! Your message has been sent.');
            document.getElementById('contactForm').reset();
        } else {
            alert('There was an issue sending your message. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error. Please try emailing directly instead.');
    });
});