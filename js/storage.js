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
