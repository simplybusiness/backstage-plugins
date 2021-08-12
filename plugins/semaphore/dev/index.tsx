import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { semaphorePlugin, SemaphorePage } from '../src';

createDevApp()
  .registerPlugin(semaphorePlugin)
  .addPage({
    element: <SemaphorePage />,
    title: 'Root Page',
    path: '/semaphore',
  })
  .render();
