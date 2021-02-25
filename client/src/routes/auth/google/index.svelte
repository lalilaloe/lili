<script>
    export let params = {};

    import { googleCredentials } from "../../../store";
    import { onMount } from "svelte";
    import { goto } from "@sapper/app";
    onMount(() => {
        window.location.hash
            .replace("#", "")
            .split("&")
            .map((hk) => {
                let temp = hk.split("=");
                params[temp[0]] = temp[1];
            });
        googleCredentials.useLocalStorage();
        googleCredentials.set(params);
        goto("/settings");
    });
</script>
