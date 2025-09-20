<script lang="ts">
	export let id: string | undefined = undefined;
	export let background: 'default' | 'light' | 'dark' = 'default';
	export let padding: 'normal' | 'large' = 'normal';
</script>

<section {id} class="section section-{background} section-{padding}">
	<div class="container">
		<slot />
	</div>
</section>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		width: 100%;
	}

	.section {
		padding: 6rem 0;
	}

	.section-large {
		padding: 8rem 0 6rem;
	}

	.section-light {
		background: #f8fafc;
	}

	.section-dark {
		background: #1f2937;
		color: white;
	}

	.section-default {
		background: white;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.container {
			padding: 0 1rem;
			max-width: 100%;
		}

		.section {
			padding: 4rem 0;
		}

		.section-large {
			padding: 6rem 0 4rem;
		}
	}

	@media (max-width: 480px) {
		.container {
			padding: 0 0.75rem;
		}
	}
</style>