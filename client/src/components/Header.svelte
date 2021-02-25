<script>
  export let segment;

  import {
    SkipToContent,
    Header,
    HeaderUtilities,
    HeaderGlobalAction,
  } from "carbon-components-svelte";
  import Light20 from "carbon-icons-svelte/lib/Light20"
  import LightFilled20 from "carbon-icons-svelte/lib/LightFilled20";
  import { getContext } from "svelte";
  
  let { dark, carbon_theme } = getContext("Theme");
  let darkMode;
  $: if (darkMode) {
    carbon_theme.set("white")
  } else {
    carbon_theme.set("g90")
  }
</script>

<Header company="lili" platformName="dashboard" href="/">
  <div slot="skip-to-content">
    <SkipToContent />
  </div>
  <HeaderUtilities>
    <HeaderGlobalAction aria-label="App Switcher" icon="{$dark ? Light20 : LightFilled20 }" on:click={() => darkMode = !darkMode}/>
  </HeaderUtilities>
</Header>
