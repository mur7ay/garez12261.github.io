var mainText = document.getElementById('email-form');
var submitBtn = document.getElementById('email-button');

function submit() {
    var firebaseRef = firebase.database().ref();
    var email = mainText.value;

    firebaseRef.child("Email").push({
        email: email
    });
    document.getElementById('email-form').value='';
}

function clearFields() {
    var frm = document.getElementsByName('contact-form')[0];
    frm.submit(); // Submit
    frm.reset(); // Reset
    return false; // Prevent page refresh
}
//
// alert("hello");
