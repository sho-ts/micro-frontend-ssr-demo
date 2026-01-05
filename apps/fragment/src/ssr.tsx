import { Hono } from 'hono';
import { validator } from 'hono/validator';
import { renderToString } from 'react-dom/server';
import z from 'zod';

export const defineServerSideComponent = <T extends z.ZodObject<Record<string, z.ZodType>>>(
  router: Hono,
  route: string,
  Component: (props: z.infer<T>) => React.ReactNode,
  schema?: T
) => {
  router.get(
    `/${route}`,
    validator('query', (value, c) => {
      const result = schema?.safeParse(value);

      if (result?.error) return c.json({ message: 'Invalid query parameters' }, 400);

      return result?.data;
    }),
    (c) => {
      const props = c.req.valid('query') as z.infer<T>;
      const html = renderToString(<Component {...props} />);

      return c.html(html);
    }
  );
};
