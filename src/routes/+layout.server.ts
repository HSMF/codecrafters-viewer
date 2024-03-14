import { readFile, readdir } from "node:fs/promises";
import type { LayoutServerLoad } from "./$types";
import yaml from 'js-yaml'
import { courseDefinition } from "$lib/types";

export const load: LayoutServerLoad = async () => {
  const dir = await readdir('./courses');
  const courses = [];
  for (const course of dir) {
    const definition = await readFile(`./courses/${course}`);
    const loaded = courseDefinition.parse(yaml.load(definition.toString()));
    courses.push({
      description: loaded.short_description_md,
      slug: loaded.slug,
      shortName: loaded.short_name
    })
  }

  return {
    courses
  };
}
