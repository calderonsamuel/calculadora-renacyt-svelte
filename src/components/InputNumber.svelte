<script lang="ts">
    export let id: string;
    export let label: string;
    export let value: number;
    export let min: number;
    export let max: number;
    export let inputClass = "mb-3";
</script>

<div class="form-floating {inputClass}">
    <input
      type="number"
      class="form-control"
      {id}
      bind:value={value}
      {min}
      {max}
    />
    <label for={id}>{label}</label>
  </div>