import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { AppHeader, AppHeaderSchema } from './components/AppHeader';
import { defineServerSideComponent } from './ssr';
import packageJson from '../package.json';

const version = packageJson.version ?? 'unknown';

if (version === 'unknown') {
  console.warn(
    '[warning] The version of fragment app is unknown. Please make sure that the version is correctly set in package.json.'
  );
}

export const app = new Hono();

app.use('*', cors());

app.get('/meta', (c) => {
  return c.json({
    version,
  });
});

const ssrComponents = [
  {
    route: 'AppHeader',
    component: AppHeader,
    schema: AppHeaderSchema,
  },
];

ssrComponents.forEach(({ route, component, schema }) =>
  defineServerSideComponent(app, route, component, schema)
);
