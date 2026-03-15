class LoginPage {

constructor(page) {
this.page = page
this.username = '#user-name'
this.password = '#password'
this.loginButton = '#login-button'
this.errorMessage = '[data-test="error"]'
 this.loginLogo = '.login_logo'
}

async gotoLoginPage() {
await this.page.goto('/')
}

async login(username, password) {
await this.page.fill(this.username, username)
await this.page.fill(this.password, password)
await this.page.click(this.loginButton)
}

async getErrorMessage() {
return await this.page.textContent(this.errorMessage)
}
async getLoginPageTitle() {
return await this.page.textContent(this.loginLogo)
}


}

module.exports = LoginPage