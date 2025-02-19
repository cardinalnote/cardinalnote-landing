import { MediaQuery } from "svelte/reactivity";
import { writable } from "svelte/store";
import { browser } from "$app/environment";

const initialMode = new MediaQuery('prefers-color-scheme: dark');

export const isDarkMode = writable( initialMode.current );
// set, update, Subscriber

if( browser ) {

  const storedDarkMode = localStorage.getItem('isDarkMode');
  console.log(storedDarkMode);

  if( storedDarkMode ) {
    isDarkMode.set( JSON.parse(storedDarkMode) );
  }

  isDarkMode.subscribe( value => {
    console.log( "isDarkMode: ", value );
    localStorage.setItem( 'isDarkMode', JSON.stringify(value) );
  } );
}