function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form-message");
    
    messageElement.textContent = message;
    messageElement.classList.remove("form-message-success", "form-message-error");
    messageElement.classList.add(`form-message-${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("formm-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove("form-input-error");
    inputElement.parentElement.querySelector(".form-input-error-message").textContent = "";
}


document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");

    });

    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");

    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        // TODO: FAZER LOGIN

        setFormMessage(loginForm, "error", "Combinação de Usuario/Senha invalidos");
    });

    document.querySelectorAll(".form-input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 9) {
                setInputError(inputElement, "e-mail parece estar incorreto");
            }
            if (e.target.id === "matricula" && e.target.value.length < 6) {
                setInputError(inputElement, "O numero de matricula deve ter 6 digitos");
            }    
            
            if (e.target.id === "password" && e.target.value.length < 6) {
                setInputError(inputElement, "O numero de matricula deve ter 6 digitos");
            }  

            if (e.target.id === "password" && e.target.value.length < 6) {
                setInputError(inputElement, "Senha deve ter mais que 6 caracteres");
            }  

            // if(e.target.id === "password" && e.target.value !=== )

            inputElement.addEventListener("input", e => {
                clearInputError(inputElement);
            });
        });
    });
});