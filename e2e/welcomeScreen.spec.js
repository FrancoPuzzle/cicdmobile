describe('Welcome Screen Test', () => {
  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  it('Should show the Welcome Screen', async () => {
    await expect(element(by.id('welcome_screen'))).toBeVisible();
  });

  it('Should have the Puzzle logo', async () => {
    await expect(element(by.id('puzzle_logo'))).toBeVisible();
  });

  it('Should have a specific welcome text', async () => {
    await expect(
      element(by.text(`REACT NATIVE TYPESCRIPT\nPUZZLE v0.63.4 JANUARY 2021`)),
    ).toBeVisible();
  });

  it('Should have a Go To Sign In button', async () => {
    await expect(element(by.id('go_to_signin_button'))).toBeVisible(); // Code driven
    await expect(element(by.text('Go To Sign In'))).toBeVisible(); // UI-UX driven
  });
});
