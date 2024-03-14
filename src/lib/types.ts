import { z } from 'zod';
export const courseDefinition = z.object({
  slug: z.string(),
  name: z.string(),
  short_name: z.string(),
  description_md: z.string(),
  short_description_md: z.string(),
  languages: z.object({ slug: z.string(), release_status: z.string().optional() }).array(),

  stages: z.object({
    slug: z.string(),
    name: z.string(),
    difficulty: z.string(),
    description_md: z.string(),
    marketing_md: z.string(),
    tester_source_code_url: z.string().optional()
  }).array(),
});

export type CourseDefinition = z.infer<typeof courseDefinition>
