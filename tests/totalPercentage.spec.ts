import { test } from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/login';
import { AmountTest } from '../pages/amountTest';

dotenv.config();

test('Total Percentages', async ({ page }) => {
  const login = new LoginPage(page);
  const amountTest = new AmountTest(page);

  const url = process.env.BASE_URL;
  const username = process.env.USERID;
  const password = process.env.PASSWORD;

  console.log(username,password);

  await login.visitPage(url!); 
  await login.loginFunction(username!, password!);

  await amountTest.makeTotalPercentage('25','25','25','25');

});
