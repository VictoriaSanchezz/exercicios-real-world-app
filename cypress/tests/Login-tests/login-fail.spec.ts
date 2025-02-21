import userData from '../fixtures/userData.json'
import SignInPage from '../pages/signInPage'

const signInPage = new SignInPage()

describe('Real World App Login Tests', () => {

  it('Login - Fail', () => {
    signInPage.accessSignInPage();
    signInPage.login(userData.userLoginFail.username, userData.userLoginFail.password);
    signInPage.invalidCredentialCheck();
  })

})

