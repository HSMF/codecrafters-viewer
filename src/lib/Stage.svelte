<script lang="ts">
  import Markdown from './Markdown.svelte';

  export let slug: string;
  export let name: string;
  export let difficulty: string;
  export let description: string;
  export let collapsed: boolean = false;

  $: difficultyEmoji = ((d) => {
    switch (d) {
      case 'very_easy':
        return '🐤';

      case 'easy':
        return '🐔';

      case 'medium':
        return '👷';

      case 'hard':
        return '🚨';

      default:
        return '?';
    }
  })(difficulty);
</script>

<section id={slug}>
  <h2 class="text-xl text-primary rounded-md py-4">
    <a class="hover:underline" href={`#${slug}`}
      >{name} <span title={`Difficulty ${difficulty}`}>{difficultyEmoji}</span></a
    >
  </h2>

  {#if !collapsed}
    <div>
      <Markdown markdown={description} />
    </div>

    <button
      class="bg-lavender px-4 py-2 rounded-lg mt-4 text-crust shadow-sm shadow-sapphire"
      on:click={() => {
        alert('imagine we have some automatic tests running');
      }}>Done!</button
    >
  {/if}
</section>
