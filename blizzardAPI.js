const Promise = require("bluebird");

class Blizzard {
    
    constructor(ID, secret){
        this.credentials = {
            client: {
                id: '',
                secret: ''
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
    };
    
    
    
    getMyToken(){
        if (this.token === null || this.token.expired()) {
            return this.oauth2.clientCredentials
            .getToken()
            .then(this.oauth2.accessToken.create)
            .then(t => {
                this.token = t;
                return t.token.access_token;
            });
            }  
        else{
            return Promise.resolve(this.token.token.access_token);
        }
    };

    getToken(){
        return this.getMyToken().then(this.token);
    };
    
};

module.exports = Blizzard;