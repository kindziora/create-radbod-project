export class backend {

    setAuthToken(jwt) {
        this.jwt = jwt;
        this.Authorization = `Bearer ${this.jwt}`;
    }

    /**
     * 
     * @param {*} jwt 
     */
    constructor(baseUrl) {
        this.baseUrl = baseUrl || 'http://localhost:1337/auth/local'; 
    }

    async getJobs(){
      return await this.request(this.baseUrl + "/");
    }


    async request(url) {

        let response = await fetch(url,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.Authorization
            }
        });

       return response.json();
    }

}