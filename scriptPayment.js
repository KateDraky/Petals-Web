window.onload = start;


function start(){
    let paymentForm = document.getElementById("payment-form");
    paymentForm.addEventListener("submit", check);

    let documentSelect = document.getElementById("document-type");
    documentSelect.addEventListener("change", placeholderChange);
}

function check(event){
    if(validateForm()){
        event.preventDefault();
    }
}

function validateForm(){
    let paymentSelect = document.getElementById("payment");
    paymentSelect.classList.remove("is-invalid");
    let paymentSelectValue = paymentSelect.value;
    let invalidPayment = document.getElementById("invalid-payment");

    let documentSelect = document.getElementById("document-type");
    documentSelect.classList.remove("is-invalid");
    let documentSelectValue = documentSelect.value;
    let invalidDocumentSelect = document.getElementById("invalid-document-type");

    let documentInput = document.getElementById("document");
    documentInput.classList.remove("is-invalid");
    let documentInputValue = documentInput.value;
    let invalidDocument = document.getElementById("invalid-document");

    if(!(paymentSelectValue === "mp" || paymentSelectValue === "card" || paymentSelectValue === "eff")){
        paymentSelect.classList.add("is-invalid");
        invalidPayment.innerHTML = "Seleccione una Opcion Valida.";
        return true;
    }
    
    if(!(documentSelectValue === "DNI" || documentSelectValue === "LELC")){
        console.log("a");
        documentSelect.classList.add("is-invalid");
        invalidDocumentSelect.innerHTML = "Seleccione un Tipo de Documento Valido.";
        return true;
    }

    if(documentInputValue.length < 7 || documentInputValue.length > 8){
        documentInput.classList.add("is-invalid");
        invalidDocument.innerHTML = "El Documento Ingresado es Invalido, Ingrese Documento Valido sin Puntos ni Espacios.";
        return true;
    }

    return false;
}

function placeholderChange(){
    let documentSelect = document.getElementById("document-type");
    let documentSelectValue = documentSelect.value;

    let documentInput = document.getElementById("document");

    if(documentSelectValue === "DNI"){
        documentInput.placeholder = "Ingrese Numero de DNI";
        documentInput.removeAttribute("disabled");
    }else if(documentSelectValue === "LELC"){
        documentInput.placeholder = "Ingrese Numero de LE/LC";
        documentInput.removeAttribute("disabled");
    }else{
        documentInput.placeholder = "";
        documentInput.setAttribute("disabled", null);
    }
}