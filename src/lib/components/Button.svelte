<script lang="ts">
  export let variant: 'primary' | 'secondary' | 'admin-primary' | 'admin-secondary' = 'primary';
  export let href: string | undefined = undefined;
  export let disabled = false;
  export let size: 'small' | 'normal' | 'large' = 'normal';
  export let target: string | undefined = undefined;
</script>

{#if href}
  <a {href} {target} class="btn btn-{variant} btn-{size}" class:disabled>
    <slot />
  </a>
{:else}
  <button class="btn btn-{variant} btn-{size}" {disabled}>
    <slot />
  </button>
{/if}

<style>
  .btn {
    padding: 0.75rem 2rem;
    border-radius: 8px;
    font-weight: 600;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border: none;
    cursor: pointer;
    line-height: 1;
  }

  .btn:hover:not(.disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  .btn-primary {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
  }

  .btn-primary:hover:not(.disabled) {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
  }

  .btn-secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }

  .btn-admin-primary {
    background: #0f766e;
    color: white;
    border: 2px solid #0f766e;
  }

  .btn-admin-primary:hover:not(.disabled) {
    background: #134e4a;
    border-color: #134e4a;
  }

  .btn-admin-secondary {
    background: transparent;
    color: #0f766e;
    border: 2px solid #0f766e;
  }

  .btn-admin-secondary:hover:not(.disabled) {
    background: #0f766e;
    color: white;
  }

  .btn:disabled,
  .btn.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .btn-small {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  .btn-normal {
    padding: 0.75rem 2rem;
  }

  .btn-large {
    padding: 1rem 2.5rem;
    font-size: 1.125rem;
  }
</style>
