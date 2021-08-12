import { SemaphorePage, semaphorePlugin } from './index';

describe('The Semaphore index page', () => {
  it('exports the plugin and page', async () => {
    expect(SemaphorePage).toBeTruthy()
    expect(semaphorePlugin).toBeTruthy()
  });
});
