<!-- src/components/Input.svelte -->
<script lang="ts">
  export let value: string = '';
  export let placeholder: string = '';
  export let onInput: (value: string) => void;

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    onInput(target.value); // Dışarıya aktar
  }
</script>

<input
  type="text"
  value={value}
  placeholder={placeholder}
  class="border border-gray-300 rounded p-2 w-full mb-4"
  on:input={handleInput}
  required
/>
