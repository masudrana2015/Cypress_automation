class CartPage {

    proceedToCheckout() {


        cy.visit('https://automationexercise.com/view_cart');
        cy.wait(2000); // Wait for 2 seconds to ensure the page fully loads
        cy.get('a.check_out')
            .should('be.visible')
            .contains('Proceed To Checkout')
            .click();

    }

    addPaymentDetails(cardName, cardNumber, cvc, expiryMonth, expiryYear) {
        cy.get('[data-qa="card-name"]').type(cardName);
        cy.get('[data-qa="card-number"]').type(cardNumber);
        cy.get('[data-qa="cvc"]').type(cvc);
        cy.get('[data-qa="expiry-month"]').type(expiryMonth);
        cy.get('[data-qa="expiry-year"]').type(expiryYear);
        cy.get('[data-qa="pay"]').click();
    }
}

export default new CartPage();
