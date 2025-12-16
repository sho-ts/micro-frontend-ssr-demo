import { Hono } from 'hono';
import { AppHeader } from '@/src/components/AppHeader';
import { validator } from 'hono/validator';
import { renderToString } from 'react-dom/server';
import z from 'zod';

export const AppHeaderRenderer = new Hono();

const schema = z.object({
  name: z.string().min(1),
});

AppHeaderRenderer.get(
  '/',
  validator('query', (value, c) => {
    const { data, error } = schema.safeParse(value);

    if (error) return c.json({ message: 'Invalid query parameters' }, 401);

    return data;
  }),
  (c) => {
    const { name } = c.req.valid('query');
    const html = renderToString(<AppHeader name={name} />);

    return c.html(html);
  }
);
