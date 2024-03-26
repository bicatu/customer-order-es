import { getApplication, startAPI } from '@event-driven-io/emmett-expressjs';
import type { Application } from 'express';
import type { Server } from 'http';
import { getInMemoryEventStore } from '@event-driven-io/emmett';
import { OrdersApi } from './routes';

const fraudCaseApis = OrdersApi(
  getInMemoryEventStore(),
);

const application: Application = getApplication({
  apis: [fraudCaseApis],
});

const server: Server = startAPI(application);