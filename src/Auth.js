import auth0 from "auth0-js";
const LOGIN_SUCCESS_PAGE = "/#/"

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "ogoley.auth0.com",
    clientID: "0yQHQsqsxQYWRyceDdhcQKMq4yXUVheY",
    redirectUri: "http://localhost:3001/#/callback",
    audience: "https://ogoley.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  }) 

  constructor () {
    this.login = this.login.bind(this)

  }

  login () {
    this.auth0.authorize()
  }

  handleAuthentication() {
    this.auth0.parseHash((err,authResults) => {
      if (authResults && authResults.accessToken && authResults.idToken){
        console.log("WHY")
        let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime())
        localStorage.setItem("access_token", authResults.accessToken)
        localStorage.setItem("id_token", authResults.idToken)
        localStorage.setItem("expires_at", expiresAt)
        localStorage.hash = ""
        console.log("YEEEE")
        window.location.pathname = LOGIN_SUCCESS_PAGE
      } else if (err) {
        console.log("YEEEE errrorrr")
        window.location.pathname = LOGIN_SUCCESS_PAGE
      }
    })

  }

  isAuthenticated(){
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"))
    return new Date().getTime() < expiresAt
  }

}

