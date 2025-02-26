<script lang="ts">
  import type { Snippet } from 'svelte';
  import { onMount } from "svelte";
  import * as globals from "../global.css"; // ! Colors added
  import { IsDarkMode } from "$lib/detectTheme.js";
    import { base } from '$app/paths';

  let { children } = $props<{ children?: Snippet }>();

  onMount(() => {
    IsDarkMode.loadInitialStore();
  });
</script>

{#if children}
  {@render children()}
{:else}
  <a href={ `${base || "https://cardinalnote.com"}/` }>CardinalNote</a>
{/if}