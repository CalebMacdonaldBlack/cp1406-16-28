function submitContactUs(){
  var firstNameInput = document.getElementById('firstName');
  var lastNameInput = document.getElementById('lastName');
  var emailInput = document.getElementById('email');
  var phoneInput = document.getElementById('phone');
  var commentInput = document.getElementById('comment');
  var errorLabel = document.getElementById('errorLabel');
  

  if(!firstNameInput.value)
    errorLabel.innerHTML = 'You must enter a first name!'
  else if(!lastNameInput.value)
    errorLabel.innerHTML = 'You must enter a last name!'
  else if(!validateEmail(emailInput.value))
    errorLabel.innerHTML = 'You must enter a valid email address!'
  else if(!commentInput.value)
    errorLabel.innerHTML = 'You must type a message to send!'
  else
    errorLabel.innerHTML = ''

  alert('Sent!')

}

function validateEmail(email) {
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        return false;
    }
    return true;
}