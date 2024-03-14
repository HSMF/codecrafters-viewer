import type { PageServerLoad } from './$types';
import { readFile } from 'node:fs/promises';
import yaml from 'js-yaml';
import { z } from 'zod';

export const load: PageServerLoad = async () => {
  const definition = await readFile('./course-definition.yml');
  const foo = yaml.load(definition.toString());
  const schema = z.object({
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
      tester_source_code_url: z.string()
    }).array(),
  });

  return {
    course: schema.parse(foo)
  };
};
