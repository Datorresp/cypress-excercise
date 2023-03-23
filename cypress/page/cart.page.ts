class CartPage {
    private usernameInput: string;
    private passwordInput: string;
    private loginButton: string;
    private item1: String;
    private item2: String;
    private cartButton: String;

    constructor() {
        this.usernameInput = '[data-test="username"]';
        this.passwordInput = '[data-test="password"]';
        this.loginButton = '[data-test="login-button"]';
        this.item1 = '[data-test="add-to-cart-sauce-labs-backpack"]';
        this.item2 = '[data-test="add-to-cart-sauce-labs-onesie"]';
        this.cartButton = '.shopping_cart_link';

    }

    public login(email: string, password: string) {
        cy.get(this.usernameInput).type(email);
        cy.get(this.passwordInput).type(password);
        cy.get(this.loginButton).click();
    }

    public addItems(){
        cy.get(this.item1).click();
        cy.get(this.item2).click();
        cy.get(this.cartButton).click();
    }


}

export { LoginPage }