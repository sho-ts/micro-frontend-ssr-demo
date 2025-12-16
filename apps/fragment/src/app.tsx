import { Hono } from 'hono';
import { AppHeaderRenderer } from './components/AppHeader/renderer';

export const app = new Hono();

app.route('AppHeader', AppHeaderRenderer);

export default app;
