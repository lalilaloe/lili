<script>
  export let segment = undefined;

  import {
    Content,
    Grid,
  } from "carbon-components-svelte";
  import Header from "../components/Layout/Header.svelte";
  import Theme from "../components/Layout/Theme.svelte";
</script>

<Theme persist theme="g90">
  <Header segment={segment} />
  <Content style="background: none; padding: 1rem">
    <Grid>
      <slot />
    </Grid>
  </Content>
</Theme>
