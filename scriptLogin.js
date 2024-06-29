window.onload = start;

function start(){
    let loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", check);
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

    if(userInputValue === ""){
        userInput.classList.add("is-invalid");
        invalidUser.innerHTML = "Nombre de Usuario Invalido.";
        return true;
    }

    if(passwordInputValue === ""){
        passwordInput.classList.add("is-invalid");
        invalidPassword.innerHTML = "Contraseña Invalida.";
        return true;
    }

    return false;
}