import { error, redirect } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import { TriggerConsoleAdvert } from '$lib/advert.js';

export const load: PageLoad = ({ params }) => {
  if( !params.catchall  ) {
    const ad = TriggerConsoleAdvert();
    if( ad ) console.log( ad );
  } else if( params.catchall.endsWith( '/home' ) || params.catchall.endsWith( '/~' ) || params.catchall.endsWith( 'dex' ) ) {
    redirect( 302, "/" );
  }
};

export const entries: EntryGenerator = () => {
  return [
    {catchall: ''},
    {catchall: ' '},
  ];
};