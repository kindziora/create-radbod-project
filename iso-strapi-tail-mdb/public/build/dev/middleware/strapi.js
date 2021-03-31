


export class backend {

    setAuthToken(jwt) {
        this.jwt = jwt;
        this.Authorization = `Bearer ${this.jwt}`;
    }

    parseCookie (str) {
       return str.split(';')
      .map(v => v.split('='))
      .reduce((acc, v) => {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
        return acc;
      }, {});
    }

    /**
     * 
     * @param {*} jwt 
     */
    constructor(env) {

        this.fetch = env.fetch;
        this.baseUrl = env.baseUrl || 'http://localhost:1337'; 

        

    }

    async getJobs(){
      return await this.request(this.baseUrl + "/content");
    }

    async me(){
        return await this.request(this.baseUrl + "/users/me");
    }

    async isAuthorized(){
        let me = await this.me(); 
 
        if( me.role.name !=="Public"){
            return true;
        }
        return false;
    }

    
    async request(url) {

        let response = await this.fetch(url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.Authorization
            }
        });

        console.log(response);

       return await response.json();
    }

}