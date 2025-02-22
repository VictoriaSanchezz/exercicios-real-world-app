import { be } from "date-fns/locale"

class SignInPage {
    selectorsList() {
        const selectors = {
            signInPageCheck: ".MuiTypography-h5",
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            signInButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']",
            boardPageCheck: "[data-test='user-onboarding-dialog-title']"
        }

        return selectors
        
    }

    accessSignInPage() {
        cy.visit('http://localhost:3000/signin')
        cy.get(this.selectorsList().signInPageCheck).should('be.visible')
    }

    loginDetails(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    invalidCredentialCheck() { 
        cy.get(this.selectorsList().wrongCredentialAlert).should('be.visible')
    }

    boardPageCheck() {
        cy.get(this.selectorsList().boardPageCheck).should('be.visible')
    }

}

export default SignInPage