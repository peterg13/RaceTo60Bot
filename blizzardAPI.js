//the file that contains the bots Blizzard ID and Secret
var blizzardAuth = require("./blizzardAuth.json");

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
  
  
  
const getToken = () =>{
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