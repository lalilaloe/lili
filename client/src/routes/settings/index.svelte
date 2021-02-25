<script>
  import { authUrl } from "../auth/google/_config";
  import {
    SelectableTile,
    Button,
    Tabs,
    Tab,
    TabContent,
    TileGroup,
  } from "carbon-components-svelte";
  import Launch20 from "carbon-icons-svelte/lib/Launch20";
  import CheckmarkOutline20 from "carbon-icons-svelte/lib/CheckmarkOutline20";
  import { goto } from "@sapper/app";
  import { onMount } from "svelte";
  import { googleCredentials } from "../../store";

  let googleScopes = {
    tasks: false,
    calendar: false,
  };

  $: authenticated = $googleCredentials["access_token"];

  $: googleAuthurl = authUrl(
    Object.keys(googleScopes).filter((s) => googleScopes[s])
  );

  onMount(() => {
    googleCredentials.useLocalStorage(); // TODO: getContext?
    Object.keys(googleScopes).map((s) => {
      if ($googleCredentials["scope"].match(s)) googleScopes[s] = true;
    });
  });
</script>

<Tabs>
  <Tab label="Providers" />
  <div slot="content">
    <TabContent>
      <TileGroup disabled={authenticated} legend="Google">
        <SelectableTile bind:selected={googleScopes.tasks}>
          Tasks
        </SelectableTile>
        <SelectableTile bind:selected={googleScopes.calendar}>
          Calendar
        </SelectableTile>
      </TileGroup>
      {#if authenticated}
        <Button icon={CheckmarkOutline20} disabled>Authenticated</Button>
      {:else}
        <Button icon={Launch20} on:click={() => goto(googleAuthurl)}>
          Authenticate
        </Button>
      {/if}
    </TabContent>
  </div>
</Tabs>
