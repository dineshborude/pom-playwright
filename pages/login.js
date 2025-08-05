exports.LoginPage = class LoginPage {

    constructor (page) {

        this.page = page;
        
        this.emailField = page.locator('#user-name');
        this.pwdField = page.locator('#password');
        this.loginButton = page.locator('#login-button')


    }

    async visitPage(url) {

        await this.page.goto(url);

    }

    async loginFunction(username, pwd) {

        await this.emailField.fill(username);
        await this.pwdField.fill(pwd);
        await this.loginButton.click();

    }

}