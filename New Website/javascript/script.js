function validateContactUs() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneInput = document.getElementById('phone');
    var commentInput = document.getElementById('comment');
    var errorLabel = document.getElementById('errorLabel');


    if (!nameInput.value) {
        errorLabel.innerHTML = 'You must enter your name.';
        return false;
    } else if (!isValidEmail(emailInput.value)) {
        errorLabel.innerHTML = 'You must enter a valid email address.';
        return false;
    } else if (!commentInput.value) {
        errorLabel.innerHTML = 'You must type a message to send.';
        return false;
    } else {
        errorLabel.innerHTML = '';
    }
    alert('Sent!');


}

function validateContribute() {
    var contribution = document.getElementById('contribution');
    var payment = getSelectedRadioButton(document.getElementById('paymentContainer').children);
    var benifactorName = document.getElementById('benifactorName');
    var isAnonymous = getSelectedRadioButton(document.getElementById('anonymousContainer').children);
    var mailingAddress = document.getElementById('mailingAddress');
    var emailAddress = document.getElementById('emailAddress');
    var phone = document.getElementById('phone');
    var mobile = document.getElementById('mobile');

    var errorLabel = document.getElementById('errorLabel');

    if (!contribution.value) {
        contribution.value = '';
        errorLabel.innerHTML = 'You must enter an contribution amount.';
        return false;
    } else if (!payment) {
        errorLabel.innerHTML = 'Please select a payment option.';
        return false;
    } else if (!benifactorName.value && (!isAnonymous || isAnonymous != "true")) {
        errorLabel.innerHTML = 'Please enter a benifactor name or ask to be displayed as anonymous.';
        return false;
    } else if (!mailingAddress.value) {
        mailingAddress.value = ''
        errorLabel.innerHTML = 'Please enter a mailing address.';
        return false;
    } else if (!isValidEmail(emailAddress.value)) {
        emailAddress.value = '';
        errorLabel.innerHTML = 'Please enter a valid email address';
        return false;
    } else {
        errorLabel.innerHTML = '';
    }

    if (payment !== 'eftpos') {
        w = window.open();
        w.document.write('North Queensland Ensembles Inc<br>');
        w.document.write('PO Box 576 <br>');
        w.document.write('Townsville<br>');
        w.document.write('Queensland, 4810<br><br>');
        w.document.write('Hi, I wish to make a contribution to the Barrier Reef Orchestra.<br><br>');
        w.document.write('Amount: $' + contribution.value + '<br>');
        w.document.write('Payment Method: ' + payment + '<br>');
        if (benifactorName.value)
            w.document.write('Benifactor name: ' + benifactorName.value + '<br>');
        else
            w.document.write('Benifactor name: anonymous<br>');
        w.document.write('Mailing address: ' + mailingAddress.value + '<br>');
        w.document.write('Email address: ' + emailAddress.value + '<br>');
        w.document.write('Phone: ' + phone.value + '<br>');
        w.document.write('Mobile: ' + mobile.value + '<br>');
        w.print();
        w.close();
        return false;
    }
}

function paymentClicked() {
    var payment = getSelectedRadioButton(document.getElementById('paymentContainer').children);
    var submitButton = document.getElementById('submitButton');

    if (payment === 'eftpos') {
        submitButton.value = 'Send Email';
    } else {
        submitButton.value = 'Print for mailing';
    }
}

function getSelectedRadioButton(inputs) {
    if (!inputs) return;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].checked)
            return inputs[i].value;
    }
}

function isValidEmail(email) {
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        return false;
    }
    return true;
}

function benifactorNameTyped() {
    var benifactorName = document.getElementById('benifactorName');
    var anonymousSection = document.getElementById('anonymousSection');
    if (benifactorName.value) {
        anonymousSection.setAttribute('style', 'display:none');
    } else {
        anonymousSection.setAttribute('style', 'display:block');
    }
}

function contributionNameTyped() {
    var contribution = document.getElementById('contribution');
    var benifactorSection = document.getElementById('benifactorSection');

    if (contribution.value >= 200) {
        benifactorSection.setAttribute('style', 'display:block');
    } else {
        benifactorSection.setAttribute('style', 'display:none');
    }
}