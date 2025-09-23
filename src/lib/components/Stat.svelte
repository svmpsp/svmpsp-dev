<script lang="ts">
  export let value: string;
  export let label: string;
</script>

<div class="stat">
  <h3>{value}</h3>
  <p>{label}</p>
</div>

<style>
  .stat {
    text-align: center;
    padding: 1.5rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .stat h3 {
    font-size: 2rem;
    color: #0f766e;
    margin-bottom: 0.5rem;
  }

  .stat p {
    color: #6b7280;
    font-weight: 500;
  }

  /* Responsive Design */
  @media (max-width: 480px) {
    .stat {
      padding: 1rem;
    }
  }
</style>
