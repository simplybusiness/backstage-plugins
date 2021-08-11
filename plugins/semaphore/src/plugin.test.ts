import { semaphorePlugin } from './plugin';

describe('semaphore', () => {
  it('should export plugin', () => {
    expect(semaphorePlugin).toBeDefined();
  });
});
