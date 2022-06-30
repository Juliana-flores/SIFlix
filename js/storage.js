class Storage {
  constructor() {
    this.db = window.localStorage;
  }

  /**
   * @function set
   * @param {string} id
   * @param {object} data
   */
  set(id, data) {
    this.db.setItem(id, JSON.stringify(data));
  }

  /**
   * @function get
   * @param {string} id
   * @returns {object}
   */
  get(id) {
    return JSON.parse(this.db.getItem(id));
  }

  /**
   * @function update
   * @param {string} id
   * @param {object} data
   */
  update(id, data) {
    this.db.setItem(id, JSON.stringify(data));
  }

  /**
   * @function delete
   * @param {string} id
   */
  delete(id) {
    this.db.removeItem(id);
  }
}

/**
 * @typedef {object} User
 * @property {string} username
 * @property {string} password
 * @property {string} matricula
 * @property {string} name
 */

class UserStorage extends Storage {
  /**
   * @function login
   * @param {string} username
   * @param {string} password
   * @returns {}
   */
  login(username, password) {
    if (!username || !password) {
      return null;
    }

    const user = this.get(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  /**
   * @function create
   * @param {User} param0
   */
  create({ username, password, name, matricula }) {
    if (!username || !password || !name || !matricula) {
      console.log("opa");
      return false;
    }

    const user = this.get(username);
    if (user) {
      return false;
    }

    this.set(username, {
      username,
      password,
      name,
      matricula,
    });
    return true;
  }
}
/**
 * @typedef {object} Video
 * @property {string} title
 * @property {string} id
 * @property {string} url
 */

/**
 * @type {Partial<Video>[]}
 */
const videoList = [
  {
    id: 0,
    title: "SEO com React",
    url: "https://www.youtube.com/watch?v=c8mVlakBESE",
  },
  {
    id: 1,
    title: "O que faz uma desenvolvedora front-end? #HipstersPontoTube",
    url: "https://www.youtube.com/watch?v=ZY3-MFxVdEw",
  },
  {
    id: 2,
    title: "Componentização com VanillaJS #AluraMais",
    url: "https://www.youtube.com/watch?v=LatCKpcOMak",
  },
  {
    id: 3,
    title: "Pare de chutar e aprenda a display: inline #01",
    url: "https://www.youtube.com/watch?v=5PS6ku8NzIE",
  },
  {
    id: 4,
    title: "Template String: Interpolando strings com JavaScript #AluraMais",
    url: "https://www.youtube.com/watch?v=ORI_HTXaIw0",
  },
  {
    id: 5,
    title: "Qual é a melhor linguagem de programação? #HipstersPontoTube",
    url: "https://www.youtube.com/watch?v=Uh-GNH-t89w",
  },
  {
    id: 6,
    title: "Novidades do Angular v9",
    url: "https://www.youtube.com/watch?v=34uHo7hFmG0",
  },
  {
    id: 7,
    title: "PERCURSO em NÍVEL em ÁRVORE BINÁRIA | Estruturas de Dados #14",
    url: "https://www.youtube.com/watch?v=UOK7nS2E9xM",
  },
  {
    id: 8,
    title: "Coders4Tips - S01E04: GitHub CLI - Uma Nova Experiência no Github!",
    url: "https://www.youtube.com/watch?v=6o6-bKOZOEY",
  },
  {
    id: 9,
    title: "Programei 4 robôs que criam vídeos para mim no YouTube",
    url: "https://www.youtube.com/watch?v=kjhu1LEmRpY",
  },
  {
    id: 10,
    title: "API: Dicionário do Programador",
    url: "https://www.youtube.com/watch?v=vGuqKIRWosk",
  },
  {
    id: 11,
    title: "Usando Git Direito",
    url: "https://www.youtube.com/watch?v=6OokP-NE49k",
  },
  {
    id: 12,
    title: "Teste de Turing",
    url: "https://www.youtube.com/watch?v=BaPGU4JWa34",
  },

  {
    id: 14,
    title: "Melhor forma de aprender Python",
    url: "https://www.youtube.com/watch?v=Gojqw9BQ5qY",
  },
  {
    id: 15,
    title: "Como ingressar no mercado de Data Science?",
    url: "https://www.youtube.com/watch?v=gxyjGmOV540",
  },
  {
    id: 16,
    title: "Interestellar",
    url: "https://www.youtube.com/watch?v=frD_IiY_A3E",
  },
  {
    id: 17,
    title: "Gattaca",
    url: "https://www.youtube.com/watch?v=Dl0tYLbrhhs",
  },
  {
    id: 18,
    title: "A Chegada",
    url: "https://www.youtube.com/watch?v=rNciXGzYZms",
  },
  {
    id: 19,
    title: "Feitiço do Tempo",
    url: "https://www.youtube.com/watch?v=zi8d69P9NvI",
  },
  {
    id: 20,
    title: "Final Fantasy 7",
    url: "https://www.youtube.com/watch?v=I_ATSCTnUD8",
  },
  {
    id: 21,
    title: "Assassins Creed Valhalla",
    url: "https://www.youtube.com/watch?v=KDfdjB9uL0U",
  },
  {
    id: 22,
    title: "God of War 4",
    url: "https://www.youtube.com/watch?v=FyIwEFXOcaE",
  },
  {
    id: 23,
    title: "Resident Evil 8",
    url: "https://www.youtube.com/watch?v=JSapXD9vxYA",
  },
  {
    id: 24,
    title: "Video padrão",
    url: "https://www.youtube.com/watch?v=jOAU81jdi-c",
  },
  {
    id: 25,
    title: "Video padrão",
    url: "https://www.youtube.com/watch?v=jOAU81jdi-c",
  },
];

class VideoStorage extends Storage {
  init() {
    if (!this.db.length) {
      videoList.forEach((video) => this.add(video));
    }
  }

  /**
   * @function add
   * @param {Video} video
   * @returns {void}
   */
  add(video) {
    if (!video.title || !video.url) {
      return false;
    }

    const id = this.db.length;

    const newVideo = { id, ...video };
    this.set(id, newVideo);

    return id;
  }

  /**
   * @function remove
   * @param {string} id
   * @returns {void}
   */
  remove(id) {
    this.delete(id);
    this.videos.splice(id, 1);
  }

  /**
   * @function all
   * @returns {Video[]}
   */
  all() {
    return Object.values(this.db).map((video) => JSON.parse(video));
  }
}
