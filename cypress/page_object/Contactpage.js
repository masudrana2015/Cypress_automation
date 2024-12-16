class ContactPage {
    navigateToContactUs() {
        cy.visit('https://automationexercise.com/contact_us');
    }

    fillContactForm(name, email, subject, message, filePath) {
        cy.get('[data-qa="name"]').type(name);
        cy.get('[data-qa="email"]').type(email);
        cy.get('[data-qa="subject"]').type(subject);
        cy.get('[data-qa="message"]').type(message);
        cy.get('input[name="upload_file"]').attachFile(filePath);
        cy.get('[data-qa="submit-button"]').click();
    }
}

export default new ContactPage();
