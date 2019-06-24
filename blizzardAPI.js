class Blizzard {
  // in order to declare class properties here you need to use a babel transpiler or typescript transpiler on top of javascript
  // currently unsupported in plain ES6 I suppose.
  constructor(ID, secret) {
    // but you can do it down here just fine
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
  }

  /* ####### TYPESCRIPT EXAMPLE #################### */

  // if you were to use typescript for some reason your class might look like this

  //   interface IClient{
  //     id: string;
  //     secret: string;
  //   }

  //   interface IAuth{
  //       tokenHost: string
  //   }

  //   interface ICredentials{
  //     client: IClient;
  //     auth: IAuth
  //   }

  //   class Blizzard{
  //     credentials: ICredentials

  //     constructor(ID, secret){
  //         this.credentials.client.id = ID;
  //         this.credentials.client.secret = secret;
  //         this.credentials.auth.tokenHost = "https://us.battle.net";
  //     }
  //   }

  /* ######### END TYPESCRIPT EXAMPLE ################## */

  /*
    const credentials = {
        client: {
        id: blizzardAuth.ID,
        secret: blizzardAuth.Secret
        },
        auth: {
        tokenHost: "https://us.battle.net"
        }
    };
    
    
    const oauth2 = require("simple-oauth2").create(credentials);
    let token = null;
    
    
    
    function getToken(){
        if (token === null || token.expired()) {
            oauth2.clientCredentials
            .getToken()
            .then(oauth2.accessToken.create)
            .then(t => {
                token = t;
                console.log(t);
                return t.token.access_token;
            });
            }  
        else{
            return token.token.access_token;
        }
    };
    */
}

module.exports = Blizzard;
