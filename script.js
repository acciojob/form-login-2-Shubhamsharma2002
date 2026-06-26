//your JS code here. If required.
document.getElementById('infoForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    // Fetch the form elements by their name attributes
    const firstName = document.getElementsByName('First Name')[0].value;
    const lastName = document.getElementsByName('Last Name')[0].value;
    const phoneNumber = document.getElementsByName('Phone Number')[0].value;
    const emailId = document.getElementsByName('Email ID')[0].value;

    // Construct the exact alert string format
    const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;

    // Display the alert
    alert(alertMessage);
});