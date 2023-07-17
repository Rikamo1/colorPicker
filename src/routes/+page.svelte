<script>
  import UI_dark from "./../components/ui_dark.svelte"
  import UI_light from "./../components/ui_light.svelte"
  import {generateColor} from "./../javascript/generateColor.js"

  let color = {}


  function changeColor() {
    color = generateColor()

  
    document.body.style.background = color.hex

  }

</script>

{#if color.isLight}
<UI_dark on:colorChange={changeColor} color={color} />

{:else}
<UI_light on:colorChange={changeColor} color={color} />

{/if}


