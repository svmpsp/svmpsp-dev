<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import BlogPost from '$lib/components/blog/BlogPost.svelte';
  import Button from '$lib/components/Button.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
</script>

<svelte:head>
  <title>{data.post.title} - Sivam Pasupathipillai</title>
  <meta name="description" content={data.post.excerpt || `Blog post: ${data.post.title}`} />
  <meta property="og:title" content={data.post.title} />
  <meta property="og:description" content={data.post.excerpt || `Blog post: ${data.post.title}`} />
  <meta property="og:type" content="article" />
  <meta property="article:published_time" content={data.post.createdAt.toISOString()} />
  <meta property="article:modified_time" content={data.post.updatedAt.toISOString()} />
</svelte:head>

<Section background="light">
  <div class="blog-post-container">
    <div class="blog-post-navigation">
      <Button href="/blog" variant="secondary">← Back to Blog</Button>
    </div>

    <BlogPost post={data.post} />

    <div class="blog-post-footer">
      <div class="blog-post-meta">
        <p>Published on {formatDate(data.post.createdAt)}</p>
        {#if data.post.updatedAt.getTime() !== data.post.createdAt.getTime()}
          <p>Updated on {formatDate(data.post.updatedAt)}</p>
        {/if}
      </div>

      <div class="blog-post-actions">
        <Button href="/blog" variant="primary">Read More Posts</Button>
        <Button href="/#contact" variant="secondary">Get in Touch</Button>
      </div>
    </div>
  </div>
</Section>

<style>
  .blog-post-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .blog-post-navigation {
    margin-bottom: 2rem;
  }

  .blog-post-footer {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;
    text-align: center;
  }

  .blog-post-meta {
    margin-bottom: 2rem;
    color: #4b5563;
    font-size: 0.9rem;
  }

  .blog-post-meta p {
    margin: 0.5rem 0;
  }

  .blog-post-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .blog-post-container {
      padding: 0 1rem;
    }

    .blog-post-actions {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    .blog-post-actions {
      gap: 0.75rem;
    }
  }
</style>
