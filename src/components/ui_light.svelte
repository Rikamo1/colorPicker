<script>
  import { createEventDispatcher } from 'svelte'

  export let color = {}
  

  const dispatch = createEventDispatcher();
  
  function handleClick() {
      dispatch("colorChange")
  }
 
  if (color.hex === undefined) {
    color.hex = ""
  }
</script>

<div id="UIContainer" class="grid h-screen items-center justify-center">
      <div class="justify-center grid">
        <h1 class="prose underline prose-2xl text-base-content">Colorpicker</h1>
        <button class="btn btn-outline" on:click={handleClick}>New color</button>
        <h2 class="prose prose-xl text-base-content">{color.hex.toUpperCase()}</h2>
      </div>
</div>