<script lang="ts">
  import Markdown from '$lib/Markdown.svelte';
  import Stage from '$lib/Stage.svelte';
  import type { PageData } from './$types';
  import { language } from '../stores';

  export let data: PageData;
  const course = data.course;
</script>

<svelte:head>
  <title>Build your own {course.short_name}</title>
</svelte:head>

<div class="flex justify-center">
  <div class="max-w-xl py-5">
    <h1 class="text-4xl pb-2">{course.name}</h1>

    <Markdown markdown={course.description_md} />

    <section class="rounded-md shadow-md p-2">
      <h2>available for</h2>
      <ul>
        {#each course.languages as lang}
          <li
            class="rounded-md py-1 px-2 hover:bg-red/50"
            class:bg-primary={lang.slug === $language}
          >
            <button
              class="w-full"
              on:click={() => {
                language.set(lang.slug);
              }}
            >
              {lang.slug}
            </button>
          </li>
        {/each}
      </ul>
    </section>

    {#each course.stages as { name, slug, difficulty, description_md: description }}
      <Stage {name} {slug} {difficulty} {description} />
    {/each}
  </div>
</div>
