import ProductPage from '../page_object/Productpage';

describe('Product Actions', () => {
    it('should select and update a product', () => {

        ProductPage.visit();
        ProductPage.navigateToMenCategory();
        ProductPage.viewProduct();
        ProductPage.updateProductQuantity(2);
    });
});
