import { test, expect } from '@playwright/test';

test.describe('bbva-game', () => {
  test('selecciona dificultad medium, juega y detiene el juego', async ({
    page,
  }) => {
    await page.goto('http://localhost:5173');
    const input = page.locator('input[name="username"]');
    const button = page.getByRole('button', { name: 'Join' });
    await input.fill('Pepe');
    await button.click();

    await expect(page.getByText(/select the 'level'/i)).toBeVisible();

    const select = page.locator('select[name="difficulty"]');
    await select.selectOption('medium');

    const playButton = page.getByRole('button', { name: 'Play' });
    await playButton.click();

    const stopButton = page.getByRole('button', { name: 'Stop' });
    await expect(stopButton).toBeVisible();
    await stopButton.click();

    await expect(playButton).toBeVisible();
  });

  test('selecciona dificultad high y elige una carta', async ({ page }) => {
    await page.goto('http://localhost:5173');
    const input = page.locator('input[name="username"]');
    const button = page.getByRole('button', { name: 'Join' });
    await input.fill('Pepe');
    await button.click();

    const select = page.locator('select[name="difficulty"]');
    await select.selectOption('high');

    const playButton = page.getByRole('button', { name: 'Play' });
    await playButton.click();

    const cards = page.locator('bbva-game-card');
    await expect(cards.first()).toBeVisible();
    await expect(cards).toHaveCount(9);

    await cards.nth(0).click();

    await page.waitForTimeout(3000);

    await expect(page.getByRole('button', { name: 'Stop' })).toBeVisible();
  });

  test('inicia una partida y ver cartas cuando esten dadas la vuelta', async ({
    page,
  }) => {
    await page.goto('http://localhost:5173');
    const input = page.locator('input[name="username"]');
    const button = page.getByRole('button', { name: 'Join' });
    await input.fill('Pepe');
    await button.click();

    const select = page.locator('select[name="difficulty"]');
    await select.selectOption('high');

    const playButton = page.getByRole('button', { name: 'Play' });
    await playButton.click();

    const cards = page.locator('bbva-game-card');

    await expect(cards).toHaveCount(9);
    await expect(cards.first()).toBeVisible();

    await page.waitForFunction(() => {
      const cards = Array.from(document.querySelectorAll('bbva-game-card'));
      return cards.every((el) => el.hasAttribute('isflipped'));
    });

    await page.waitForFunction(() => {
      const game = document.querySelector('bbva-game');
      return game!['isFlippeable'] === true;
    });

    await cards.nth(0).click();

    await expect(cards.nth(0)).toBeVisible();
  });
});
