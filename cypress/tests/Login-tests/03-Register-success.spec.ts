import userData from '../fixtures/userData.json'
import SignUpPage from '../pages/signUpPage'

const signUpPage = new SignUpPage()

describe('Register user with success', () => {

    it('Register - Success', () => {
      signUpPage.accessSignUpPage();
      signUpPage.signUpDetails(userData.userRegisterSuccess.firstName, userData.userRegisterSuccess.lastName, userData.userRegisterSuccess.username, userData.userRegisterSuccess.password, userData.userRegisterSuccess.confirmPassord);
      signUpPage.signUpConfirm();
    })
  
  })
  