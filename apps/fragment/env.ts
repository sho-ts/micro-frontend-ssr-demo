import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {
    APP_PORT: z
      .string()
      .min(2)
      .max(5)
      .refine((v) => !Number.isNaN(Number(v)))
      .transform((v) => Number(v)),
    APP_URL: z.url(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
  skipValidation: process.env.NODE_ENV === 'test',
});
