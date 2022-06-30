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

const videoStorage = new VideoStorage();

document.addEventListener("DOMContentLoaded", () => {
  const createVideoForm = document.querySelector("#createVideo");
  videoStorage.init();
  createVideoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const video = {
      title: e.target.videoTitle?.value,
      url: e.target.videoURL?.value,
    };

    const id = videoStorage.add(video);
    if (Number.isInteger(id)) {
      setFormMessage(
        createVideoForm,
        "success",
        "Vídeo criado com sucesso. Você será redirecionado para a página inicial."
      );
      setTimeout(() => {
        window.location.href = "home.html";
      }, 5000);

      return;
    }
    setFormMessage(createVideoForm, "error", "Não é possível criar o vídeo.");
  });
});
