<script lang="ts">
  import CardinalNoteTitle from '../assets/cardinalNoteTitle.svelte';
  import CardinalIcon from '../assets/cardinalIcon.svelte';
  import ThemeToggle from '../components/themeToggle.svelte';
  import GridAnimatedBackground from '../components/gridAnimatedBackground.svelte';

</script>

<GridAnimatedBackground />
<div id="title-overlay" >
  <div id="title-container">
    <CardinalNoteTitle />
  </div>
  <p id="note-text">coming soon</p>
  <div id="icon-container">
    <ThemeToggle width={ "50%" } />
    <CardinalIcon />
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
    /* border: fuchsia 2px solid; */
    overflow: hidden;
    z-index: 1;

    #title-container {
      position: absolute;
      
      margin: auto;
      width: clamp(500px, 100%, 1300px);
      height: 50dvh;
      /* border: lime 1px solid; */
    }
  }

  #note-text {
    font-weight: bold;
    font-size: 2rem;

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
    /* border: lime 1px solid; */
  }
</style>