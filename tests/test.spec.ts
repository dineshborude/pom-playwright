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

test.describe('End-to-End Amount Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.visitPage(url);
    await loginPage.loginFunction(username, password);
  });

  test('Mix: Amount + Percentage', async ({ page }) => {
    const amountTest = new AmountTest(page);
    await page.waitForTimeout(5000); 
    await amountTest.mixAmountAndPercentage('400', '400');
  });

  test('Total Amount', async ({ page }) => {
    const amountTest = new AmountTest(page);
    await page.waitForTimeout(5000);
    await amountTest.makeTotalAmount('400', '400', '400', '400');
  });

  test('Total Percentage', async ({ page }) => {
    const amountTest = new AmountTest(page);
    await page.waitForTimeout(5000);
    await amountTest.makeTotalPercentage('25', '25', '25', '25');
  });
});
