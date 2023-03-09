import Page from './page.js';

class ContactUsPage extends Page {
    get inputFirstname () {
        return $('[name="first_name"]');
    }

    get inputLastname () {
        return $('[name="last_name"]');
    }

    get inputEmail () {
        return $('[name="email"]');
    }

    // get inputComments () {
    //     return document.getElementsByName('message');
    // }

    // get btnSubmit () {
    //     return document.getElementById('button[type="submit"]');
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async contactForm (inputFirstname, inputLastname, inputEmail) {
        await this.inputFirstname.setValue(inputFirstname);
        await this.inputLastname.setValue(inputLastname);
        await this.inputEmail.setValue(inputEmail);
        await browser.setTimeout({ 'implicit': 2000 })
        // this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/Contact-Us/contactus.html');
    }
}

export default new ContactUsPage();