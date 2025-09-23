<script lang="ts">
  import Section from '$lib/components/Section.svelte';
  import BlogCard from '$lib/components/blog/BlogCard.svelte';
  import Pagination from '$lib/components/blog/Pagination.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Blog - Sivam Pasupathipillai</title>
  <meta
    name="description"
    content="Personal blog of Sivam Pasupathipillai - thoughts on AI, data science, and technology."
  />
</svelte:head>

<Section id="blog-hero" background="dark">
  <div class="blog-hero-content">
    <h1>Blog</h1>
    <p class="blog-hero-description">
      Thoughts on AI, data science, technology, and the journey of turning research into practical
      solutions.
    </p>
  </div>
</Section>

<Section id="blog-posts" background="light">
  {#if data.posts.length > 0}
    <div class="blog-posts-grid">
      {#each data.posts as post}
        <BlogCard {post} />
      {/each}
    </div>

    <Pagination pagination={data.pagination} />
  {:else}
    <div class="no-posts">
      <h3>No blog posts yet</h3>
      <p>Check back soon for new content!</p>
    </div>
  {/if}
</Section>

<style>
  .blog-hero-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }

  .blog-hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
    color: white;
  }

  .blog-hero-description {
    font-size: 1.1rem;
    opacity: 0.9;
    line-height: 1.6;
    color: white;
  }

  .blog-posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .no-posts {
    text-align: center;
    padding: 4rem 2rem;
    color: #4b5563;
  }

  .no-posts h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #1f2937;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .blog-hero-content h1 {
      font-size: 2.5rem;
    }

    .blog-posts-grid {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .blog-hero-content h1 {
      font-size: 2rem;
    }

    .blog-hero-description {
      font-size: 1rem;
    }

    .blog-posts-grid {
      gap: 1rem;
    }

    .no-posts {
      padding: 3rem 1rem;
    }
  }
</style>
