<script lang="ts">
  export let difficulty: string;

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

  $: difficultyColor = ((d) => {
    switch (d) {
      case 'very_easy':
        return 'bg-sky';

      case 'easy':
        return 'bg-green';

      case 'medium':
        return 'bg-yellow';

      case 'hard':
        return 'bg-red';

      default:
        return 'bg-flamingo';
    }
  })(difficulty);
</script>

<div
  class={`p-1 rounded-2xl ${difficultyColor} shadow shadow-white inline`}
  title={`${difficulty} difficulty`}
>
  {difficultyEmoji}
</div>
