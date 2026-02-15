<script lang="ts">
  import { onMount } from 'svelte';
  import Card from '$lib/components/Card.svelte';

  let stats = {
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
  };

  onMount(async () => {
    try {
      const response = await fetch('/api/posts?published=false');
      if (response.ok) {
        const data = await response.json();
        stats.totalPosts = data.pagination.total;
        stats.draftPosts = data.posts.filter(
          (post: { published: boolean }) => !post.published
        ).length;
        stats.publishedPosts = stats.totalPosts - stats.draftPosts;
      }
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  });
</script>

<div class="dashboard">
  <h1>Dashboard</h1>
  <p class="dashboard-subtitle">Welcome to your blog administration panel.</p>

  <div class="stats-grid">
    <Card variant="project" title="Total Posts" description={stats.totalPosts.toString()} />
    <Card variant="project" title="Published" description={stats.publishedPosts.toString()} />
    <Card variant="project" title="Drafts" description={stats.draftPosts.toString()} />
  </div>

  <div class="quick-actions">
    <h2>Quick Actions</h2>
    <div class="actions-grid">
      <a href="/admin/posts/new" class="action-card">
        <h3>✍️ Create New Post</h3>
        <p>Write and publish a new blog post</p>
      </a>
      <a href="/admin/posts" class="action-card">
        <h3>📝 Manage Posts</h3>
        <p>Edit or delete existing blog posts</p>
      </a>
      <a href="/blog" class="action-card">
        <h3>👀 View Blog</h3>
        <p>See how your blog looks to visitors</p>
      </a>
    </div>
  </div>
</div>

<style>
  .dashboard {
    max-width: 1000px;
    margin: 0 auto;
  }

  .dashboard h1 {
    color: #1f2937;
    margin-bottom: 0.5rem;
  }

  .dashboard-subtitle {
    color: #4b5563;
    margin-bottom: 2rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }

  .quick-actions h2 {
    color: #1f2937;
    margin-bottom: 1.5rem;
  }

  .actions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }

  .action-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    color: inherit;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .action-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

  .action-card h3 {
    color: #1f2937;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
  }

  .action-card p {
    color: #4b5563;
    margin: 0;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }

    .actions-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
