const { test} = require('@playwright/test');
const LoginPage = require('./models/LoginPage.js');

// Test 1 - Placeholder
test('Implement user Authentication present in To Do column', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();
    await landingPage.switchTab("Web Application");
    await landingPage.verifyCard("To Do", "Implement user authentication");

});

// Test 2 - Placeholder
test('Fix navigation bug is present in To Do column', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();
    await landingPage.switchTab("Web Application");
    await landingPage.verifyCard("To Do", "Fix navigation bug");
});

// Test 3 - Placeholder
test('Design system updates is present in In Progress column', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();
    await landingPage.switchTab("Web Application");
    const card = await landingPage.verifyCard("In Progress", "Design system updates");
    await landingPage.verifyTag(card, "Design");
});

// Test 4 - Placeholder
test('Push Notification system is present in To Do column of Mobile Application', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();
    await landingPage.switchTab("Mobile Application");
    const card = await landingPage.verifyCard("To Do", "Push notification system");
    await landingPage.verifyTag(card, "Feature");
});

// Test 5 - Placeholder
test('Offline mode is present in the In Progress column of Mobile Application', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();
    await landingPage.switchTab("Mobile Application");
    const card = await landingPage.verifyCard("In Progress", "Offline mode");
    await landingPage.verifyTag(card, "Feature");
    await landingPage.verifyTag(card, "High Priority");
});

test('App icon design is in the Done column of Mobile Application', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();
    await landingPage.switchTab("Mobile Application");
    const card = await landingPage.verifyCard("Done", "App icon design");
    await landingPage.verifyTag(card, "Design");
});
