import { Hono } from 'hono';
import { AppHeaderRenderer } from '@/src/components/AppHeader/server';
import { cors } from 'hono/cors'

export const app = new Hono();

app.use('*', cors());
app.route('AppHeader', AppHeaderRenderer);

export default app;
