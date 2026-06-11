<script lang="ts">
  import Avatar from './Avatar.svelte';
  import StatsPanel from './StatsPanel.svelte';
  import QuestsPanel from './QuestsPanel.svelte';
  import {
    identity,
    computeLevel,
    attributes,
    skills,
    quests,
    type Identity,
    type Attribute,
    type Skill,
    type Quest,
  } from './character';

  // Props default to the real data module but are injectable for testing.
  export let character: Identity = identity;
  export let attributeData: Attribute[] = attributes;
  export let skillData: Skill[] = skills;
  export let questData: Quest[] = quests;
  /** Avatar image override; defaults to the placeholder inside <Avatar />. */
  export let avatarSrc: string | undefined = undefined;

  type Tab = 'stats' | 'quests';
  let activeTab: Tab = 'stats';

  $: level = computeLevel(character.birthDate);
</script>

<div class="character-sheet">
  <div class="char-pane">
    <Avatar src={avatarSrc} alt={`${character.name} as a wizard`} />
    <div class="char-identity">
      <h3 class="char-name">{character.name}</h3>
      <span class="char-level">Lvl {level}</span>
      <span class="char-class">{character.characterClass}</span>
    </div>
  </div>

  <div class="char-detail">
    <div class="tabs" role="tablist" aria-label="Character details">
      <button
        role="tab"
        id="tab-stats"
        class="tab"
        class:selected={activeTab === 'stats'}
        aria-selected={activeTab === 'stats'}
        aria-controls="panel-stats"
        on:click={() => (activeTab = 'stats')}
      >
        Info
      </button>
      <button
        role="tab"
        id="tab-quests"
        class="tab"
        class:selected={activeTab === 'quests'}
        aria-selected={activeTab === 'quests'}
        aria-controls="panel-quests"
        on:click={() => (activeTab = 'quests')}
      >
        Quests
      </button>
    </div>

    {#if activeTab === 'stats'}
      <div id="panel-stats" role="tabpanel" aria-labelledby="tab-stats" class="panel">
        <StatsPanel attributes={attributeData} skills={skillData} />
      </div>
    {:else}
      <div id="panel-quests" role="tabpanel" aria-labelledby="tab-quests" class="panel">
        <QuestsPanel quests={questData} />
      </div>
    {/if}
  </div>
</div>

<style>
  .character-sheet {
    display: grid;
    grid-template-columns: minmax(220px, 280px) 1fr;
    gap: 2.5rem;
    align-items: stretch;
    max-width: 900px;
    margin: 0 auto;
    background: white;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
  }

  .char-pane {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding: 1.5rem;
    background: linear-gradient(160deg, #0f766e 0%, #134e4a 100%);
    border-radius: 12px;
    color: white;
  }

  .char-identity {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.25rem;
  }

  .char-level {
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #fcd34d;
  }

  .char-class {
    font-size: 1.05rem;
    font-weight: 600;
    opacity: 0.95;
  }

  .char-name {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0.25rem 0 0;
    opacity: 0.85;
  }

  .char-detail {
    min-width: 0;
    display: flex;
    flex-direction: column;
    /* Fixed height keeps the card a constant "card-like" ratio across tabs. */
    height: 440px;
  }

  .tabs {
    display: flex;
    gap: 0.5rem;
    border-bottom: 2px solid #e5e7eb;
    margin-bottom: 1.5rem;
  }

  .tab {
    appearance: none;
    background: none;
    border: none;
    padding: 0.6rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: #6b7280;
    cursor: pointer;
    border-bottom: 3px solid transparent;
    margin-bottom: -2px;
    transition:
      color 0.2s ease,
      border-color 0.2s ease;
  }

  .tab:hover {
    color: #0f766e;
  }

  .tab.selected {
    color: #0f766e;
    border-bottom-color: #0f766e;
  }

  .panel {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    animation: panel-fade 0.25s ease-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .panel {
      animation: none;
    }
  }

  @keyframes panel-fade {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Mobile: stack the avatar pane above the detail panels. */
  @media (max-width: 768px) {
    .character-sheet {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      padding: 1.5rem;
    }

    .char-pane {
      padding: 1.25rem;
    }

    .char-detail {
      height: 460px;
    }
  }

  @media (max-width: 480px) {
    .character-sheet {
      padding: 1rem;
    }

    .tab {
      flex: 1;
      padding: 0.6rem 0.5rem;
      font-size: 0.95rem;
    }
  }
</style>
