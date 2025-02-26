const colors = {
  primary: '\x1b[38;5;208m', // Orange
  secondary: '\x1b[38;5;39m', // Green
  highlight: '\x1b[38;5;201m', // Pink
  reset: '\x1b[0m',
};

const emojis = {
  sparkles: '✨',
  globe: '🌐',
  fast: '⚡',
  star: '⭐',
  check: '✅',
  work: '☕',
  msg: '📨',
  rec: '📬',
  note: '🪧',
  alert: '🔔',
  search: '🔍',
  suprised: "o((⊙﹏⊙))o.",
  checkIt: "(👉ﾟヮﾟ)👉",
  waiting: "⏳",
  early: '🌱',
  grom: '🪴',
  mature: '🌳',
  tack: '📌',
  // 🔥🧭🌏🌎🌻⌛📍
}

export function BuildAdvert() {

	return `
 ██████╗ █████╗ ██████╗ ██████╗ ██╗███╗   ██╗ █████╗ ██╗     
██╔════╝██╔══██╗██╔══██╗██╔══██╗██║████╗  ██║██╔══██╗██║     
██║     ███████║██████╔╝██║  ██║██║██╔██╗ ██║███████║██║     
██║     ██╔══██║██╔══██╗██║  ██║██║██║╚██╗██║██╔══██║██║     
╚██████╗██║  ██║██║  ██║██████╔╝██║██║ ╚████║██║  ██║███████╗
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝
                                                             
███╗   ██╗ ██████╗ ████████╗███████╗                         
████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝                         
██╔██╗ ██║██║   ██║   ██║   █████╗                           
██║╚██╗██║██║   ██║   ██║   ██╔══╝                           
██║ ╚████║╚██████╔╝   ██║   ███████╗                         
╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝                                        

                  ${emojis.suprised}
--- --- --- ---  Well Hello There --- --- --- --- 
  
Thanks for checking out the current Cardinalnote 
organization landing page. This is a small project 
brought to open-source, that will assist 
students/adults/workers/stay-at-home-spouses in they're 
education/goals/learning and hopefully 
many and much more.

If your interested in learning more: keep reading.
${emojis.checkIt}( checkout a demo ${ /* TODO DEMO */"here" } )

${emojis.alert}
${emojis.alert} Sign-up for the newsletter
${emojis.alert} Get notified on release
${emojis.alert}

${emojis.early} Cardinalnote is in early development 
with rolling releases.
${emojis.grom} All features are subject to change 
${emojis.mature} Most feature-requests are considered 
and implemented on case by case. 
	
  _,.-=-= ${ emojis.check } Current RoadMap ${ emojis.check } =-=-.,_

ALL in progress  : ${ emojis.waiting }

${emojis.sparkles}- Cardinalnote is a learning dynamic learning app

${emojis.fast}- Mobile based, with web elements

${emojis.globe}- Going to be open globally

${emojis.note}- Major locales are being written

${emojis.tack}- Cardinalnote is planned to release early Spring 2025

This project consists of years of intensive research into a 
user-interface that is fun and easy to learn, while not 
becoming something that is required for any learning material, 
but to suppliment certain individuals who struggle with 
learning in the long-term.

Thank you again for reading this far.  If you would like to 
show your support 
${ /* TODO CONTACT */""}
: send me a message ${emojis.msg} :> ${ emojis.rec }

Or help me keep my cup from emptying ${ emojis.checkIt }  ${ emojis.work }
( you can send any comfortable amount ${ /* TODO COFFEE */""} )
`;
}