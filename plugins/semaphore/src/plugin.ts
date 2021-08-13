import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const semaphorePlugin = createPlugin({
  id: 'semaphore',
  routes: {
    root: rootRouteRef,
  },
});

export const SemaphorePage = semaphorePlugin.provide(
  createRoutableExtension({
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
