<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import type { PageData } from './$types';

  export let data: PageData;

  let loading = false;
  let message = '';

  function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  async function deletePost(id: string, title: string) {
    if (!confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
      return;
    }

    loading = true;
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        message = 'Post deleted successfully';
        // Reload the page to refresh the posts list
        window.location.reload();
      } else {
        const error = await response.json();
        message = error.error || 'Failed to delete post';
      }
    } catch (error) {
      message = 'An error occurred while deleting the post';
    } finally {
      loading = false;
    }
  }

  async function togglePublished(id: string, currentStatus: boolean) {
    loading = true;
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          published: !currentStatus,
        }),
      });

      if (response.ok) {
        message = `Post ${!currentStatus ? 'published' : 'unpublished'} successfully`;
        // Reload the page to refresh the posts list
        window.location.reload();
      } else {
        const error = await response.json();
        message = error.error || 'Failed to update post';
      }
    } catch (error) {
      message = 'An error occurred while updating the post';
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Manage Posts - Admin Dashboard</title>
</svelte:head>

<div class="posts-page">
  <div class="posts-header">
    <h1>Manage Posts</h1>
    <Button href="/admin/posts/new" variant="admin-primary">Create New Post</Button>
  </div>

  {#if message}
    <div class="message" class:error={message.includes('error') || message.includes('Failed')}>
      {message}
    </div>
  {/if}

  {#if data.posts.length > 0}
    <div class="posts-list">
      {#each data.posts as post}
        <div class="post-item">
          <div class="post-info">
            <h3>
              <a href="/blog/{post.slug}" target="_blank">
                {post.title}
              </a>
            </h3>
            <p class="post-excerpt">
              {post.excerpt || 'No excerpt available'}
            </p>
            <div class="post-meta">
              <span class="post-status" class:published={post.published}>
                {post.published ? 'Published' : 'Draft'}
              </span>
              <span class="post-date">
                Created {formatDate(post.createdAt)}
              </span>
              {#if post.updatedAt.getTime() !== post.createdAt.getTime()}
                <span class="post-date">
                  Updated {formatDate(post.updatedAt)}
                </span>
              {/if}
            </div>
          </div>
          <div class="post-actions">
            <Button href="/admin/posts/{post.id}/edit" variant="admin-secondary" size="small">
              Edit
            </Button>
            <button
              class="toggle-btn"
              class:publish={!post.published}
              class:unpublish={post.published}
              onclick={() => togglePublished(post.id, post.published)}
              disabled={loading}
            >
              {post.published ? 'Unpublish' : 'Publish'}
            </button>
            <button
              class="delete-btn"
              onclick={() => deletePost(post.id, post.title)}
              disabled={loading}
            >
              Delete
            </button>
          </div>
        </div>
      {/each}
    </div>

    {#if data.pagination.totalPages > 1}
      <div class="pagination">
        {#if data.pagination.hasPrev}
          <Button
            href="/admin/posts?page={data.pagination.currentPage - 1}"
            variant="admin-secondary"
          >
            Previous
          </Button>
        {/if}

        <span class="page-info">
          Page {data.pagination.currentPage} of {data.pagination.totalPages}
        </span>

        {#if data.pagination.hasNext}
          <Button
            href="/admin/posts?page={data.pagination.currentPage + 1}"
            variant="admin-secondary"
          >
            Next
          </Button>
        {/if}
      </div>
    {/if}
  {:else}
    <div class="no-posts">
      <h3>No posts found</h3>
      <p>Start by creating your first blog post!</p>
      <Button href="/admin/posts/new" variant="admin-primary">Create New Post</Button>
    </div>
  {/if}
</div>

<style>
  .posts-page {
    max-width: 1000px;
    margin: 0 auto;
  }

  .posts-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .posts-header h1 {
    color: #1f2937;
    margin: 0;
  }

  .message {
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    background: #f0fdf4;
    color: #166534;
    border: 1px solid #bbf7d0;
  }

  .message.error {
    background: #fef2f2;
    color: #dc2626;
    border-color: #fecaca;
  }

  .posts-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .post-item {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }

  .post-info {
    flex: 1;
  }

  .post-info h3 {
    margin: 0 0 0.5rem 0;
    color: #1f2937;
  }

  .post-info h3 a {
    text-decoration: none;
    color: inherit;
  }

  .post-info h3 a:hover {
    color: #0f766e;
  }

  .post-excerpt {
    color: #4b5563;
    margin: 0 0 1rem 0;
    line-height: 1.6;
  }

  .post-meta {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    align-items: center;
    font-size: 0.875rem;
  }

  .post-status {
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    font-weight: 500;
    background: #f3f4f6;
    color: #4b5563;
  }

  .post-status.published {
    background: #dcfce7;
    color: #166534;
  }

  .post-date {
    color: #6b7280;
  }

  .post-actions {
    display: flex;
    gap: 0.75rem;
    flex-shrink: 0;
    flex-wrap: wrap;
  }

  .toggle-btn,
  .delete-btn {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: 1px solid;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .toggle-btn.publish {
    background: #dcfce7;
    color: #166534;
    border-color: #bbf7d0;
  }

  .toggle-btn.publish:hover {
    background: #bbf7d0;
  }

  .toggle-btn.unpublish {
    background: #fef3c7;
    color: #d97706;
    border-color: #fde68a;
  }

  .toggle-btn.unpublish:hover {
    background: #fde68a;
  }

  .delete-btn {
    background: #fef2f2;
    color: #dc2626;
    border-color: #fecaca;
  }

  .delete-btn:hover {
    background: #fecaca;
  }

  .toggle-btn:disabled,
  .delete-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
  }

  .page-info {
    color: #4b5563;
    font-size: 0.875rem;
  }

  .no-posts {
    text-align: center;
    padding: 4rem 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .no-posts h3 {
    color: #1f2937;
    margin-bottom: 1rem;
  }

  .no-posts p {
    color: #4b5563;
    margin-bottom: 2rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .posts-header {
      flex-direction: column;
      gap: 1rem;
      align-items: stretch;
    }

    .post-item {
      flex-direction: column;
      gap: 1.5rem;
    }

    .post-actions {
      justify-content: flex-start;
    }

    .pagination {
      flex-direction: column;
      gap: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    .post-actions {
      flex-direction: column;
    }

    .posts-page {
      padding: 0 1rem;
    }
  }
</style>
