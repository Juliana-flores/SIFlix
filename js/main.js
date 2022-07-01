const userStorage = new UserStorage();

/**
 * @function setFormMessage
 * @param {Element} formElement
 * @param {string} type
 * @param {string} message
 * @returns {void}
 */
function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form-message");

  messageElement.textContent = message;
  messageElement.classList.remove("form-message-success", "form-message-error");
  messageElement.classList.add(`form-message-${type}`);
}

/**
 * @function setInputError
 * @param {Element} inputElement
 * @param {string} message
 * @returns {void}
 */
function setInputError(inputElement, message) {
  inputElement.classList.add("form-input-error");
  inputElement.parentElement.querySelector(
    ".form-input-error-message"
  ).textContent = message;
}

/**
 * @function clearInputError
 * @param {Element} inputElement
 * @returns {void}
 */
function clearInputError(inputElement) {
  inputElement.classList.remove("form-input-error");
  inputElement.parentElement.querySelector(
    ".form-input-error-message"
  ).textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const createAccountForm = document.querySelector("#createAccount");
  const createVideoForm = document.querySelector("#createVideo");
  const loginForm = document.querySelector("#login");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form-hidden");
      createAccountForm.classList.remove("form-hidden");
    });

  // document
  //   .querySelector("#signupConfirmPassword")
  //   ?.addEventListener("keyup", (e) => {
  //     console.log("VALUE: ", e.target.value);
  //     const value = e.target?.value;
  //     const password = document.querySelector("#signupPassword").value;
  //     if (value !== password) {
  //       setInputError(e.target, "As senhas não conferem");
  //     }
  //     // clearInputError(e.target);
  //   });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form-hidden");
    createAccountForm.classList.add("form-hidden");
  });

  createAccountForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target)
    const user = {
      username: e.target.signupUsername?.value,
      password: e.target.signupPassword?.value,
      name: e.target.signupName?.value,
      matricula: e.target.signupMatricula?.value,
    };

    const confirmPassword = e.target.signupConfirmPassword?.value;

    if (
      !user.password ||
      !confirmPassword ||
      user.password !== confirmPassword
    ) {
      setInputError(e.target.signupConfirmPassword, "As senhas não conferem");
      return;
    }

    const newUser = userStorage.create(user);

    if (newUser) {
      setFormMessage(
        createAccountForm,
        "success",
        "Usuário criado com sucesso. Você será redirecionado para a página de login."
      );
      setTimeout(() => {
        window.location.href = "login.html";
      }, 3000);

      return;
    }
    setFormMessage(createAccountForm, "error", "Não é possível criar usuário");
  });
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const password = e.target?.password?.value;
    const username = e.target?.email?.value;

    const currentUser = userStorage.login(username, password);

    if (!currentUser) {
      setFormMessage(
        loginForm,
        "error",
        "Combinação de Usuario/Senha invalidos"
      );
      return;
    }

    window.location.href = "home.html";
  });

  document.querySelectorAll(".form-input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupUsername" &&
        e.target.value.length > 0 &&
        e.target.value.length < 9
      ) {
        setInputError(inputElement, "e-mail parece estar incorreto");
      }

      if (e.target.id === "signupMatricula" && e.target.value.length < 6) {
        setInputError(inputElement, "O numero de matricula deve ter 6 digitos");
      }

      // if (e.target.id === "signupPassword" && e.target.value.length < 6) {
      //   setInputError(inputElement, "O numero de matricula deve ter 6 digitos");
      // }

      // if (e.target.id === "signupPassword" && e.target.value.length < 6) {
      //   setInputError(inputElement, "Senha deve ter mais que 6 caracteres");
      // }

      // if(e.target.id === "password" && e.target.value !=== )

      inputElement.addEventListener("input", (e) => {
        clearInputError(inputElement);
      });
    });
  });
});
