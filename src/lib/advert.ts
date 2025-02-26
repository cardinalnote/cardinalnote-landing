import { browser } from "$app/environment";
import { BuildAdvert } from "./prettyText.js";

export function TriggerConsoleAdvert( force = false ) {
	let varName = "didConAdTrigger";
	if( browser && localStorage ) {
		const storedVal = localStorage.getItem( varName );

		if( !storedVal || storedVal === "false" || force ) {
			localStorage.setItem( varName, "true" );
			return BuildAdvert();
		}
	}

	return null;
}