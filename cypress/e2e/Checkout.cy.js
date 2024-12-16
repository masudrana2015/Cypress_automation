import CartPage from '../page_object/Cartpage';

describe('Checkout Process', () => {
    it('should proceed to checkout and place an order', () => {
       
        CartPage.proceedToCheckout();
        CartPage.addPaymentDetails('Masud', '4111', '123', '12', '2025');
    });
});
