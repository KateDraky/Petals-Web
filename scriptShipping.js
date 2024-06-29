window.onload = start;

function start(){
    let shippingForm = document.getElementById("shipping-form");
    shippingForm.addEventListener("submit", check);
}

function check(event){
    if(validateForm()){
        event.preventDefault();
    }
}

function validateForm(){
    let clientFNameInput = document.getElementById("client-fname");
    clientFNameInput.classList.remove("is-invalid");
    let clientFNameInputValue = clientFNameInput.value;
    let invalidFName = document.getElementById("invalid-fname");
    
    let clientLNameInput = document.getElementById("client-lname");
    clientLNameInput.classList.remove("is-invalid");
    let clientLNameInputValue = clientLNameInput.value;
    let invalidLName = document.getElementById("invalid-lname");
    
    let streetInput = document.getElementById("street");
    streetInput.classList.remove("is-invalid");
    let streetInputValue = streetInput.value;

    let numInput = document.getElementById("num");
    numInput.classList.remove("is-invalid");
    let numInputValue = Number(numInput.value);

    let locInput = document.getElementById("loc");
    locInput.classList.remove("is-invalid");
    let locInputValue = locInput.value;
    let addressLabel = document.getElementById("address");
    addressLabel.classList.remove("is-invalid");
    let invalidAddress = document.getElementById("invalid-address");

    let postalCodeInput = document.getElementById("pc");
    postalCodeInput.classList.remove("is-invalid");
    let postalCodeInputValue = Number(postalCodeInput.value);
    let invalidPostalCode = document.getElementById("invalid-pc");

    let emailInput = document.getElementById("email");
    emailInput.classList.remove("is-invalid");
    let emailInputValue = emailInput.value;
    let invalidEmail = document.getElementById("invalid-email");

    let phoneInput = document.getElementById("phone");
    phoneInput.classList.remove("is-invalid");
    let phoneInputValue = phoneInput.value;
    let invalidPhone = document.getElementById("invalid-phone");

    let regexFName = /^[a-zA-Z ]+$/;
    if(!regexFName.test(clientFNameInputValue)){
        clientFNameInput.classList.add("is-invalid");
        invalidFName.innerHTML = "Ingrese un Nombre Valido.";
        return true;
    }

    let regexLName = /^[a-zA-Z ]+$/;
    if(!regexLName.test(clientLNameInputValue)){
        clientLNameInput.classList.add("is-invalid");
        invalidLName.innerHTML = "Ingrese un Apellido Valido.";
        return true;
    }

    let regexStreet = /^[a-zA-Z ]+$/;
    if(!regexStreet.test(streetInputValue)){
        streetInput.classList.add("is-invalid");
        addressLabel.classList.add("is-invalid");
        invalidAddress.innerHTML = "Ingrese una Dirección Valida.";
        return true;
    }

    if(!Number.isInteger(numInputValue)){
        numInput.classList.add("is-invalid");
        addressLabel.classList.add("is-invalid");
        invalidAddress.innerHTML = "Ingrese una Dirección Valida.";
        return true;
    }

    if(numInputValue < 1){
        numInput.classList.add("is-invalid");
        addressLabel.classList.add("is-invalid");
        invalidAddress.innerHTML = "Ingrese una Dirección Valida.";
        return true;
    }

    let regexLoc = /^[a-zA-Z ]+$/;
    if(!regexLoc.test(locInputValue)){
        locInput.classList.add("is-invalid");
        addressLabel.classList.add("is-invalid");
        invalidAddress.innerHTML = "Ingrese una Dirección Valida.";
        return true;
    }

    if(!Number.isInteger(postalCodeInputValue)){
        postalCodeInput.classList.add("is-invalid");
        invalidPostalCode.innerHTML = "Ingrese un Codigo Postal Valido.";
        return true;
    }

    if(postalCodeInputValue < 1){
        postalCodeInput.classList.add("is-invalid");
        invalidPostalCode.innerHTML = "Ingrese un Codigo Postal Valido.";
        return true;
    }

    let regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    if(!regexEmail.test(emailInputValue)){
        emailInput.classList.add("is-invalid");
        invalidEmail.innerHTML = "Ingrese un Email Valido.";
        return true;
    }

    let regexPhone1 = /^\d{2} \d{4}-\d{4}$/;
    let regexPhone2 = /^\d{2} \d{4} \d{4}$/;
    let regexPhone3 = /^\d{2} \d{8}$/;
    let regexPhone4 = /^\d{10}$/;
    if(!regexPhone1.test(phoneInputValue) && !regexPhone2.test(phoneInputValue) && !regexPhone3.test(phoneInputValue) && !regexPhone4.test(phoneInputValue)){
        phoneInput.classList.add("is-invalid");
        invalidPhone.innerHTML = "Ingrese un Numero de Telefono Valido.";
        return true;
    }

    return false;
}