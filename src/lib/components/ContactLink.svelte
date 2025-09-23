<script lang="ts">
  export let href: string;
  export let title: string;
  export let icon: string;
  export let alt: string;
</script>

<a {href} {title} class="contact-link" target="_blank" rel="noopener noreferrer">
  <img src={icon} {alt} class="contact-icon" />
</a>

<style>
  .contact-link {
    padding: 1rem;
    background: #374151;
    border-radius: 50%;
    color: white;
    font-weight: 600;
    transition:
      background 0.2s ease,
      transform 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    text-decoration: none;
  }

  .contact-link:hover {
    background: #667eea;
    transform: translateY(-2px);
  }

  .contact-icon {
    width: 28px;
    height: 28px;
    filter: brightness(0) invert(1);
  }
</style>
