$(function() {

	// Get the form.
	var form = $('#contactForm');

	// Get the messages div.
	var formMessages = $('.ajax-response');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#contactForm input,#contactForm textarea').val('');
			$('#contactForm input[type="submit"]').val('Message sent. We will get back to you !');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).addClass('success');
			$(formMessages).removeClass('error');

			// Set the message text.
			if (data.responseText !== 'TANANANA') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});

});
