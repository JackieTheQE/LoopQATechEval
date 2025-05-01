const {expect} = require("playwright/test");

class LandingPage {
    constructor(page) {
        this.page = page;

        // selectors
        this.logoutButton = 'button:has-text("Logout")';
        this.columnDiv = 'div[class*="bg-gray-50"]';
        this.cardDiv = 'div[class*="bg-white"]';
        this.tagSpan= 'span[class*="py-1"]'

        //functions
        /**
         * Verifies and returns a column in the page based on the header text
         * @param columnText Column header text to search for
         * @returns {Promise<*>} Locator object of the desired column
         */
        this.locateColumn = async function(columnText) {
            const column = await this.page.locator(this.columnDiv, {has: page.locator(`h2:has-text("${columnText}")`)})
            await expect(column).toBeVisible();
            return column;
        }

        /**
         * Verifies and returns a card in the given column with the given text
         * @param column locator object of the column to search
         * @param cardText header text of the card being searched for
         * @returns {Promise<*>} the verified card locator
         */
        this.locateCard = async function (column, cardText) {
            const card = await column.locator(this.cardDiv, {has: page.locator(`h3:has-text("${cardText}")`)});
            await expect(card).toBeVisible();
            return card;
        }

        /**
         * Verifies and returns a card given the column header text and the card header text to be searched for
         * @param columnText header text of the column to be searched
         * @param cardText header text of the card to be searched
         * @returns {Promise<*>} the verified card locator
         */
        this.verifyCard = async function (columnText, cardText) {
            const column = await this.locateColumn(columnText);
            return await this.locateCard(column, cardText);
        }

        /**
         * Verifies and returns a tag within the supplied card locator, using the supplied tag text
         * @param card card locator to be searched within
         * @param tagText expected text of the tag
         * @returns {Promise<*>} the tag span of the verified tag
         */
        this.verifyTag = async function (card, tagText) {
            const tag = await card.locator(this.page.locator(this.tagSpan).filter({hasText: tagText}))
            await expect(tag).toBeVisible();
            return tag;
        }

        /**
         * verifies the page has loaded
         * @returns {Promise<void>} empty promise
         */
        this.pageLoaded = async function () {
            await expect(this.page.locator(this.logoutButton)).toBeVisible();
            await this.page.waitForLoadState('domcontentloaded');
            await this.page.waitForLoadState('networkidle');
        }

    }
}

module.exports = LandingPage