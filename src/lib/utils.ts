export function domGetNode( type: "class" | "id" | "tag", idClass: string | undefined ): Promise<Element> {
  if( idClass == undefined ) idClass = "html";

  return new Promise( (resolve, reject) => {
    let count = 6;
    const isMountedInt = setInterval( () => {

      if( count == 0 ) {
        clearInterval( isMountedInt );
        reject();
      }
      count--;

      if( document && document?.isConnected ) {
        let ele: Element | null = null;

        switch( type ) {
          case "class" : {
            ele = document.getElementsByClassName( idClass )[0];
            break;
          }
          case "id" : {
            ele =  document.getElementById( idClass ) as Element;
            break;
          }
          case "tag" : {
            ele = document.getElementsByTagName( idClass )[0];
            break;
          }
        }

        if( ele ) {
          clearInterval( isMountedInt );
          resolve( ele );
        }
      }
    }, 500);
  });
}