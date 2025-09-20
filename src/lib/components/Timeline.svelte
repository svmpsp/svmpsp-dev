<script lang="ts">
  import TimelineItem from "./TimelineItem.svelte";

  interface TimelineItemData {
    year: string;
    title: string;
    location: string;
    active?: boolean;
  }

  export let items: TimelineItemData[] = [];
</script>

<div class="timeline-container">
  <div class="timeline">
    {#each items as item}
      <TimelineItem
        year={item.year}
        title={item.title}
        location={item.location}
        active={item.active || false}
      />
    {/each}
  </div>
</div>

<style>
  .timeline-container {
    margin-bottom: 4rem;
    overflow-x: auto;
    padding: 2rem 0;
  }

  .timeline {
    display: flex;
    position: relative;
    min-width: 800px;
    padding: 0 2rem;
  }

  .timeline::before {
    content: "";
    position: absolute;
    top: 14px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #e5e7eb 0%, #0f766e 50%, #e5e7eb 100%);
    z-index: 1;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .timeline-container {
      padding: 1rem 0;
    }

    .timeline {
      min-width: 900px;
      padding: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    .timeline {
      min-width: 800px;
    }
  }
</style>