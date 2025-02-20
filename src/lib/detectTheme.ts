import { MediaQuery } from "svelte/reactivity";
import { writable } from "svelte/store";
import { browser } from "$app/environment";
import { checkForMount } from "$lib/utils.js"

const InitialColorPref = new MediaQuery('prefers-color-scheme: dark');
export const IsDarkMode = createDarkModeDetector( InitialColorPref.current );

function createDarkModeDetector( mode: boolean /* = InitialColorPref.current */ ) {

  const { subscribe, set, update } = writable( mode );
  const varName = 'dark-mode';

  function loadInitialStore() {
    if( browser && localStorage ) {
      const storedDarkMode = localStorage.getItem( varName );
    
      if( storedDarkMode ) {
        if( mode != JSON.parse( storedDarkMode ) ) {
          reset( JSON.parse( storedDarkMode ) );
        }
      }
    }
  }

  async function flashRootStyle( val: boolean, setToDefault = false ) {

    let root = await checkForMount( "tag", "html" ).catch( err => {return;} );

    if( root ) {

      if( setToDefault ) {
        root.classList.remove( 'light-mode' );
        root.classList.remove( 'dark-mode' );
        return;
      }

      if( val ) {
        root.classList.add( 'dark-mode' );
        root.classList.remove( 'light-mode' );
      } else {
        root.classList.add( 'light-mode' );
        root.classList.remove( 'dark-mode' );
      }
    }
  }

  function reset( val: boolean ) {
    set( val );

    flashRootStyle( val );
  }

  function toggle() {

    update((mode) => {

      const newMode = !mode;

      if( browser ) {
        localStorage.setItem( varName, JSON.stringify( newMode ) );
      }

      flashRootStyle( newMode );

      return newMode;
    });
  }

  return { subscribe, loadInitialStore, toggle };
}