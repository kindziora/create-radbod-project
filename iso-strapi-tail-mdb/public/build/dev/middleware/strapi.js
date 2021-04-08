


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

    find(model){
        return this.requestP(this.baseUrl + "/projects", model);
    }

    findProject(id, model){

        return this.requestP(this.baseUrl + "/projects/" + id, model);
    }

    async me(){
        return await this.request(this.baseUrl + "/users/me");
    }

    async isAuthorized(){
        let me = await this.me(); 
        if (me.statusCode !== 200){
            console.log(me);
            return false;
        }
        if( me.role.name !=="Public"){
            return true;
        }
        return false;
    }

    requestP(url, model) {
        let res = (typeof fetch !=='undefined'? fetch: this.fetch)(url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.Authorization
            }
         }).then(r =>   r.json() )
         .then(d => new Promise(function(resolve, reject) { return resolve( {data : d, "model": model}) }));
 
        return res;
    }


    async request(url) {
         
        let response = await (typeof fetch !=='undefined'? fetch: this.fetch)(url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.Authorization
            }
        });     
       return await response.json();
    }

}