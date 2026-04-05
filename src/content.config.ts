import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    categories: z.array(z.string()).optional(),
    parentCategory: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts };