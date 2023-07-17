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
          <h1 class="prose underline prose-2xl text-base-200">Colorpicker</h1>
          <button class="btn btn-outline text-base-200" on:click={handleClick}>New color</button>
          <h2 class="prose prose-xl text-base-200">{color.hex.toUpperCase()}</h2> 
        </div>
</div>