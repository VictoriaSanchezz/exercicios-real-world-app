class SignInPage {
    selectorsList() {
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            signInButton: "[type='submit']",
            signUpLink: "[href='/signup']",
            wrongCredentialAlert: "[role='alert']"
        }

        return selectors
    }

    accessSignInPage() {
        cy.visit('http://localhost:3000/signin')
    }

    login(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
    }

    invalidCredentialCheck() {
        cy.get(this.selectorsList().signInButton).click() 
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

    accessSignUpPage() {
        cy.get(this.selectorsList().signUpLink).click()
    }
    
}

export default SignInPage