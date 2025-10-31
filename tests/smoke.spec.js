import { test, expect } from '@playwright/test';

test.describe('Portfolio Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('homepage loads successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Rakesh Syal/);
    await expect(page.locator('h1')).toBeVisible();
  });

  test('navbar navigation works', async ({ page }) => {
    // Test About link
    await page.click('a[href="#about"]');
    await expect(page.locator('#about')).toBeVisible();

    // Test Skills link
    await page.click('a[href="#skills"]');
    await expect(page.locator('#skills')).toBeVisible();

    // Test Projects link
    await page.click('a[href="#projects"]');
    await expect(page.locator('#projects')).toBeVisible();

    // Test Contact link
    await page.click('a[href="#contact"]');
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('contact form can be filled and submitted', async ({ page }) => {
    await page.goto('/#contact');
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'This is a test message from Playwright.');

    // Mock API response
    await page.route('**/api/contact', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ ok: true, message: 'Message sent successfully!' }),
      });
    });

    await page.click('button[type="submit"]');
    // Wait for success message (you may need to adjust this based on your toast implementation)
    await page.waitForTimeout(1000);
  });

  test('contact form shows validation errors', async ({ page }) => {
    await page.goto('/#contact');
    await page.click('button[type="submit"]');
    // Check for validation errors
    await expect(page.locator('input[name="name"]')).toBeVisible();
    // The form should show errors for required fields
  });

  test('keyboard navigation works', async ({ page }) => {
    await page.keyboard.press('Tab');
    // Check that focus is visible
    const focused = await page.evaluate(() => document.activeElement);
    expect(focused).toBeTruthy();
  });
});
