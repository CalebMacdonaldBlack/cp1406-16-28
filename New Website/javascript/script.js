function validateContactUs(){
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var phoneInput = document.getElementById('phone');
  var commentInput = document.getElementById('comment');
  var errorLabel = document.getElementById('errorLabel');


  if(!nameInput.value){
    errorLabel.innerHTML = 'You must enter your name!';
    return false;
  }else if(!isValidEmail(emailInput.value)){
    errorLabel.innerHTML = 'You must enter a valid email address!';
    return false;
  }else if(!commentInput.value){
    errorLabel.innerHTML = 'You must type a message to send!';
    return false;
  }else{
    errorLabel.innerHTML = '';
  }
  alert('Sent!')
}

function isValidEmail(email) {
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        return false;
    }
    return true;
}