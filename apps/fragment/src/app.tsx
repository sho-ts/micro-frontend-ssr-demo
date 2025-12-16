import { Hono } from 'hono';
import { AppHeaderRenderer } from '@/src/components/AppHeader/server';

export const app = new Hono();

app.route('AppHeader', AppHeaderRenderer);

export default app;
