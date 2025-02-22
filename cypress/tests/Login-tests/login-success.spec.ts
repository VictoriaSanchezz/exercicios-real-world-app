import userData from '../fixtures/userData.json'
import SignInPage from '../pages/signInPage'

const signInPage = new SignInPage()

describe('Login with success', () => {

  it('Login - Success', () => {
    signInPage.accessSignInPage();
    signInPage.loginDetails(userData.userLoginSuccess.username, userData.userLoginSuccess.password);
    signInPage.boardPageCheck();
  })

})

