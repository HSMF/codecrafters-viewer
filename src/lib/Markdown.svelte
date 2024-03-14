<script lang="ts">
  import sanitizeHtml from 'sanitize-html';
  import Mustache from 'mustache';

  import { marked } from 'marked';
  import { language } from '../routes/stores';
  export let markdown: string;

  function preprocess(s: string, lang: string): string {
    const view: Record<string, unknown> = {};
    view[`lang_is_${lang}`] = true;
    return Mustache.render(s, view);
  }

  function markd(s: string): string {
    const parsed = marked.parse(s, { async: false });
    if (typeof parsed !== 'string') {
      throw 'cannot be async';
    }

    return sanitizeHtml(parsed);
  }
</script>

<div class="markdown">
  {@html markd(preprocess(markdown, $language))}
</div>
