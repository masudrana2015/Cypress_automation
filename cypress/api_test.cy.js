/// <reference types="Cypress" />

describe('API Tests for Automation Exercise', () => {

   
    it('Test 2: Verify User Login', () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true, 
            body: {
                email: 'masudju@gmail.com',  
                password: 'password123',   
            },
        }).then((response) => {
           
            expect(response.status).to.eq(200);
            expect(response.body.message).to.eq('User exists!');
        });
    });

});
