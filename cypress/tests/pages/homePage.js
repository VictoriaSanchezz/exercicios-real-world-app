class HomePage {
    selectorsList() {
        const selectors = {
            homePageCheck: "[data-test='sidenav']",
            setupBankAccountButton: ".MuiButton-textPrimary",
            bankNameField: "[placeholder='Bank Name']",
            routingNumberField: "[placeholder='Routing Number']",
            accountNumberField: "[placeholder='Account Number']",
            bankAccountInfoSaveButton: ".BankAccountForm-submit",
            doneButton: "[data-test='user-onboarding-next']",
            newTransactionButton: "[href='/transaction/new']",
            contactSelector: ".MuiListItemText-multiline",
            amountField: "[placeholder='Amount']",
            addNoteField: "[placeholder='Add a note']",
            payButton: "[data-test='transaction-create-submit-payment']",
            transactionSuccessAlert: "[data-test='alert-bar-success']",
            topboardMineButton: "[role='tab']",
            transactionsHistoryPage: ".TransactionList-paper"
        }

        return selectors
    }

    homePageCheck() {
        cy.get(this.selectorsList().homePageCheck).should('be.visible')
    }

    createBankAccount(bankName, routingNumber, accountNumber) {
        cy.get(this.selectorsList().setupBankAccountButton).click()
        cy.get(this.selectorsList().bankNameField).type(bankName)
        cy.get(this.selectorsList().routingNumberField).type(routingNumber)
        cy.get(this.selectorsList().accountNumberField).type(accountNumber)
        cy.get(this.selectorsList().bankAccountInfoSaveButton).click()
        cy.get(this.selectorsList().doneButton).click()
    }

    newTransaction(addAmount, addNote) {
        cy.get(this.selectorsList().newTransactionButton).click()
        cy.get(this.selectorsList().contactSelector).eq(2).click({ force: true })
        cy.get(this.selectorsList().amountField).type(addAmount)
        cy.get(this.selectorsList().addNoteField).type(addNote)
        cy.get(this.selectorsList().payButton).click()
        cy.get(this.selectorsList().transactionSuccessAlert).should('be.visible')
    }

    accessTransactionsHistory() {
        cy.get(this.selectorsList().topboardMineButton).eq(2).click()
    }

    transactionsHistoryCheck() {
        cy.get(this.selectorsList().transactionsHistoryPage).contains('No Transactions').should('be.visible')
    }
}

export default HomePage