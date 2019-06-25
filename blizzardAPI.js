const Promise = require("bluebird");

class Blizzard {
  constructor(ID, secret) {
    this.credentials = {
      client: {
        id: "",
        secret: ""
      },
      auth: {
        tokenHost: ""
      }
    };
    this.credentials.client.id = ID;
    this.credentials.client.secret = secret;
    this.credentials.auth.tokenHost = "https://us.battle.net";

    this.oauth2 = require("simple-oauth2").create(this.credentials);
    this.token = null;
  }

  getMyToken() {
    return new Promise((resolve, reject) => {
      if (this.token === null || this.token.expired()) {
        return this.oauth2.clientCredentials
          .getToken()
          .then(this.oauth2.accessToken.create)
          .then(t => {
            this.token = t;

            // this resolves the promise
            resolve(t.token.access_token);
          });
      } else {
        // this can also resolve the promise
        resolve(this.token.token.access_token);
      }

      //NOTE: If a promise does not ever call resolve (or reject if it catches an error) the promise will never return with a value
    });
  }

  getToken() {
    this.getMyToken().then(token => {
      //set class token property to the new token
      this.token = token;
      console.log("token:", this.token);
    });
  }
}

module.exports = Blizzard;
