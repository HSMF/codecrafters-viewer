import type { PageServerLoad } from './$types';
import { readFile, readdir } from 'node:fs/promises';
import yaml from 'js-yaml';
import { courseDefinition } from '$lib/types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async (data) => {
  const dir = await readdir('./courses');
  if (dir.find(x => x === `${data.params.course}.yml`) === undefined) {
    error(404, { message: 'course not found' });
  }
  const definition = await readFile(`./courses/${data.params.course}.yml`);
  const foo = yaml.load(definition.toString());

  return {
    course: courseDefinition.parse(foo)
  };
};
