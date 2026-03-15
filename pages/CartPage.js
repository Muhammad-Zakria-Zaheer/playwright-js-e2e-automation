class CartPage {
  constructor(page){
    this.page = page
    this.cartItem = '.inventory_item_name'
    this.continueShoppingButton = '#continue-shopping'
    this.removeButton = '#remove-sauce-labs-backpack'
    this.checkoutButton = '#checkout'
  }

  async getCartItemName(){
    return await this.page.textContent(this.cartItem)
  }

  async clickContinueShopping(){
    await this.page.click(this.continueShoppingButton)
  }

  async removeItem(){
    await this.page.click(this.removeButton)
  }

  async clickCheckout(){
    await this.page.click(this.checkoutButton)
  }
}

module.exports = CartPage