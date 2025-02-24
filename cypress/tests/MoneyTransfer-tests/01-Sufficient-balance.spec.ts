import userData from '../fixtures/userData.json'
import bankAccountData from '../fixtures/bankAccountData.json'
import SignInPage from '../pages/signInPage'
import HomePage from '../pages/homePage'

const signInPage = new SignInPage()
const homePage = new HomePage()

describe('Money transfer with sufficient balance', () => {

  it('Sufficient balance', () => {
    signInPage.accessSignInPage();
    signInPage.loginDetails(userData.userLoginSuccess.username, userData.userLoginSuccess.password);
    homePage.homePageCheck();

      // Once you log in with user and create a bank account for the first time, no need to verify/create again. Unless you create a new user or new bank;
    // homePage.createBankAccount(bankAccount.bankAccountInfo.bankName, bankAccount.bankAccountInfo.routingNumber, bankAccount.bankAccountInfo.accountNumber);
    
    homePage.newTransaction(bankAccountData.transactionInfo.addAmount, bankAccountData.transactionInfo.addNote);
  })

})