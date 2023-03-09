import ContactUsPage from "../pageobjects/contact.page.js";

describe.only('My Login application', () => {
    it('should fill out contact form page', async () => {
        await ContactUsPage.open();

        await ContactUsPage.contactForm('David', 'Vong', 'test@gmail.com');
        await expect(ContactUsPage.inputEmail).toHaveTextContaining(
            'test@gmail.com')
    })
})