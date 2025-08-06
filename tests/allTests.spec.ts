import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/login';
import { AmountTest } from '../pages/amountTest';

dotenv.config();

const url = process.env.BASE_URL;
const username = process.env.USERID;
const password = process.env.PASSWORD;

if (!url || !username || !password) {
  throw new Error("Missing environment variables: BASE_URL, USERID, or PASSWORD");
}

test.describe('End-to-End Amount Adjustment Tests', () => {
  let amountTest: AmountTest;

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    amountTest = new AmountTest(page);

    await loginPage.visitPage(url);
    await loginPage.loginFunction(username, password);
    await amountTest.navigateToCommisionAdjusting();
  });

  test('Mix amount and percentage', async () => {
    await amountTest.mixAmountAndPercentage('400', '400');
    // const result = await amountTest.getCalculatedMix();
    // expect(result).toBe('ExpectedValue');
  });

  test('Total amount calculation', async () => {
    await amountTest.makeTotalAmount('400', '400', '400', '400');
    // const total = await amountTest.getTotalAmountDisplayed();
    // expect(total).toBe('1600');
  });

  test('Total percentage calculation', async () => {
    await amountTest.makeTotalPercentage('25', '25', '25', '25');
    // const percent = await amountTest.getPercentageDisplayed();
    // expect(percent).toBe('100');
  });

  //  Clean-up after each test
  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      console.log(`Test failed: ${testInfo.title}`);
      await page.screenshot({ path: `screenshots/${testInfo.title.replace(/\s+/g, '_')}.png`, fullPage: true });
    } else {
      console.log(`Test passed: ${testInfo.title}`);
    }

    await page.close(); // Cleanup browser page
  });
});
