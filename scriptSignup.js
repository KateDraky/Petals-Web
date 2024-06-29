window.onload = start;

function start(){
    let signupForm = document.getElementById("signup-form");
    signupForm.addEventListener("submit", check);
}

function check(event){
    if(validateForm()){
        event.preventDefault();
    }
}

function validateForm(){
    let userInput = document.getElementById("user");
    userInput.classList.remove("is-invalid");
    let userInputValue = userInput.value;
    let invalidUser = document.getElementById("invalid-user");

    let passwordInput = document.getElementById("pswd");
    passwordInput.classList.remove("is-invalid");
    let passwordInputValue = passwordInput.value;
    let invalidPassword = document.getElementById("invalid-password");
    
    let passwordRInput = document.getElementById("pswd-r");
    passwordRInput.classList.remove("is-invalid");
    let passwordRInputValue = passwordRInput.value;
    let invalidPasswordR = document.getElementById("invalid-password-r");

    if(userInputValue.length < 5){
        userInput.classList.add("is-invalid");
        invalidUser.innerHTML = "El Nombre de Usuario no puede tener menos de 5 caracteres.";
        return true;
    }

    if(userInputValue.length > 8){
        userInput.classList.add("is-invalid");
        invalidUser.innerHTML = "El Nombre de Usuario no puede tener mas de 8 caracteres.";
        return true;
    }

    let regexUser = /^[a-zA-Z0-9]+$/;
    if(!regexUser.test(userInputValue)){
        userInput.classList.add("is-invalid");
        invalidUser.innerHTML = "Nombre de Usuario Invalido";
        return true;
    }

    if(passwordInputValue.length < 5){
        passwordInput.classList.add("is-invalid");
        invalidPassword.innerHTML = "La Contraseña debe tener mas de 5 caracteres.";
        return true;
    }

    if(passwordInputValue != passwordRInputValue){
        passwordInput.classList.add("is-invalid");
        passwordRInput.classList.add("is-invalid");
        invalidPasswordR.innerHTML = "Las contraseñas no coinciden.";
        return true;
    }

    return false;
}