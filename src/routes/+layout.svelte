<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>Sivam Pasupathipillai - Senior AI Engineer & Data Scientist</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav>
	<div class="nav-container">
		<div class="nav-brand">
			<a href="/">Sivam Pasupathipillai</a>
		</div>
		<div class="nav-links">
			<a href="#about">About</a>
			<a href="#experience">Experience</a>
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
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
		font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
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
		color: #2563eb;
		text-decoration: none;
		transition: color 0.2s ease;
	}

	:global(a:hover) {
		color: #1d4ed8;
	}
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid #e5e7eb;
		z-index: 1000;
		padding: 1rem 0;
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
		font-size: 1.25rem;
		font-weight: 700;
		color: #111827;
	}

	.nav-links {
		display: flex;
		gap: 2rem;
	}

	.nav-links a {
		font-weight: 500;
		color: #6b7280;
		transition: color 0.2s ease;
	}

	.nav-links a:hover {
		color: #111827;
	}

	main {
		margin-top: 80px;
	}

	@media (max-width: 768px) {
		.nav-container {
			padding: 0 1rem;
		}

		.nav-links {
			gap: 1rem;
		}

		.nav-links a {
			font-size: 0.9rem;
		}

		.nav-brand a {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 480px) {
		.nav-container {
			padding: 0 0.75rem;
			flex-wrap: wrap;
			gap: 0.5rem;
		}

		.nav-brand a {
			font-size: 1rem;
		}

		.nav-links {
			gap: 0.75rem;
			flex-wrap: wrap;
			justify-content: center;
		}

		.nav-links a {
			font-size: 0.85rem;
			padding: 0.25rem 0.5rem;
		}
	}
</style>
