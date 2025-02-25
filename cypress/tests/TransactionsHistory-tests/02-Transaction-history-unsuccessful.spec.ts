import userData from '../fixtures/userData.json'
import bankAccountData from '../fixtures/bankAccountData.json'
import SignInPage from '../pages/signInPage'
import HomePage from '../pages/homePage'
import SignUpPage from '../pages/signUpPage'

const signUpPage = new SignUpPage()
const signInPage = new SignInPage()
const homePage = new HomePage()

describe('Access a user transactions history', () => {

    it('User with no transaction history', () => {
        signUpPage.accessSignUpPage();
        signUpPage.signUpDetails(userData.newUser.firstName, userData.newUser.lastName, userData.newUser.username, userData.newUser.password, userData.newUser.confirmPassord);
        signUpPage.signUpConfirm();
        signInPage.loginDetails(userData.newUser.username, userData.newUser.password);
        homePage.homePageCheck();
          
            // Once you log in with user and create a bank account for the first time, no need to verify/create everytime you log in that day. Unless you create a new user or new bank;
        // homePage.createBankAccount(bankAccountData.bankAccountInfo.bankName, bankAccountData.bankAccountInfo.routingNumber, bankAccountData.bankAccountInfo.accountNumber);
        
        homePage.accessTransactionsHistory();
        homePage.transactionsHistoryCheck();
    })
  
  })