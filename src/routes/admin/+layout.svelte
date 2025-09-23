<script lang="ts">
  import { page } from '$app/stores';
  import Button from '$lib/components/Button.svelte';
  import type { LayoutData } from './$types';

  let { data, children }: { data: LayoutData; children: any } = $props();

  // Check if we have user data (not on login page)
  const hasUser = data.user;

  async function logout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    window.location.href = '/';
  }
</script>

<svelte:head>
  <title>Admin Dashboard - Sivam Pasupathipillai</title>
</svelte:head>

{#if hasUser}
  <div class="admin-layout">
    <header class="admin-header">
      <div class="admin-header-content">
        <h1>
          <a href="/admin">Admin Dashboard</a>
        </h1>
        <div class="admin-header-actions">
          <span class="admin-user">Welcome, {data.user.email}</span>
          <button class="logout-button" onclick={logout}> Logout </button>
        </div>
      </div>
    </header>

    <nav class="admin-nav">
      <div class="admin-nav-content">
        <a href="/admin" class:active={$page.url.pathname === '/admin'}> Dashboard </a>
        <a href="/admin/posts" class:active={$page.url.pathname.startsWith('/admin/posts')}>
          Blog Posts
        </a>
        <a href="/blog" target="_blank"> View Blog </a>
      </div>
    </nav>

    <main class="admin-main">
      {@render children()}
    </main>
  </div>
{:else}
  <!-- Login page - no admin layout wrapper -->
  {@render children()}
{/if}

<style>
  .admin-layout {
    min-height: 100vh;
    background: #f9fafb;
  }

  .admin-header {
    background: white;
    border-bottom: 1px solid #e5e7eb;
    padding: 1rem 0;
  }

  .admin-header-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .admin-header h1 {
    margin: 0;
    font-size: 1.5rem;
    color: #1f2937;
  }

  .admin-header h1 a {
    text-decoration: none;
    color: inherit;
  }

  .admin-header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .admin-user {
    color: #4b5563;
    font-size: 0.9rem;
  }

  .logout-button {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: 1px solid #d1d5db;
    background: white;
    color: #4b5563;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .logout-button:hover {
    background: #f9fafb;
    border-color: #9ca3af;
  }

  .admin-nav {
    background: white;
    border-bottom: 1px solid #e5e7eb;
    padding: 0;
  }

  .admin-nav-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    gap: 2rem;
  }

  .admin-nav a {
    padding: 1rem 0;
    text-decoration: none;
    color: #4b5563;
    font-weight: 500;
    border-bottom: 2px solid transparent;
    transition: all 0.2s ease;
  }

  .admin-nav a:hover,
  .admin-nav a.active {
    color: #0f766e;
    border-color: #0f766e;
  }

  .admin-main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .admin-header-content {
      padding: 0 1rem;
      flex-direction: column;
      gap: 1rem;
    }

    .admin-nav-content {
      padding: 0 1rem;
      gap: 1rem;
    }

    .admin-main {
      padding: 1rem;
    }

    .admin-user {
      display: none;
    }
  }
</style>
