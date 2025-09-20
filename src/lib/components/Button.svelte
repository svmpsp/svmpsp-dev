<script lang="ts">
	export let variant: 'primary' | 'secondary' = 'primary';
	export let href: string | undefined = undefined;
	export let disabled = false;
</script>

{#if href}
	<a {href} class="btn btn-{variant}" class:disabled>
		<slot />
	</a>
{:else}
	<button class="btn btn-{variant}" {disabled}>
		<slot />
	</button>
{/if}

<style>
	.btn {
		padding: 0.75rem 2rem;
		border-radius: 8px;
		font-weight: 600;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
		display: inline-block;
		text-decoration: none;
		border: none;
		cursor: pointer;
	}

	.btn:hover:not(.disabled) {
		transform: translateY(-2px);
		box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
	}

	.btn-primary {
		background: #667eea;
		color: white;
	}

	.btn-secondary {
		background: transparent;
		color: #667eea;
		border: 2px solid #667eea;
	}

	.btn:disabled,
	.btn.disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>