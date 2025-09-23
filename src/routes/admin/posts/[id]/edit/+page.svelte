<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/components/Button.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  let title = data.post.title;
  let content = data.post.content;
  let excerpt = data.post.excerpt || '';
  let published = data.post.published;
  let loading = false;
  let error = '';

  async function updatePost(publishNow?: boolean) {
    if (!title.trim() || !content.trim()) {
      error = 'Title and content are required';
      return;
    }

    loading = true;
    error = '';

    try {
      const response = await fetch(`/api/posts/${data.post.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.trim(),
          content: content.trim(),
          excerpt: excerpt.trim() || null,
          published: publishNow !== undefined ? publishNow : published,
        }),
      });

      if (response.ok) {
        const updatedPost = await response.json();
        goto('/admin/posts');
      } else {
        const errorData = await response.json();
        error = errorData.error || 'Failed to update post';
      }
    } catch (e) {
      error = 'An error occurred while updating the post';
    } finally {
      loading = false;
    }
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 's') {
      event.preventDefault();
      updatePost();
    }
  }
</script>

<svelte:head>
  <title>Edit: {data.post.title} - Admin Dashboard</title>
</svelte:head>

<svelte:window on:keydown={handleKeydown} />

<div class="edit-post-page">
  <div class="post-header">
    <h1>Edit Post</h1>
    <div class="header-actions">
      <Button href="/admin/posts" variant="admin-secondary">Cancel</Button>
      {#if data.post.published}
        <Button href="/blog/{data.post.slug}" variant="admin-secondary" target="_blank"
          >View Post</Button
        >
      {:else}
        <Button href="/admin/posts/{data.post.id}/preview" variant="admin-secondary" target="_blank"
          >Preview Draft</Button
        >
      {/if}
    </div>
  </div>

  {#if error}
    <div class="error-message">
      {error}
    </div>
  {/if}

  <form
    class="post-form"
    onsubmit={(e) => {
      e.preventDefault();
      updatePost();
    }}
  >
    <div class="form-group">
      <label for="title">Title *</label>
      <input
        id="title"
        type="text"
        bind:value={title}
        required
        disabled={loading}
        placeholder="Enter your post title"
        class="title-input"
      />
    </div>

    <div class="form-group">
      <label for="excerpt">Excerpt</label>
      <textarea
        id="excerpt"
        bind:value={excerpt}
        disabled={loading}
        placeholder="Optional brief description of your post (appears in post previews)"
        rows="3"
      ></textarea>
    </div>

    <div class="form-group">
      <label for="content">Content *</label>
      <textarea
        id="content"
        bind:value={content}
        required
        disabled={loading}
        placeholder="Write your post content here... (Markdown supported)"
        rows="20"
        class="content-textarea"
      ></textarea>
      <p class="help-text">
        You can use Markdown syntax for formatting. Press Ctrl+S to save changes.
      </p>
    </div>

    <div class="form-group">
      <label class="checkbox-label">
        <input type="checkbox" bind:checked={published} disabled={loading} />
        Published
      </label>
      <p class="help-text">
        {published
          ? 'This post is currently visible to visitors'
          : 'This post is currently saved as a draft'}
      </p>
    </div>

    <div class="form-actions">
      <button type="submit" class="save-btn update" disabled={loading}>
        {loading ? 'Saving...' : 'Save Changes'}
      </button>
      {#if !published}
        <button
          type="button"
          class="save-btn publish"
          disabled={loading}
          onclick={() => updatePost(true)}
        >
          {loading ? 'Publishing...' : 'Save & Publish'}
        </button>
      {:else}
        <button
          type="button"
          class="save-btn unpublish"
          disabled={loading}
          onclick={() => updatePost(false)}
        >
          {loading ? 'Unpublishing...' : 'Save as Draft'}
        </button>
      {/if}
    </div>
  </form>
</div>

<style>
  .edit-post-page {
    max-width: 800px;
    margin: 0 auto;
  }

  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .post-header h1 {
    color: #1f2937;
    margin: 0;
  }

  .header-actions {
    display: flex;
    gap: 1rem;
  }

  .error-message {
    background: #fef2f2;
    color: #dc2626;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    border: 1px solid #fecaca;
  }

  .post-form {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .form-group {
    margin-bottom: 2rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #1f2937;
    font-weight: 500;
  }

  .form-group input[type='text'],
  .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s ease;
    box-sizing: border-box;
    font-family: inherit;
  }

  .title-input {
    font-size: 1.25rem;
    font-weight: 600;
    padding: 1rem;
  }

  .content-textarea {
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    line-height: 1.6;
    resize: vertical;
    min-height: 400px;
  }

  .form-group input[type='text']:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #0f766e;
    box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.1);
  }

  .checkbox-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    font-weight: 500;
  }

  .checkbox-label input[type='checkbox'] {
    width: auto;
  }

  .help-text {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0;
  }

  .form-actions {
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;
  }

  .save-btn {
    padding: 0.75rem 2rem;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 140px;
  }

  .save-btn.update {
    background: #0f766e;
    color: white;
  }

  .save-btn.update:hover:not(:disabled) {
    background: #134e4a;
    transform: translateY(-1px);
  }

  .save-btn.publish {
    background: #059669;
    color: white;
  }

  .save-btn.publish:hover:not(:disabled) {
    background: #047857;
    transform: translateY(-1px);
  }

  .save-btn.unpublish {
    background: #d97706;
    color: white;
  }

  .save-btn.unpublish:hover:not(:disabled) {
    background: #b45309;
    transform: translateY(-1px);
  }

  .save-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .post-header {
      flex-direction: column;
      gap: 1rem;
      align-items: stretch;
    }

    .header-actions {
      justify-content: space-between;
    }

    .form-actions {
      flex-direction: column;
    }

    .save-btn {
      width: 100%;
    }

    .edit-post-page {
      padding: 0 1rem;
    }

    .post-form {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .content-textarea {
      min-height: 300px;
    }

    .title-input {
      font-size: 1.125rem;
    }

    .header-actions {
      flex-direction: column;
    }
  }
</style>
