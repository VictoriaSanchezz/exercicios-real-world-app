import userData from '../fixtures/userData.json'
import SignInPage from '../pages/signInPage'

const signInPage = new SignInPage()

describe('Login with invalid credentials', () => {

  it('Login - Fail', () => {
    signInPage.accessSignInPage();
    signInPage.loginDetails(userData.userLoginFail.username, userData.userLoginFail.password);
    signInPage.invalidCredentialCheck();
  })

})