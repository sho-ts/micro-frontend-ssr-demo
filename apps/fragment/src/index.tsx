import { app } from './app';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { env } from '@/env';

app.use('/static/*', serveStatic({ root: './' }));

serve({
  fetch: app.fetch,
  port: env.APP_PORT,
});
