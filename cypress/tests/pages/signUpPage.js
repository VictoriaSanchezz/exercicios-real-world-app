class SignUpPage {
    selectorsList() {
        const selectors = {
            signInPageCheck: ".MuiTypography-h5",
            signUpLink: "[href='/signup']",
            signUpPageCheck: "[data-test='signup-title']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            signUpButton: "[type='submit']",
            emptyFieldAlert: "#username-helper-text",
            invalidPasswordAlert: "#confirmPassword-helper-text"
            
        }

        return selectors
    }

    accessSignUpPage() {
        cy.visit('http://localhost:3000/signin')
        cy.get(this.selectorsList().signInPageCheck).should('be.visible')
        cy.get(this.selectorsList().signUpLink).click()
        cy.get(this.selectorsList().signUpPageCheck).should('be.visible')

    }

    signUpDetails(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
    }

    signUpConfirm() {
        cy.get(this.selectorsList().signUpButton).click()
        cy.get(this.selectorsList().signInPageCheck).should('be.visible')
    }

    emptyFieldCheck() {
        cy.get(this.selectorsList().emptyFieldAlert).should('be.visible')
    }

    invalidCredentialCheck(){
        cy.get(this.selectorsList().invalidPasswordAlert).should('be.visible')
        cy.get(this.selectorsList().firstNameField).clear()
        cy.get(this.selectorsList().lastNameField).clear()
        cy.get(this.selectorsList().usernameField).clear()
        cy.get(this.selectorsList().passwordField).clear()
        cy.get(this.selectorsList().confirmPasswordField).clear()
    }

    signUpNewTry(firstName, lastName, password, confirmPassword) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
    }

    newUserSignUpDetails(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
    }

}

export default SignUpPage