import { DemoPage, demoPlugin } from './index';

describe('The demo index page', () => {
  it('exports the plugin and page', async () => {
    expect(DemoPage).toBeTruthy();
    expect(demoPlugin).toBeTruthy();
  });
});
