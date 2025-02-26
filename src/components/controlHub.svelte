<script module>
  import { MediaQuery } from "svelte/reactivity";

  const IsMotionAllowed = $state( new MediaQuery('prefers-reduced-motion') );

  export const SpeedControl = $state( {current: IsMotionAllowed ? 60 : 0 } /* default Speed */ );
  let savedSpeed = $state( SpeedControl.current /* default Speed */ );
  let hidden = $state( false );
  let clicked = $state( false /* false-if true svgs need to change*/ );

  const max = 1000;
  
  function mouseEnter() {
    hidden = true;
  }
  
  function mouseLeave() {
    hidden = false;
  }
  
  function mouseClick() {
    clicked = !clicked;
    SpeedControl.current = !clicked ? (savedSpeed || 60) : 0;
  }
</script>

<label id="control" class={ [{ hide: hidden }] } role="presentation" aria-roledescription="remove shade to reveal"
  onmouseenter={ mouseEnter } onfocus={ mouseEnter }
  onmouseleave={ mouseLeave }>

  <div id="shade" >
  </div>

  {#if clicked}
    <svg onclick={ mouseClick } viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-roledescription="animate setting: current is paused">
      <path d="M10.448 17.184L8.09782 10.6557C7.52461 9.06344 9.06479 7.52326 10.657 8.09647L17.1853 10.4467C19.1195 11.143 18.8709 13.9539 16.8445 14.2999L16.0686 14.4324C15.2319 14.5752 14.5766 15.2306 14.4337 16.0672L14.3013 16.8431C13.9553 18.8695 11.1443 19.1181 10.448 17.184Z" fill="transparent"/>
      <path d="M10.4465 17.1843L8.09636 10.656C7.52315 9.0638 9.06333 7.52363 10.6556 8.09684L17.1839 10.447C19.118 11.1433 18.8694 13.9543 16.843 14.3003L16.0671 14.4327C15.2305 14.5756 14.5751 15.231 14.4323 16.0676L14.2998 16.8435C13.9538 18.8699 11.1428 19.1185 10.4465 17.1843Z" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <g id="click2-animate">
        <path d="M10 4V3" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 10H3" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M4 4L6 6" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  {:else }
    <svg onclick={ mouseClick } viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg" role="presentation" aria-roledescription="animate setting: current is playing">
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill="transparent"/>
      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#323232" stroke-width="2"/>
      <path d="M14 9L14 15" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 9L10 15" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  {/if}

  <!-- <svg id="play" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> -->
  <!-- </svg> -->
  <input id="range" bind:value={ SpeedControl.current } type="range" min="0" max={ max } step="0.5" />
</label>

<style>
  #control {
    pointer-events: all;

    display: flex;
    flex-direction: row;

    border-radius: 1em;
    border-bottom: var( --theme_text ) 2px solid;
    height: clamp(50px, 5dvh, 100px);
    width: clamp(50px, 25dvw, 500px);

    background-color: transparent; 
    transition: background-color 1s ease-in-out;

    #shade {
      position: absolute;
      inset: 0 0 0 0;
      border-width: 3em;
      width: 150%;
      background-color: #000000ab;
      transition: background-color 0.5s ease-in-out, width 0.7s ease-in-out;
    }
    &.hide > #shade {
      background-color: #0000000a;
      width: 0%;
    }
    &.hide {
      background-color: black;
      border-bottom: var( --theme_text ) 0.1px solid;
    }

    #range {
      cursor: pointer;
      background-color: transparent;
      flex-grow: 1;
      width: clamp(50px, 60%, 100px);
    }
  }

  svg {
    cursor: pointer;
    flex-grow: 1;
    height: 100%;
    width: clamp(50px, 20%, 100px);

    > g > path {
      stroke: transparent;
    }
    > path, > g > path {
      transition: stroke 1s ease-in-out;
    }
  }
  svg:hover {
    pointer-events: all;
    
    > path, > g > path {
      stroke: white;
    }
  }

  /** FF*/
  input[type="range"]:hover::-moz-range-progress {
    background-color: var( --theme_text ); 
  }
  input[type="range"]::-moz-range-track {
    background-color: var( --theme_background );
  }
  /* IE*/
  input[type="range"]:hover::-ms-fill-lower {
    background-color: var( --theme_text );
  }
  input[type="range"]::-ms-fill-upper {  
    background-color: var( --theme_background );
  }
</style>