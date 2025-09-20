<script lang="ts">
	export let skill: string;
	export let variant: 'primary' | 'secondary' = 'primary';
</script>

<span class="skill-badge skill-badge-{variant}">
	{skill}
</span>

<style>
	.skill-badge {
		display: inline-block;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 500;
		transition: transform 0.1s ease;
	}

	.skill-badge:hover {
		transform: scale(1.05);
	}

	.skill-badge-primary {
		background: #ccfbf1;
		color: #134e4a;
	}

	.skill-badge-secondary {
		background: #fef3c7;
		color: #92400e;
	}

	/* Responsive Design */
	@media (max-width: 480px) {
		.skill-badge {
			padding: 0.4rem 0.7rem;
			font-size: 0.8rem;
		}
	}
</style>