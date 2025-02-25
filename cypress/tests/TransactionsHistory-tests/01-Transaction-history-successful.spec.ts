import userData from '../fixtures/userData.json'
import SignInPage from '../pages/signInPage'
import HomePage from '../pages/homePage'

const signInPage = new SignInPage()
const homePage = new HomePage()

describe('Access a user transactions history', () => {

    it('User with transaction history', () => {
        signInPage.accessSignInPage();
        signInPage.loginDetails(userData.userLoginSuccess.username, userData.userLoginSuccess.password);
        homePage.homePageCheck();
        homePage.accessTransactionsHistory();
    })
  
  })