const {expect} = require("playwright/test");

class LandingPage {
    constructor(page) {
        this.page = page;

        // selectors
        this.logoutButton = 'button:has-text("Logout")';
        this.columnDiv = 'div[class*="bg-gray-50"]';
        this.cardDiv = 'div[class*="bg-white"]';

        //functions
        this.locateColumn = async function(columnText) {
            const column = await this.page.locator(this.columnDiv, {has: page.locator(`h2:has-text("${columnText}")`)})
            await expect(column).toBeVisible();
            return column;
        }

        this.locateCard = async function (column, cardText) {
            return await column.locator(this.cardDiv, {has: page.locator(`h3:has-text("${cardText}")`)});
        }

        this.verifyCard = async function (columnText, cardText) {
            const column = await this.locateColumn(columnText);
            await expect(await this.locateCard(column, cardText)).toBeVisible();
        }

        this.pageLoaded = async function () {
            await expect(this.page.locator(this.logoutButton)).toBeVisible();
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.waitForLoadState('networkidle');
        }

    }
}

module.exports = LandingPage