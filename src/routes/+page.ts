import { TriggerConsoleAdvert } from '$lib/advert.js';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  const ad = TriggerConsoleAdvert();
  if( ad ) console.log( ad );
};