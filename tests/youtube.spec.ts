import { test, expect } from '@playwright/test';

test('YouTube homepage loads', async ({ page }) => {
  await page.goto('https://www.youtube.com');

  const acceptButton = page.locator('button:has-text("Accept")');
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }

test('YouTube search works', async ({ page }) => {
  await page.goto('https://www.youtube.com');

  const acceptButton = page.locator('button:has-text("Accept")');
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }

  await page.fill('input[name="search_query"]', 'playwright testing');
  await page.keyboard.press('Enter');

  await expect(page).toHaveURL(/search/);

  const results = page.locator('ytd-video-renderer');
  await expect(results.first()).toBeVisible();
  }

test('User can click a video from search results', async ({ page }) => {
  await page.goto('https://www.youtube.com');

  await page.fill('input[name="search_query"]', 'playwright');
  await page.keyboard.press('Enter');

  const firstVideo = page.locator('ytd-video-renderer').first();
  await firstVideo.click();

  await expect(page).toHaveURL(/watch/);
});
