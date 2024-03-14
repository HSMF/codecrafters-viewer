<script lang="ts">
  import Markdown from '$lib/Markdown.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<div class="flex justify-center">
  <div class="max-w-xl py-5">
    <h1 class="text-3xl mb-2">My Courses</h1>
    <ul>
      {#each data.courses as course}
        <li class="even:bg-surface0 odd:bg-surface1 rounded-md">
          <a href={`/${course.slug}`} class="hover:underline"
            ><div class="px-4 py-3">
              <h2 class="text-xl">
                {course.shortName}
              </h2>

              <Markdown markdown={course.description} />
            </div></a
          >
        </li>
      {/each}
    </ul>
  </div>
</div>
