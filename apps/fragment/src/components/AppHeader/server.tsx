import { Hono } from 'hono';
import { AppHeader, AppHeaderSchema } from '@/src/components/AppHeader';
import { validator } from 'hono/validator';
import { renderToString } from 'react-dom/server';

export const AppHeaderRenderer = new Hono();

AppHeaderRenderer.get(
  '/',
  validator('query', (value, c) => {
    const { data, error } = AppHeaderSchema.safeParse(value);

    if (error) return c.json({ message: 'Invalid query parameters' }, 400);

    return data;
  }),
  (c) => {
    const { name } = c.req.valid('query');
    const html = renderToString(<AppHeader name={name} />);

    return c.html(html);
  }
);
