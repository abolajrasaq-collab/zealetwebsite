import { z } from 'zod';

export const BlogIdeationSchema = z.object({
  topic: z.string().min(3, {
    message: "Topic must be at least 3 characters long.",
  }),
});
