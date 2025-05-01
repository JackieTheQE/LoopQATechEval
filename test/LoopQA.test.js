const { test, expect } = require('@playwright/test');
const LoginPage = require('./models/LoginPage.js');

// Test 1 - Placeholder
test('Implement user Authentication present in To Do column', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();
    await landingPage.verifyCard("To Do", "Implement user authentication");

});

// Test 2 - Placeholder
test('Fix navigation bug is present in To Do column', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();
    await landingPage.verifyCard("To Do", "Fix navigation bug");
});

// Test 3 - Placeholder
test('Design system updates is present in In Progress column', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    const landingPage = await loginPage.login();
    const card = await landingPage.verifyCard("In Progress", "Design system updates");
    await landingPage.verifyTag(card, "Design");
});

// Test 4 - Placeholder
test('Test 4 - Description of the test', async ({ page }) => {
    // Add your test implementation here
});

// Test 5 - Placeholder
test('Test 5 - Description of the test', async ({ page }) => {
    // Add your test implementation here
});
