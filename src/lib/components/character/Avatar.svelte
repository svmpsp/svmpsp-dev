<script lang="ts">
  import placeholder from '$lib/assets/wizard-placeholder.svg';

  // Swappable renderer: v1 shows a lazy-loaded 2D illustration. Keep this prop
  // interface stable (src/alt) so a sprite-sheet or three.js renderer can take
  // its place later without touching the character-sheet logic. Replace the
  // default asset (or pass `src`) with the GenAI-generated portrait when ready.
  export let src: string = placeholder;
  export let alt: string = 'Character avatar';

  // Subtle pointer parallax via CSS custom properties — event-driven, no loop.
  let tiltX = 0;
  let tiltY = 0;

  function handleMove(event: MouseEvent) {
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    tiltX = +(py * -8).toFixed(2);
    tiltY = +(px * 8).toFixed(2);
  }

  function reset() {
    tiltX = 0;
    tiltY = 0;
  }
</script>

<div
  class="avatar"
  role="presentation"
  on:mousemove={handleMove}
  on:mouseleave={reset}
  style="--tilt-x: {tiltX}deg; --tilt-y: {tiltY}deg;"
>
  <div class="avatar-aura"></div>
  <div class="avatar-float">
    <img class="avatar-img" {src} {alt} loading="lazy" width="200" height="220" draggable="false" />
  </div>
</div>

<style>
  .avatar {
    position: relative;
    width: 200px;
    max-width: 100%;
    aspect-ratio: 200 / 220;
    margin: 0 auto;
    perspective: 600px;
  }

  .avatar-aura {
    position: absolute;
    inset: 8% 12% 4%;
    background: radial-gradient(ellipse at center, rgba(20, 184, 166, 0.35), transparent 70%);
    filter: blur(12px);
    z-index: 0;
  }

  .avatar-float {
    position: relative;
    z-index: 1;
    height: 100%;
    transform: rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg));
    transform-style: preserve-3d;
    transition: transform 0.2s ease-out;
  }

  .avatar-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
    filter: drop-shadow(0 8px 12px rgba(0, 0, 0, 0.25));
  }

  @media (prefers-reduced-motion: no-preference) {
    .avatar-float {
      animation: avatar-bob 4s ease-in-out infinite;
    }
  }

  @keyframes avatar-bob {
    0%,
    100% {
      translate: 0 0;
    }
    50% {
      translate: 0 -8px;
    }
  }
</style>
