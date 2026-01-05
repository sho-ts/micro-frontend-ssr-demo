import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { AppHeader, AppHeaderSchema } from './components/AppHeader';
import { defineServerSideComponent } from './ssr';

export const app = new Hono();

app.use('*', cors());

const ssrComponents = [AppHeader];

ssrComponents.forEach((component) => defineServerSideComponent(app, component, AppHeaderSchema));
