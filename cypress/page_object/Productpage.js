class ProductPage {
    visit() {
        cy.visit('https://automationexercise.com/products');
    }

    navigateToMenCategory() {
        cy.get('a[data-toggle="collapse"][data-parent="#accordian"]').contains('Men').click();
        cy.get('ul li').contains('Jeans').click();
    }

    viewProduct() {
        cy.get('div.choose')
            .find('ul li')
            .contains('View Product')
            .click();
    }

    updateProductQuantity(quantity) {
        cy.get('input[name="quantity"]').clear().type(quantity);
        cy.get('button.btn.btn-default.cart').contains('Add to cart').click();

    }
}

export default new ProductPage();
