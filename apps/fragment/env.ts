import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  client: {
    VITE_APP_PORT: z
      .string()
      .min(2)
      .max(5)
      .refine((v) => !Number.isNaN(Number(v)))
      .transform((v) => Number(v)),
    VITE_APP_URL: z.url(),
  },
  clientPrefix: 'VITE_',
  runtimeEnv: import.meta.env,
  emptyStringAsUndefined: true,
});
