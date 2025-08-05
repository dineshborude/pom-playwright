import { test } from '@playwright/test';
import dotenv from 'dotenv';
import { LoginPage } from '../pages/login';

dotenv.config();

test('Login Test using .env values', async ({ page }) => {
  const login = new LoginPage(page);

  const url = process.env.BASE_URL;
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  await login.visitPage(url!); 
  await login.loginFunction(username!, password!);
});
