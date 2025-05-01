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

    // methods

    /**
     * enters username on login page
     * @param username username to be filled in
     * @returns {Promise<void>}
     */
    async enterUsername(username) {
        await this.page.fill(this.usernameInput, username);
    }

    /**
     * enters password on login page
     * @param password password to be filled in
     * @returns {Promise<void>}
     */
    async enterPassword(password) {
        await this.page.fill(this.passwordInput, password);
    }

    /**
     * clicks "Sign in" on the login page
     * @returns {Promise<void>} empty promise
     */
    async clickSignInButton() {
        await this.page.click(this.signInButton);
    }

    /**
     * navigates to the login page
     * @returns {Promise<void>} empty promise
     */
    async goTo() {
        await this.page.goto(environmentData.domain)
        await this.PageLoaded();
    }

    /**
     * Verifies the page has loaded
     * @returns {Promise<void>} empty promise
     */
    async PageLoaded() {
        await expect(this.page.locator(this.signInButton)).toBeVisible();
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle');
    }

    /**
     * logs in a user using the supplied data.  If no data is provided, data will be filled in with data from 'environment.json'
     * @param username optional - username to be filled in
     * @param password optional - password to be filled in
     * @returns {Promise<LandingPage>} LandingPage object
     */
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
