function sendEmail() {
    var name = document.querySelector('[name="name"]').value;
    var email = document.querySelector('[name="email"]').value;
    var message = document.querySelector('[name="message"]').value;
    
    // Sending the email
    emailjs.send("service_33qvf1c", "template_f475i7a", {
      "name": name,
      "email": email,
      "message": message
    }).then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Failed to send the message, please try again.');
    });
  }
  