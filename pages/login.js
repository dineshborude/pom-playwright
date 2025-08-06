exports.LoginPage = class LoginPage {

    constructor (page) {

        this.page = page;
        
        this.emailField = page.getByTestId('usernameOrEmail');
        this.pwdField = page.getByTestId('password');
        this.loginButton = page.getByRole('button', { name: 'Login' })


    }

    async visitPage(url) {

        await this.page.goto(url,{timeout : 60000});

    }

    async loginFunction(username, pwd) {

        await this.emailField.fill(username);
        await this.pwdField.fill(pwd);
        await this.loginButton.click();
        console.log('Login Done')

    }

}