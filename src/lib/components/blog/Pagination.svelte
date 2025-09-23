<script lang="ts">
  import type { PaginationInfo } from '$lib/types/blog';
  import Button from '$lib/components/Button.svelte';

  export let pagination: PaginationInfo;
  export let baseUrl = '/blog';

  function getPageUrl(page: number): string {
    return page === 1 ? baseUrl : `${baseUrl}?page=${page}`;
  }

  function getPageNumbers(): number[] {
    const { page, totalPages } = pagination;
    const maxVisible = 5;
    const pages: number[] = [];

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const start = Math.max(1, page - 2);
      const end = Math.min(totalPages, start + maxVisible - 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  }

  $: pageNumbers = getPageNumbers();
</script>

{#if pagination.totalPages > 1}
  <nav class="pagination" aria-label="Blog pagination">
    <div class="pagination-info">
      Showing page {pagination.page} of {pagination.totalPages}
    </div>

    <div class="pagination-controls">
      {#if pagination.hasPrev}
        <Button href={getPageUrl(pagination.page - 1)} variant="secondary">← Previous</Button>
      {/if}

      <div class="pagination-numbers">
        {#each pageNumbers as pageNum}
          {#if pageNum === pagination.page}
            <span class="pagination-current" aria-current="page">
              {pageNum}
            </span>
          {:else}
            <a href={getPageUrl(pageNum)} class="pagination-link">
              {pageNum}
            </a>
          {/if}
        {/each}
      </div>

      {#if pagination.hasNext}
        <Button href={getPageUrl(pagination.page + 1)} variant="secondary">Next →</Button>
      {/if}
    </div>
  </nav>
{/if}

<style>
  .pagination {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 3rem 0;
    padding: 2rem 0;
    border-top: 1px solid #e5e7eb;
  }

  .pagination-info {
    color: #4b5563;
    font-size: 0.9rem;
  }

  .pagination-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pagination-numbers {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .pagination-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    text-decoration: none;
    color: #4b5563;
    font-weight: 500;
    transition: all 0.2s ease;
    border: 1px solid transparent;
  }

  .pagination-link:hover {
    background: #f3f4f6;
    color: #0f766e;
    border-color: #0f766e;
  }

  .pagination-current {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: #0f766e;
    color: white;
    font-weight: 600;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .pagination-controls {
      flex-direction: column;
      gap: 1.5rem;
    }

    .pagination-numbers {
      order: -1;
    }
  }

  @media (max-width: 480px) {
    .pagination-link,
    .pagination-current {
      width: 36px;
      height: 36px;
      font-size: 0.9rem;
    }
  }
</style>
