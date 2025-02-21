import { use } from 'chai'
import userData from '../fixtures/userData.json'
import SignInPage from '../pages/signInPage'
import SignUpPage from '../pages/signUpPage'

const signInPage = new SignInPage()
const signUpPage = new SignUpPage()

describe('Real World App Login Tests', () => {

    it('Register - Fail', () => {
      signInPage.accessSignInPage();
      signInPage.accessSignUpPage();
      signUpPage.signUp(userData.userRegisterFail.firstName, userData.userRegisterFail.lastName, userData.userRegisterFail.username, userData.userRegisterFail.password, userData.userRegisterFail.confirmPassord);
      signUpPage.signUp(userData.userRegisterFail)
      
      
      
      
      

      

    })
  
  })
  