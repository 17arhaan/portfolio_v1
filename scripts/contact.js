function sendEmail() {
  var name = document.querySelector('[name="name"]').value;
  var email = document.querySelector('[name="email"]').value;
  var message = document.querySelector('[name="message"]').value;

  // Validate form data
  if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
  }

  // Send email using EmailJS
  emailjs.send("service_33qvf1c", "template_f475i7a", {
    "name": name,
    "email": email,
    "message": message
  }).then(function(response) {
    // Success handler
    console.log('SUCCESS!', response.status, response.text);
    alert('Message sent successfully!');
    
    // Optionally, reset the form after sending the message
    document.getElementById('contact-form').reset();
  }, function(error) {
    // Error handler with customized message
    console.log('FAILED...', error);
    alert('Failed Sending. Please try again :)');
    
    // Log full error for troubleshooting
    console.error('Error details:', error);
  });
}
