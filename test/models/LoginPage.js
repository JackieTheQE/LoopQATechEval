// pages/LoginPage.js
import environmentData from '../data/environment.json'
import LandingPage from './LandingPage';
import {expect} from "playwright/test";
class LoginPage {
    constructor(page) {
        this.page = page;

        // Selectors
        this.usernameInput = 'input[id="username"]'; // Selector for the username field
        this.passwordInput = 'input[id="password"]'; // Selector for the password field
        this.signInButton = 'button[type="submit"]'; // Selector for the login button
    }

    // Methods to interact with the page
    async navigate(url) {
        await this.page.goto(url);
    }

    async enterUsername(username) {
        await this.page.fill(this.usernameInput, username);
    }

    async enterPassword(password) {
        await this.page.fill(this.passwordInput, password);
    }

    async clickSignInButton() {
        await this.page.click(this.signInButton);
    }

    async goTo() {
        await this.page.goto(environmentData.domain)
        await this.PageLoaded();
    }

    async PageLoaded() {
        await expect(this.page.locator(this.signInButton)).toBeVisible();
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle');
    }

    async login(username = environmentData.Email, password = environmentData.Password) {
        await this.goTo()
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickSignInButton()
        const landingPage = new LandingPage(this.page);
        await landingPage.pageLoaded();
        return landingPage;
    }

}

module.exports = LoginPage;
