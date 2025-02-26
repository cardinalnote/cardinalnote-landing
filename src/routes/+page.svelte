<script lang="ts">
  import { base } from '$app/paths';
  import CardinalNoteTitle from '../logos/cardinalNoteTitle.svelte';
  import CardinalIcon from '../logos/cardinalIcon.svelte';
  import ThemeToggle from '../components/themeToggle.svelte';
  import GridAnimatedBackground from '../components/gridAnimatedBackground.svelte';
  import ControlHub from '../components/controlHub.svelte';

</script>

<GridAnimatedBackground />
<div id="title-overlay" >
  <div id="title-container">
    <CardinalNoteTitle />
  </div>
  <p id="note-text"> .. coming soon .. </p>
  <div id="icon-container">
    <ThemeToggle width={ "50%" } />
    <a id="logo-link" href={ `${base || "https://cardinalnote.com"}/` } ><CardinalIcon /></a>
  </div>
  <div id="right-corner">
    <ControlHub />
  </div>
</div>

<style>
  #title-overlay {
    position: absolute;
    inset: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: auto;
    width: 95%;
    height: 95%;
    pointer-events: none; /* !IMPORTANT - All events must be enabled per component (like: onclick .. ) */
    overflow: hidden;
    z-index: 1;

    #title-container {
      position: absolute;
      
      margin: auto;
      width: clamp(500px, 100%, 1300px);
      height: 50dvh;
    }
  }

  #note-text {
    font-weight: bold;
    font-size: 2rem;
    color: var( --theme-text );

    position: absolute;
    bottom: 0;

    margin: auto;
  }

  #icon-container {
    width: clamp(100px, 10%, 150px);

    position: absolute;
    left: 0;
    bottom: 0;

    margin: auto;

    #logo-link {
      display: block;
      cursor: pointer;

      pointer-events: all;
    }
  }

  #right-corner {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: auto;
  }
</style>