import ContactPage from '../page_object/Contactpage';

describe('Contact Us', () => {
    it('should fill and submit the contact form', () => {
        
        ContactPage.navigateToContactUs();
        ContactPage.fillContactForm('Masud', 'masudju@gmail.com', 'Test Subject', 'Test Message', 'Automation_Task.pdf');
    });
});
