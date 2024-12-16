import LoginPage from '../page_object/Loginpage.js';  
import SignUpPage from '../page_object/Signuppage.js';

describe('Login and Sign-Up', () => {
    it('should complete the sign-up process', () => {
        LoginPage.visit();
        
        LoginPage.fillSignUpForm('Masud', 'masudju@gmail.com');
        SignUpPage.fillDetails(' Mr. ','Masud', 'password123', 
            { day: '1', month: 'January', year: '2000' }, 'Masud','Rana','Tekarsh',
            'Jahangirnagar University', 'Savar', 'Dhaka', '123','1234567890'
        );
    });
});

