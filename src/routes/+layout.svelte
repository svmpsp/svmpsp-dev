<script lang="ts">
  let { children } = $props();
</script>

<svelte:head>
  <title>svmpsp - Sivam Pasupathipillai's personal website</title>
  <link rel="icon" href="/favicon.svg" />
</svelte:head>

<nav>
  <div class="nav-container">
    <div class="nav-brand">
      <a href="/">Home</a>
    </div>
    <div class="nav-links">
      <a href="/#about">About</a>
      <a href="/#experience">Experience</a>
      <a href="/#projects">Projects</a>
      <a href="/blog">Blog</a>
      <a href="/resume.pdf" download>Resume</a>
      <a href="/#contact">Contact</a>
    </div>
  </div>
</nav>

<main>
  {@render children()}
</main>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family:
      'Inter',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      sans-serif;
    line-height: 1.6;
    color: #333;
    background: #ffffff;
    overflow-x: hidden;
    min-width: 320px;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(*) {
    max-width: 100%;
  }

  :global(html) {
    overflow-x: hidden;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    margin: 0;
    font-weight: 600;
  }

  :global(a) {
    color: #0f766e;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  :global(a:hover) {
    color: #134e4a;
  }
  nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(229, 231, 235, 0.5);
    z-index: 1000;
    padding: 1.25rem 0;
    box-shadow:
      0 1px 3px 0 rgba(0, 0, 0, 0.1),
      0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-brand a {
    font-size: 1.375rem;
    font-weight: 800;
    color: #111827;
    background: linear-gradient(135deg, #0f766e, #134e4a);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease;
    letter-spacing: -0.025em;
  }

  .nav-brand a:hover {
    background: linear-gradient(135deg, #134e4a, #052e2a);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateY(-1px);
  }

  .nav-links {
    display: flex;
    gap: 2.5rem;
    align-items: center;
  }

  .nav-links a {
    font-weight: 500;
    color: #6b7280;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    letter-spacing: 0.025em;
  }

  .nav-links a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(15, 118, 110, 0.1), rgba(19, 78, 74, 0.1));
    border-radius: 0.5rem;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  .nav-links a:hover {
    color: #111827;
    transform: translateY(-2px);
  }

  .nav-links a:hover::before {
    opacity: 1;
  }

  .nav-links a:active {
    transform: translateY(0);
  }

  main {
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    nav {
      padding: 1rem 0;
    }

    .nav-container {
      padding: 0 1rem;
    }

    .nav-links {
      gap: 1.5rem;
    }

    .nav-links a {
      font-size: 0.9rem;
      padding: 0.4rem 0.8rem;
    }

    .nav-brand a {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 480px) {
    nav {
      padding: 0.875rem 0;
    }

    .nav-container {
      padding: 0 0.75rem;
      flex-wrap: wrap;
      gap: 0.75rem;
      justify-content: center;
    }

    .nav-brand {
      width: 100%;
      text-align: center;
    }

    .nav-brand a {
      font-size: 1.125rem;
    }

    .nav-links {
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }

    .nav-links a {
      font-size: 0.875rem;
      padding: 0.375rem 0.75rem;
    }

    main {
      margin-top: 120px;
    }
  }
</style>
