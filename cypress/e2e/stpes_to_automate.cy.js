import LoginPage from '../page_object/Loginpage.js';
import SignUpPage from '../page_object/Signuppage.js';
import ProductPage from '../page_object/Productpage';
import ContactPage from '../page_object/Contactpage';
import CartPage from '../page_object/Cartpage';

describe('End-to-End Test Suite', () => {

    it('should complete the sign-up process', () => {
        LoginPage.visit();

        LoginPage.fillSignUpForm('Masud', 'masudju@gmail.com');
        SignUpPage.fillDetails(' Mr. ', 'Masud', 'password123',
            { day: '1', month: 'January', year: '2000' }, 'Masud', 'Rana', 'Tekarsh',
            'Jahangirnagar University', 'Savar', 'Dhaka', '123', '1234567890'
        );
    });

    it('should select and update a product', () => {

        ProductPage.visit();
        ProductPage.navigateToMenCategory();
        ProductPage.viewProduct();
        ProductPage.updateProductQuantity(2);
    });

    it('should proceed to checkout and place an order', () => {

        CartPage.proceedToCheckout();
        CartPage.addPaymentDetails('Masud', '4111', '123', '12', '2025');
    });


    it('should fill and submit the contact form', () => {

        ContactPage.navigateToContactUs();
        ContactPage.fillContactForm('Masud', 'masudju@gmail.com', 'Test Subject', 'Test Message', 'Automation_Task.pdf');
    });



});