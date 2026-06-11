<script lang="ts">
  import type { Attribute, Skill } from './character';

  export let attributes: Attribute[] = [];
  export let skills: Skill[] = [];
</script>

<div class="stats-panel">
  <h4 class="section-heading">Stats</h4>

  <dl class="attributes" aria-label="Attributes">
    {#each attributes as attr (attr.label)}
      <div class="attribute">
        <dt class="attr-label">{attr.label}</dt>
        <dd class="attr-value">{attr.value}</dd>
      </div>
    {/each}
  </dl>

  <h4 class="section-heading">Skills</h4>

  <ul class="skills" aria-label="Skills">
    {#each skills as skill (skill.name)}
      <li class="skill">
        <div class="skill-head">
          <span class="skill-name">{skill.name}</span>
          <span class="skill-level">Lv {skill.level}</span>
        </div>
        <div class="skill-bar">
          <div class="skill-fill" style="width: {skill.level * 10}%"></div>
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .stats-panel {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    min-height: 0;
  }

  .attributes {
    margin: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1.25rem;
    row-gap: 0;
  }

  .attribute {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 0.75rem;
    padding: 0.35rem 0.25rem;
    border-bottom: 1px solid #e5e7eb;
  }

  .attr-label {
    margin: 0;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: #6b7280;
  }

  .attr-value {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 700;
    color: #0f766e;
    line-height: 1;
  }

  .section-heading {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #1f2937;
    border-bottom: 1px solid #e5e7eb;
    padding-bottom: 0.5rem;
  }

  .skills {
    list-style: none;
    margin: 0;
    padding: 0 0.5rem 0 0;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    /* Only the skill list scrolls, so attributes + heading stay pinned. */
    flex: 1;
    min-height: 0;
    overflow-y: auto;
  }

  .skill-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.3rem;
  }

  .skill-name {
    font-weight: 600;
    color: #1f2937;
    font-size: 0.95rem;
  }

  .skill-level {
    font-size: 0.8rem;
    font-weight: 700;
    color: #0f766e;
  }

  .skill-bar {
    height: 10px;
    background: #f3f4f6;
    border-radius: 999px;
    overflow: hidden;
  }

  .skill-fill {
    height: 100%;
    border-radius: 999px;
    background: linear-gradient(90deg, #0f766e 0%, #14b8a6 100%);
  }

  @media (prefers-reduced-motion: no-preference) {
    .skill-fill {
      animation: skill-grow 0.8s ease-out;
    }
  }

  @keyframes skill-grow {
    from {
      transform: scaleX(0);
      transform-origin: left;
    }
    to {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 480px) {
    .attributes {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }
  }
</style>
