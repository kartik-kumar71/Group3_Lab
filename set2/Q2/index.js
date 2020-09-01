function validateLetterString(name, ele) {
    var letters = /^[A-Za-z]+$/;
    if (ele.value.length > 0 && ele.value.match(letters))
        return true;
    else if (ele.value.length == 0)
        alert(name + " is a required field.");
    else
        alert(name + " should only contain letters.");
    ele.focus();
    return false;
}

function validateNumberString(name, ele, length) {
    var numbers = /^[0-9]+$/;
    if (ele.value.length == length && ele.value.match(numbers))
        return true;
    else if (ele.value.length == 0)
        alert(name + " is a required field.");
    else
        alert("Invalid " + name + ". Enter a valid " + name + ".");
    ele.focus();
    return false;
}

function validateEmail(email) {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.length == 0)
        alert("Email is a required field.");
    else if (email.value.match(pattern))
        return true;
    else
        alert("Invalid email address. Enter a valid email address.");
    email.focus();
    return false;
}

function validateAddress(address) {
    if (address.value.length != 0)
        return true;
    else 
        alert("Address is a required field.")
    address.focus();
    return false;
}

function validateForm() {
    var form = document.hospitalform;
    var firstName = form.firstname;
    var lastName = form.lastname;
    var city = form.city;
    var state = form.state;
    var pincode = form.pincode;
    var mobileNumber = form.mobilenumber;
    var email = form.email;
    var address = form.address;

    if (validateLetterString("Firstname", firstName) && validateLetterString("Lastname", lastName)
        && validateEmail(email) && validateNumberString("Mobile number", mobileNumber, 10)
        && validateAddress(address) && validateLetterString("City", city)
        && validateLetterString("State", state) && validateNumberString("Pincode", pincode, 6)) {
        alert("Form has been validated! Responses recorded!");
    }
}