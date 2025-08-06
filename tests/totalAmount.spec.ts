import { test } from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/login';
import { AmountTest } from '../pages/amountTest';

// dotenv.config();

test('Total Amounts', async ({ page }) => {
  const login = new LoginPage(page);
  const amountTest = new AmountTest(page);

  const url = process.env.BASE_URL;
  const username = process.env.USERID;
  const password = process.env.PASSWORD;

  console.log(username,password);

  await page.waitForLoadState('domcontentloaded');

  await login.visitPage(url!); 
  await login.loginFunction(username!, password!);

  await page.waitForLoadState('domcontentloaded');

  await amountTest.navigateToCommisionAdjusting();

  await amountTest.makeTotalAmount('400','400','400', '400');

});
