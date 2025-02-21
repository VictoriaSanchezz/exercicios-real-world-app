class SignUpPage {
    selectorsList() {
        const selectors = {
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

    signUp(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword)
    }

    signUpConfirm() {
        cy.get(this.selectorsList().signUpButton).click()
    }

    emptyFieldCheck() {
        cy.get(this.selectorsList().emptyFieldAlert)
    }

    invalidCredentialCheck(){
        cy.get(this.selectorsList().invalidPasswordAlert)
    }

}

export default SignUpPage