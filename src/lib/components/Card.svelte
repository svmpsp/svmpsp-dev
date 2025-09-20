<script lang="ts">
	export let variant: 'experience' | 'project' | 'skill' = 'project';
	export let title: string;
	export let subtitle: string | undefined = undefined;
	export let description: string = '';
	export let tags: string[] = [];
	export let href: string | undefined = undefined;
</script>

{#if href}
	<a {href} class="card card-{variant} card-link">
		<h3>{title}</h3>
		{#if subtitle}
			<p class="subtitle">{subtitle}</p>
		{/if}
		<p class="description">{description}</p>
		{#if tags.length > 0}
			<div class="tags">
				{#each tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		{/if}
	</a>
{:else}
	<div class="card card-{variant}">
		<h3>{title}</h3>
		{#if subtitle}
			<p class="subtitle">{subtitle}</p>
		{/if}
		{#if description}
			<p class="description">{description}</p>
		{/if}
		<slot />
		{#if tags.length > 0}
			<div class="tags">
				{#each tags as tag}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		{/if}
	</div>
{/if}

<style>
	.card {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
		margin-bottom: 2rem;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.card-link {
		text-decoration: none;
		color: inherit;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.card-link:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
	}

	.card-experience {
		border-left: 4px solid #0f766e;
		margin-bottom: 3rem;
	}

	.card-project {
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}

	.card-project:hover {
		transform: translateY(-4px);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
	}

	.card h3 {
		font-size: 1.5rem;
		color: #1f2937;
		margin-bottom: 0.5rem;
	}

	.card-project h3 {
		font-size: 1.3rem;
		margin-bottom: 1rem;
	}

	.subtitle {
		font-weight: 600;
		color: #0f766e;
		margin-bottom: 1rem;
	}

	.description {
		color: #4b5563;
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.card-experience .description {
		margin-bottom: 0;
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tag {
		background: #fef3c7;
		color: #92400e;
		padding: 0.3rem 0.8rem;
		border-radius: 15px;
		font-size: 0.8rem;
		font-weight: 500;
	}

	.card-skill .tags {
		gap: 0.5rem;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.card-skill .tag {
		background: #ccfbf1;
		color: #134e4a;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.card {
			padding: 1.5rem;
		}
	}

	@media (max-width: 480px) {
		.card {
			padding: 1rem;
		}

		.tags {
			gap: 0.3rem;
		}

		.tag {
			padding: 0.4rem 0.7rem;
			font-size: 0.8rem;
		}
	}
</style>