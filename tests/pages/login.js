exports.class LoginPage {

    constructor (page) {

        
        this.emailField = page.locator('#user-name');
        this.pwdField = page.locator('#password');
        this.loginButton = page.locator('#login-button')


    }

    visitPage(url) {

        this.url = url;
        page.goto(url);

    }

    loginFunction() {

        this.emailField.fill("standard_user");
        this.pwdField.fill("secret_sauce");
        this.loginButton.click();

    }

}