<script>
  import { IsDarkMode } from "$lib/detectTheme.js";
  export let width = "100%", height = "100%";

  //TODO aria local
</script>

<button onclick={ () => IsDarkMode.toggle() } aria-label={ "dark-light mode toggle" }>
  <svg width={ width } height={ height } viewBox="0 0 24 24" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path class={ $IsDarkMode ? "darken moon" : "moon" } 
      stroke="#fff"
      pathLength="1" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    <g class={ $IsDarkMode ? "sun" : "lightenUp sun" } stroke="#fff" >
      <circle pathLength="2" cx="12" cy="12" r="6" />
      <g class="sun-beams">
        <line pathLength="2" x1="12" y1="1" x2="12" y2="3" />
        <line pathLength="2" x1="12" y1="21" x2="12" y2="23" />
        <line pathLength="2" x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line pathLength="2" x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line pathLength="2" x1="1" y1="12" x2="3" y2="12" />
        <line pathLength="2" x1="21" y1="12" x2="23" y2="12" />
        <line pathLength="2" x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line pathLength="2" x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </g>
    </g>
  </svg>
</button>

<style>
  button:hover {
    svg {
      .moon {
        fill: var( --hover-moon );
        stroke: var( --hover-moon );
      }

      .sun {
        fill: var( --hover-sun );
        stroke: var( --hover-sun );
      }

    }
  }

  button {
    pointer-events: auto;
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-radius: 9px;
    padding: 8px;

    svg {
      .moon {
        stroke: var( --untouched-moon );
        stroke-dasharray: 0 1;
        opacity: 0;
        transition: stroke-dasharray 0.5s ease-in, opacity 300ms ease-in, stroke 1s ease-in, fill 1s ease-in;
      }

      .darken.moon {
        stroke-dasharray: 1 1;
        opacity: 1;
      }

      .sun {
        stroke: var( --untouched-sun );
        opacity: 0;
        transition: opacity 300ms ease-in, stroke 1s ease-in, fill 1s ease-in;

        circle {
          stroke-dasharray: 0 2;
          transition: stroke-dasharray 0.5s ease-in;
        }

        g.sun-beams > line {
          stroke-dasharray: 0 2;
          transition: stroke-dasharray 0.5s ease-in;
        }
      }

      .sun.lightenUp {
        opacity: 1;

        circle {
          stroke-dasharray: 2 2;
        }

        g.sun-beams > line {
          stroke-dasharray: 2 2;
        }
      }
    }
  }
</style>