import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('se redirige a "/game" cuando se introduce un nombre válido', async ({
    page,
  }) => {
    await page.goto('http://localhost:5173');

    const input = page.locator('input[name="username"]');
    const button = page.getByRole('button', { name: 'Join' });

    await input.fill('Pepe');
    await button.click();

    await expect(page).toHaveURL(/\/game\?username=Pepe/);
  });

  test('se muestra un mensaje de error si el nombre es inválido', async ({
    page,
  }) => {
    await page.goto('http://localhost:5173');

    const input = page.locator('input[name="username"]');
    await input.fill('123');

    const button = page.getByRole('button', { name: 'Join' });
    await button.click();

    await expect(input).toHaveJSProperty(
      'validationMessage',
      'Enter a valid name',
    );
  });
});
