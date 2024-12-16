class SignUpPage {
    fillDetails(title,name, password, dateOfBirth,fname,lname, company, address, state, city,zipcode, mobile) {
        
        if(title === 'Mr.'){
            cy.get('[data-qa=title][value="Mr."]').check();
        }
        else
        {
            cy.get('[data-qa=title][value="Ms."]').check();
        }
        
        cy.get('input#name[data-qa="name"]').type(name);
        cy.get('[data-qa="password"]').type(password);
        cy.get('#days').select(dateOfBirth.day);
        cy.get('#months').select(dateOfBirth.month);
        cy.get('#years').select(dateOfBirth.year);
        cy.get('[data-qa="first_name"]').type(fname);
        cy.get('[data-qa="last_name"]').type(lname);
        cy.get('[data-qa="company"]').type(company);
        cy.get('[data-qa="address"]').type(address);
        cy.get('[data-qa="state"]').type(state);
        cy.get('[data-qa="city"]').type(city);
        cy.get('[data-qa="zipcode"]').type(zipcode);
        cy.get('[data-qa="mobile_number"]').type(mobile);
        cy.get('[data-qa="create-account"]').click();
        cy.contains('Account Created').should('be.visible');
    }
}

export default new SignUpPage();

