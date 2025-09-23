<script lang="ts">
  import type { BlogPost } from '$lib/types/blog';

  export let post: BlogPost;

  function formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  function truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  }
</script>

<a href="/blog/{post.slug}" class="blog-card">
  <div class="blog-card-content">
    <div class="blog-card-meta">
      <time class="blog-card-date">{formatDate(post.createdAt)}</time>
    </div>
    <h3 class="blog-card-title">{post.title}</h3>
    {#if post.excerpt}
      <p class="blog-card-excerpt">{truncateText(post.excerpt, 150)}</p>
    {/if}
    <div class="blog-card-footer">
      <span class="read-more">Read more →</span>
    </div>
  </div>
</a>

<style>
  .blog-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    text-decoration: none;
    color: inherit;
    display: block;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
    height: 100%;
  }

  .blog-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }

  .blog-card-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .blog-card-meta {
    margin-bottom: 1rem;
  }

  .blog-card-date {
    color: #0f766e;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .blog-card-title {
    font-size: 1.3rem;
    color: #1f2937;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  .blog-card-excerpt {
    color: #4b5563;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    flex: 1;
  }

  .blog-card-footer {
    margin-top: auto;
  }

  .read-more {
    color: #0f766e;
    font-weight: 500;
    font-size: 0.9rem;
    transition: color 0.2s ease;
  }

  .blog-card:hover .read-more {
    color: #134e4a;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .blog-card {
      padding: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    .blog-card {
      padding: 1rem;
    }

    .blog-card-title {
      font-size: 1.2rem;
    }
  }
</style>
