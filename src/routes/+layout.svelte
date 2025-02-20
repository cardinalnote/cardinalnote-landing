<script lang="ts">
  import { onMount } from "svelte";
  import * as globals from "../global.css";
  import { IsDarkMode } from "$lib/detectTheme.js";

  let { children } = $props();

  onMount(() => {
    IsDarkMode.loadInitialStore();
  });
</script>

{@render children()}