<script lang="ts">
  import { marked } from 'marked';
  import DOMPurify from 'isomorphic-dompurify';
  import type { BlogPost } from '$lib/types/blog';

  export let post: BlogPost;

  function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  $: htmlContent = DOMPurify.sanitize(String(marked.parse(post.content)));
</script>

<article class="blog-post">
  <header class="blog-post-header">
    <div class="blog-post-meta">
      <time class="blog-post-date">{formatDate(post.createdAt)}</time>
    </div>
    <h1 class="blog-post-title">{post.title}</h1>
    {#if post.excerpt}
      <p class="blog-post-excerpt">{post.excerpt}</p>
    {/if}
  </header>

  <div class="blog-post-content">
    {@html htmlContent}
  </div>
</article>

<style>
  .blog-post {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
  }

  .blog-post-header {
    margin-bottom: 3rem;
    text-align: center;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 2rem;
  }

  .blog-post-meta {
    margin-bottom: 1rem;
  }

  .blog-post-date {
    color: #0f766e;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .blog-post-title {
    font-size: 2.5rem;
    color: #1f2937;
    margin-bottom: 1rem;
    line-height: 1.2;
    font-weight: 700;
  }

  .blog-post-excerpt {
    color: #4b5563;
    font-size: 1.1rem;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
  }

  .blog-post-content {
    color: #374151;
    line-height: 1.7;
    font-size: 1.1rem;
  }

  .blog-post-content :global(h1),
  .blog-post-content :global(h2),
  .blog-post-content :global(h3),
  .blog-post-content :global(h4) {
    color: #1f2937;
    margin-top: 2rem;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .blog-post-content :global(h1) {
    font-size: 2rem;
  }

  .blog-post-content :global(h2) {
    font-size: 1.7rem;
  }

  .blog-post-content :global(h3) {
    font-size: 1.4rem;
  }

  .blog-post-content :global(h4) {
    font-size: 1.2rem;
  }

  .blog-post-content :global(p) {
    margin-bottom: 1.5rem;
  }

  .blog-post-content :global(a) {
    color: #0f766e;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease;
  }

  .blog-post-content :global(a:hover) {
    border-color: #0f766e;
  }

  .blog-post-content :global(code) {
    background: #f3f4f6;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9em;
    color: #dc2626;
  }

  .blog-post-content :global(pre) {
    background: #1f2937;
    color: #f9fafb;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5rem 0;
  }

  .blog-post-content :global(pre code) {
    background: none;
    padding: 0;
    color: inherit;
  }

  .blog-post-content :global(blockquote) {
    border-left: 4px solid #0f766e;
    padding-left: 1.5rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #4b5563;
  }

  .blog-post-content :global(ul),
  .blog-post-content :global(ol) {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  .blog-post-content :global(li) {
    margin-bottom: 0.5rem;
  }

  .blog-post-content :global(img) {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1.5rem 0;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .blog-post {
      padding: 1.5rem;
    }

    .blog-post-title {
      font-size: 2rem;
    }

    .blog-post-content {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .blog-post {
      padding: 1rem;
    }

    .blog-post-title {
      font-size: 1.7rem;
    }
  }
</style>
