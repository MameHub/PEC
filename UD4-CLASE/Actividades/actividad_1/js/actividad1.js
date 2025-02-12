// Function to validate the full name field
function validateFullName() {
    const fullNameInput = document.getElementById('full-name');
    const fullNameValue = fullNameInput.value.trim();

    if (fullNameValue === '') {
        fullNameInput.classList.add('error');
        fullNameInput.setCustomValidity('Please enter your full name');
    } else if (!/^[a-zA-Z\s]{2,50}$/.test(fullNameValue)) {
        fullNameInput.classList.add('error');
        fullNameInput.setCustomValidity('Please enter a valid full name');
    } else {
        fullNameInput.classList.remove('error');
        fullNameInput.setCustomValidity('');
    }
}

// Function to validate the email field
function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value.trim();

    if (emailValue === '') {
        emailInput.classList.add('error');
        emailInput.setCustomValidity('Please enter your email');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
        emailInput.classList.add('error');
        emailInput.setCustomValidity('Please enter a valid email');
    } else {
        emailInput.classList.remove('error');
        emailInput.setCustomValidity('');
    }
}

// Function to validate the phone field
function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phoneValue = phoneInput.value.trim();

    if (phoneValue === '') {
        phoneInput.classList.add('error');
        phoneInput.setCustomValidity('Please enter your phone number');
    } else if (!/^\d{9}$/.test(phoneValue)) {
        phoneInput.classList.add('error');
        phoneInput.setCustomValidity('Please enter a valid phone number');
    } else {
        phoneInput.classList.remove('error');
        phoneInput.setCustomValidity('');
    }
}

// Function to validate the event date field
function validateEventDate() {
    const eventDateInput = document.getElementById('event-date');
    const eventDateValue = eventDateInput.value.trim();

    if (eventDateValue === '') {
        eventDateInput.classList.add('error');
        eventDateInput.setCustomValidity('Please enter the event date');
    } else {
        eventDateInput.classList.remove('error');
        eventDateInput.setCustomValidity('');
    }
}

// Function to validate the event time field
function validateEventTime() {
    const eventTimeInput = document.getElementById('event-time');
    const eventTimeValue = eventTimeInput.value.trim();

    if (eventTimeValue === '') {
        eventTimeInput.classList.add('error');
        eventTimeInput.setCustomValidity('Please enter the event time');
    } else {
        eventTimeInput.classList.remove('error');
        eventTimeInput.setCustomValidity('');
    }
}

// Function to validate the number of attendees field
function validateAttendees() {
    const attendeesInput = document.getElementById('attendees');
    const attendeesValue = attendeesInput.value.trim();

    if (attendeesValue === '') {
        attendeesInput.classList.add('error');
        attendeesInput.setCustomValidity('Please enter the number of attendees');
    } else if (isNaN(attendeesValue) || attendeesValue < 1 || attendeesValue > 1000) {
        attendeesInput.classList.add('error');
        attendeesInput.setCustomValidity('Please enter a valid number of attendees (1-1000)');
    } else {
        attendeesInput.classList.remove('error');
        attendeesInput.setCustomValidity('');
    }
}

// Function to validate the comments field
function validateComments() {
    const commentsInput = document.getElementById('comments');
    const commentsValue = commentsInput.value.trim();

    if (commentsValue.length > 250) {
        commentsInput.classList.add('error');
        commentsInput.setCustomValidity('Please enter a maximum of 250 characters');
    } else {
        commentsInput.classList.remove('error');
        commentsInput.setCustomValidity('');
    }
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Perform all field validations
    validateFullName();
    validateEmail();
    validatePhone();
    validateEventDate();
    validateEventTime();
    validateAttendees();
    validateComments();

    // Check if any field has validation errors
    const form = document.getElementById('registration-form');
    if (!form.checkValidity()) {
        const errorMessages = document.getElementsByClassName('error-message');
        for (let i = 0; i < errorMessages.length; i++) {
            errorMessages[i].textContent = '';
        }
        const errorFields = document.getElementsByClassName('error');
        for (let i = 0; i < errorFields.length; i++) {
            const errorMessage = errorFields[i].validationMessage;
            errorFields[i].nextElementSibling.textContent = errorMessage;
        }
        return;
    }

    // Show confirmation dialog before submitting the form
    if (confirm('Are you sure you want to submit the form?')) {
        form.submit();
    }
}

// Add event listener to the form submit event
const form = document.getElementById('registration-form');
form.addEventListener('submit', handleSubmit);