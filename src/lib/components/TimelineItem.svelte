<script lang="ts">
  export let year: string;
  export let title: string;
  export let location: string;
  export let active: boolean = false;
</script>

<div class="timeline-item">
  <div class="timeline-dot" class:active></div>
  <div class="timeline-content">
    <div class="timeline-year">{year}</div>
    <h3>{title}</h3>
    <span class="timeline-location">{location}</span>
  </div>
</div>

<style>
  .timeline-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    z-index: 2;
    margin: 0 1rem;
  }

  .timeline-dot {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #0f766e;
    border: 4px solid white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 1rem;
    position: relative;
    z-index: 3;
  }

  .timeline-dot.active {
    background: #cba012;
    transform: scale(1.2);
    box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
  }

  .timeline-content {
    text-align: center;
    padding: 1rem 1rem 1.5rem 1rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
    width: 180px;
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .timeline-content:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  }

  .timeline-year {
    font-weight: 700;
    color: #0f766e;
    font-size: 1.1rem;
    margin: 0;
  }

  .timeline-content h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #1f2937;
    margin: 0;
    line-height: 1.2;
  }

  .timeline-location {
    font-size: 0.8rem;
    color: #9ca3af;
    font-style: italic;
    margin: 0;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .timeline-content {
      width: 160px;
      height: 130px;
      padding: 0.75rem 0.75rem 1.25rem 0.75rem;
      gap: 0.4rem;
    }

    .timeline-content h3 {
      font-size: 0.9rem;
    }

    .timeline-location {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 480px) {
    .timeline-content {
      width: 140px;
      height: 120px;
      padding: 0.5rem 0.5rem 1rem 0.5rem;
      gap: 0.3rem;
    }

    .timeline-year {
      font-size: 1rem;
    }

    .timeline-content h3 {
      font-size: 0.8rem;
    }

    .timeline-location {
      font-size: 0.65rem;
    }
  }
</style>
