<script lang="ts">
  export let skill: string;
  export let variant: 'primary' | 'secondary' = 'primary';
  export let proficiency: number = 5; // 1-10 scale

  // Ensure proficiency is within valid range
  $: clampedProficiency = Math.max(1, Math.min(10, proficiency));
</script>

<div class="skill-badge">
  <div class="skill-name">{skill}</div>
  <div class="proficiency-squares">
    {#each Array(10) as _, i}
      <div class="square square-{variant}" class:filled={i < clampedProficiency}></div>
    {/each}
  </div>
</div>

<style>
  .skill-badge {
    display: inline-block;
    padding: 0.5rem 0;
    font-size: 0.9rem;
    font-weight: 500;
    min-width: 140px;
  }

  .skill-name {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }

  .proficiency-squares {
    display: flex;
    gap: 3px;
    align-items: center;
  }

  .square {
    width: 14px;
    height: 14px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .square:not(.filled) {
    background: #f3f4f6;
    border-color: #e5e7eb;
  }

  .square.filled {
    transform: scale(1.05);
    border-color: transparent;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .square.filled.square-primary {
    background: linear-gradient(135deg, #0f766e 0%, #14b8a6 100%);
  }

  .square.filled.square-secondary {
    background: linear-gradient(135deg, #d97706 0%, #f59e0b 100%);
  }

  .square.filled::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 1.5s ease-in-out;
  }

  @keyframes shimmer {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }

  .skill-badge:hover .square.filled {
    transform: scale(1.1);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
  }

  /* Responsive Design */
  @media (max-width: 480px) {
    .skill-badge {
      font-size: 0.8rem;
      min-width: 120px;
    }

    .square {
      width: 12px;
      height: 12px;
    }

    .proficiency-squares {
      gap: 2px;
    }
  }
</style>
