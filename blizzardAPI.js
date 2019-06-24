class Blizzard {
    credentials = {
        client: {
            id: '',
            secret: ''
        },
        auth: {
            tokenHost: ""
        }
    };
    constructor(ID, secret){
        this.credentials.client.id = ID;
        this.credentials.client.secret = secret;
        this.credentials.auth.tokenHost = "https://us.battle.net";
    };

    
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
};

module.exports = Blizzard;