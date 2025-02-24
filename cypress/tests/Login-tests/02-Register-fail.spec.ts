import userData from '../fixtures/userData.json'
import SignUpPage from '../pages/signUpPage'

const signUpPage = new SignUpPage()

describe('Register user with invalid/incomplete information', () => {

    it('Register - Fail', () => {
      signUpPage.accessSignUpPage();
      signUpPage.signUpDetails(userData.userRegisterFail.firstName, userData.userRegisterFail.lastName, userData.userRegisterFail.username, userData.userRegisterFail.password, userData.userRegisterFail.confirmPassord);
      signUpPage.invalidCredentialCheck();
      signUpPage.signUpNewTry(userData.userRegisterFail.firstName, userData.userRegisterFail.lastName, userData.userRegisterFail.password, userData.userRegisterSuccess.confirmPassord);
      signUpPage.emptyFieldCheck();
    })
  
  })
  