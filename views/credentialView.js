const { v4 } = require("uuid");

class CredentialView {
  constructor(username, password) {
    this.id = v4();
    this.username = username;
    this.password = password;
  }
}

module.exports = CredentialView;
