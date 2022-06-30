class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header>
        <img src="../img/Logo-home.png" alt="SIFlix">
        <button>Novo vídeo</button>
    </header>
    `;
  }
}
class VideosCard extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <p></p>
        <div class="videoCard">
            <div class="thumb"></div>
            <div style="margin:10px">
                <h1 class="title">Titulo</h1>
                <p class="dataAdd">Adicionado dia: 01/01/2022</p>
            </div>
        </div>
        `;
  }
}
customElements.define("main-header", Header);
customElements.define("main-videocard", VideosCard);
