<script lang="ts">
  import type { Quest } from './character';

  export let quests: Quest[] = [];
</script>

<ol class="quests" aria-label="Quest log">
  {#each quests as quest (quest.year + quest.title)}
    <li class="quest" class:active={quest.active}>
      <div class="quest-marker" aria-hidden="true"></div>
      <div class="quest-body">
        <div class="quest-head">
          <span class="quest-title">{quest.title}</span>
          {#if quest.active}
            <span class="quest-tag">Active</span>
          {/if}
        </div>
        <span class="quest-meta">{quest.location} · {quest.year}</span>
      </div>
    </li>
  {/each}
</ol>

<style>
  .quests {
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .quests::before {
    content: '';
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 7px;
    width: 2px;
    background: linear-gradient(180deg, #0f766e, #e5e7eb);
  }

  .quest {
    position: relative;
    display: flex;
    gap: 1rem;
    padding: 0.5rem 0 0.5rem 0;
    margin-left: 0;
  }

  .quest-marker {
    flex: none;
    width: 16px;
    height: 16px;
    margin-top: 4px;
    border-radius: 50%;
    background: #e5e7eb;
    border: 3px solid white;
    box-shadow: 0 0 0 1px #d1d5db;
    z-index: 1;
  }

  .quest.active .quest-marker {
    background: #cba012;
    box-shadow: 0 0 0 1px #cba012;
  }

  .quest-body {
    padding-bottom: 0.5rem;
  }

  .quest-head {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .quest-title {
    font-weight: 600;
    color: #1f2937;
    font-size: 1rem;
  }

  .quest-tag {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #92700a;
    background: #fef3c7;
    padding: 0.1rem 0.45rem;
    border-radius: 999px;
  }

  .quest-meta {
    font-size: 0.85rem;
    color: #6b7280;
    font-style: italic;
  }
</style>
