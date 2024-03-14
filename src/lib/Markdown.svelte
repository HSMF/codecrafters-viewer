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

    return sanitizeHtml(parsed, {
      allowedTags: [
        'address',
        'article',
        'aside',
        'footer',
        'header',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'hgroup',
        'main',
        'nav',
        'section',
        'blockquote',
        'dd',
        'div',
        'dl',
        'dt',
        'figcaption',
        'figure',
        'hr',
        'li',
        'main',
        'ol',
        'p',
        'pre',
        'ul',
        'a',
        'abbr',
        'b',
        'bdi',
        'bdo',
        'br',
        'cite',
        'code',
        'data',
        'dfn',
        'em',
        'i',
        'kbd',
        'mark',
        'q',
        'rb',
        'rp',
        'rt',
        'rtc',
        'ruby',
        's',
        'samp',
        'small',
        'span',
        'strong',
        'sub',
        'sup',
        'time',
        'u',
        'var',
        'wbr',
        'caption',
        'col',
        'colgroup',
        'table',
        'tbody',
        'td',
        'tfoot',
        'th',
        'thead',
        'tr',
        "summary",
        "details"
      ]
    });
  }
</script>

<div class="markdown">
  {@html markd(preprocess(markdown, $language))}
</div>
