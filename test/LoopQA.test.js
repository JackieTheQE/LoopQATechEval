const { test} = require('@playwright/test');
const LoginPage = require('./models/LoginPage.js');

test('Implement user Authentication present in To Do column', async ({ page }) => {
    //setup
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();

    //switch tab
    await landingPage.switchTab("Web Application");

    //verify data
    await landingPage.verifyCard("To Do", "Implement user authentication");

});

test('Fix navigation bug is present in To Do column', async ({ page }) => {
    //setup
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();

    //switch tabs
    await landingPage.switchTab("Web Application");

    //verify data
    await landingPage.verifyCard("To Do", "Fix navigation bug");
});

test('Design system updates is present in In Progress column', async ({ page }) => {
    //setup
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();

    //switch tabs
    await landingPage.switchTab("Web Application");

    //verify data
    const card = await landingPage.verifyCard("In Progress", "Design system updates");
    await landingPage.verifyTag(card, "Design");
});

test('Push Notification system is present in To Do column of Mobile Application', async ({ page }) => {
    //setup
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();

    //switch tabs
    await landingPage.switchTab("Mobile Application");

    //verify data
    const card = await landingPage.verifyCard("To Do", "Push notification system");
    await landingPage.verifyTag(card, "Feature");
});

test('Offline mode is present in the In Progress column of Mobile Application', async ({ page }) => {
    //setup
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();

    //switch tabs
    await landingPage.switchTab("Mobile Application");

    // verify data
    const card = await landingPage.verifyCard("In Progress", "Offline mode");
    await landingPage.verifyTag(card, "Feature");
    await landingPage.verifyTag(card, "High Priority");
});

test('App icon design is in the Done column of Mobile Application', async ({ page }) => {
    //setup
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();

    //switch tabs
    await landingPage.switchTab("Mobile Application");

    //verify data
    const card = await landingPage.verifyCard("Done", "App icon design");
    await landingPage.verifyTag(card, "Design");
});
