class AuthenticationService {
    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticatedUser', username)
        console.log("Login success")
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
        window.location.reload();
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        console.log(user);
        if (user === null) return false
        else return true
    }

}

export default new AuthenticationService()