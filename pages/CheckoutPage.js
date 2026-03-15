class CheckoutPage {
  constructor(page){
    this.page = page
    this.checkoutTitle = '.title'
    this.firstName = '#first-name'
    this.lastName = '#last-name'
    this.postalCode = '#postal-code'
    this.continueButton = '#continue'
    this.finishButton = '#finish'
    this.successMessage = '.complete-header'
  }

  async getCheckoutPageTitle(){
    return await this.page.textContent(this.checkoutTitle)
  }

  async fillCheckoutInformation(firstName, lastName, postalCode){
    await this.page.fill(this.firstName, firstName)
    await this.page.fill(this.lastName, lastName)
    await this.page.fill(this.postalCode, postalCode)
  }

  async clickContinue(){
    await this.page.click(this.continueButton)
  }

  async clickFinish(){
    await this.page.click(this.finishButton)
  }

  async getSuccessMessage(){
    return await this.page.textContent(this.successMessage)
  }
}

module.exports = CheckoutPage