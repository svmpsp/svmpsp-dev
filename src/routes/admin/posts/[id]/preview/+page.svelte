<script lang="ts">
  import BlogPost from '$lib/components/blog/BlogPost.svelte';
  import Button from '$lib/components/Button.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<svelte:head>
  <title>Preview: {data.post.title} - Admin Dashboard</title>
</svelte:head>

<div class="preview-page">
  <div class="preview-header">
    <div class="preview-notice">
      <span class="preview-badge">Preview Mode</span>
      {#if !data.post.published}
        <span class="draft-badge">Draft</span>
      {/if}
    </div>
    <div class="preview-actions">
      <Button href="/admin/posts/{data.post.id}/edit" variant="admin-secondary">Edit Post</Button>
      <Button href="/admin/posts" variant="admin-secondary">Back to Posts</Button>
    </div>
  </div>

  <div class="preview-content">
    <BlogPost post={data.post} />
  </div>
</div>

<style>
  .preview-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
  }

  .preview-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1rem;
    background: #f8fafc;
    border-radius: 8px;
    border: 1px solid #e2e8f0;
  }

  .preview-notice {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .preview-badge {
    background: #0f766e;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .draft-badge {
    background: #d97706;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 500;
  }

  .preview-actions {
    display: flex;
    gap: 1rem;
  }

  .preview-content {
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .preview-header {
      flex-direction: column;
      gap: 1rem;
      align-items: stretch;
    }

    .preview-actions {
      justify-content: space-between;
    }

    .preview-page {
      padding: 0.5rem;
    }
  }

  @media (max-width: 480px) {
    .preview-actions {
      flex-direction: column;
    }
  }
</style>
