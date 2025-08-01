<script>
  export let step;
</script>

<div class="progress">
  {#each [0, 1, 2] as s (s)}
    <div class:active={step >= s}>{s + 1}</div>
  {/each}
</div>

<style>
  .progress {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
  }
  .progress div {
    width: 2rem;
    height: 2rem;
    background: #ccc;
    border-radius: 50%;
    display: grid;
    place-items: center;
    transition: background 0.3s;
  }
  .progress div.active {
    background: #4caf50;
    color: white;
  }

  @media (max-width: 768px) {
    .progress {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
