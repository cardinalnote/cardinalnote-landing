<script lang="ts">
  import hex_pattern from '../assets/hex.png';
  import CardinalNoteTitle from '../assets/cardinalNoteTitle.svelte';
  import CardinalIcon from '../assets/cardinalIcon.svelte';
  import ThemeToggle from '../components/themeToggle.svelte';

  type Cardinal = {
    dir: number[]
    grad: CanvasGradient | null
  }

  type CardinalDict = {
    [key: string]: Cardinal
  }

  $effect(() => {

    /**
     * ______________________________________________
     * ______________________________________________
     * 
     */

    let scrollX = 0;
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let centerX = 0
    let centerY = 0;
    const [ cv, ctx ] = setupCanvas( 300, 400 );
    let gradients: CanvasGradient[] = new Array(8);
    generateGradientCardinals( cv, ctx );
    let cardinality: string = "";
    const cardinalDict: CardinalDict = {
      ""  : { dir: [ -1,  1 ], grad: null },
      "nW": { dir: [ -1, -1 ], grad: gradients[0] },
      "n" : { dir: [  0, -1 ], grad: gradients[1] },
      "nE": { dir: [  1, -1 ], grad: gradients[2] },
      "E" : { dir: [  1,  0 ], grad: gradients[3] },
      "sE": { dir: [  1,  1 ], grad: gradients[4] },
      "s" : { dir: [  0,  1 ], grad: gradients[5] },
      "sW": { dir: [ -1,  1 ], grad: gradients[6] },
      "W" : { dir: [ -1,  0 ], grad: gradients[7] },
      "off":{ dir: [ -1,  1 ], grad: null }
    }

    /**
     * ______________________________________________
     * ______________________________________________
     * 
     */
    
    let hexImage = new Image();
    hexImage.src = hex_pattern; // Replace with your hexagon pattern image path
    hexImage.width = 50;
    hexImage.height = 50;
    hexImage.onload = () => {
      animate();
      console.log("loadComplete : ", hexImage.width, hexImage.height);
    };

    /**
     * ______________________________________________
     * ______________________________________________
     * 
     */

    let animateThen = Date.now();
    let targetFPS = 60;
    let interval = 1000 / targetFPS;

    let easeThen = Date.now();
    let slowit = 10;
    let slowInterval = 1000 / slowit;

    let defaultScrollSpeed = 1;
    let scrollSpeed = defaultScrollSpeed;
    const isReverseScroll = true;

    /**
     * ______________________________________________
     * ______________________________________________
     * 
     */

    function updateScroll() {
      //? if constant scroll without mouse influence
      // let scrollDir = cardinalDict[cardinality].dir

      if( scrollX > 1000 || scrollX < -1000 || scrollY > 1000 || scrollY < -1000 ) {
        scrollX = 0;
        scrollY = 0;
      }

      let revVal = isReverseScroll ? -1 : 1;
      let fromOX, fromOY = 0;

      (function originateMouse() {
        fromOX = mouseX - centerX;
        fromOY = mouseY - centerY;
      })();

      //? scrollX += dir[0] * scrollSpeed;
      //? scrollY += dir[1] * scrollSpeed;
      scrollX += ((fromOX / centerX) * (revVal)) * scrollSpeed;
      scrollY += ((fromOY / centerY) * (revVal)) * scrollSpeed;
      
      // scrollX *= 0.98;
      // scrollY *= 0.98;
    }

    function drawHexPattern() {
      if (!hexImage.complete) return;

      const pattern = ctx.createPattern(hexImage, 'repeat')!;
      ctx.fillStyle = pattern;
      
      const drawX = scrollX;
      const drawY = scrollY;

      ctx.save();
      ctx.translate(drawX, drawY);
      ctx.fillRect( -drawX, -drawY, cv.width, cv.height );
      ctx.restore();
      //? do again for cool effect.
      // ctx.fillRect( 0, 0, cv.width, cv.height );
    }

    function drawQuadrantShadow() {

      let dirGradient: CanvasGradient | null = cardinalDict[cardinality].grad;

      if( dirGradient ) {
        ctx.fillStyle = dirGradient;
        // let current = 0.03;
        // for(var t = 0; t <= 1; t += 0.02) {
          // grad.addColorStop(t, "hsla(360, 100%, 100%, " + easeInOut(t) * 0.8 + ")");
        // }
        // for( current; current < 0.3 ; current += 0.03) {
        //   // grad.addColorStop(0, "#5757574e");
        //   // grad.addColorStop(0.025, "#0000002b");
        //   // grad.addColorStop(0.03, "transparent");
        //   // dirGradient.addColorStop( current, "#6060602b" )
        // }
        ctx.fillRect( 0, 0, cv.width, cv.height );
      }
    }

    function drawCircularRing() {
      let grad = ctx.createRadialGradient( centerX, centerY, Math.max(cv.width, cv.height) /7, centerX, centerY, Math.max(cv.width, cv.height) / 1.85 );
        grad.addColorStop(0, "#000000b7");
        grad.addColorStop(0.5, "#0000006d");
        grad.addColorStop(0.75, "#0000003c");
        grad.addColorStop(0.87,"#00000019");
        grad.addColorStop(0.95, "#2b2b2b6b");
        grad.addColorStop(0.95, "#000000cd");
        grad.addColorStop(1, "#000000ed");
        ctx.fillStyle = grad;
        ctx.fillRect( 0, 0, cv.width, cv.height );
    }

    function animate() {
      requestAnimationFrame( animate );
      const now = Date.now();
      const elapsed = now - animateThen;

      if (elapsed > interval) {
        animateThen = now - (elapsed % interval);

        ctx.clearRect(0, 0, cv.width, cv.height);

        //TODO add motion check
        updateScroll();
        drawHexPattern();
        // easing();
        drawCircularRing();
      }
    }

    function easing() {
      // requestAnimationFrame( animate );
      const now = Date.now();
      const elapsed = now - easeThen;

      if (elapsed > slowInterval) {
        easeThen = now - (elapsed % slowInterval);

        // ctx.clearRect(0, 0, cv.width, cv.height);

        drawQuadrantShadow();
      }
    }

    /* function sineEaseInOut(currentProgress, start, distance, steps) {
      return -distance/2 * ( Math.cos( Math.PI * currentProgress/steps ) - 1) + start;
    }; */

    /**
     * ______________________________________________
     * ______________________________________________
     * 
     */

    function setDirectionalGradient( /* checkDir: number */ ) {

      cardinality = "";
      if( mouseY > centerY + (centerY * 0.5) ) {
        cardinality += 's';
      } else if( mouseY + (centerY * 0.5) < centerY ) { 
        cardinality += 'n';
      }

      if( mouseX > centerX + (centerX * 0.5) ) {
        cardinality += 'E';
      } else if( mouseX + (centerX * 0.5) < centerX ) {
        cardinality += 'W'
        // cardinalArr[1] = -1;
      }
      
      return cardinality;
    }

    function generateGradientCardinals( canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D ) {

      const array: Array<CanvasGradient> = new Array(8);
      // northWestGrad = ctx.createLinearGradient( 0, 0, canvas.width, canvas.height );
      array[0] = createGradient( 0, 0, canvas.width, canvas.height, true );
      // northGrad = ctx.createLinearGradient( 0, 0, 0, canvas.height );
      array[1] = createGradient( 0, 0, 0, canvas.height );
      // northEastGrad = ctx.createLinearGradient( canvas.width, 0, 0, canvas.height );
      array[2] = createGradient( canvas.width, 0, 0, canvas.height, true );
      // eastGrad = ctx.createLinearGradient( canvas.width, 0, 0, 0  );
      array[3] = createGradient( canvas.width, 0, 0, 0  );
      // southEastGrad = ctx.createLinearGradient( canvas.width, canvas.height, 0, 0 );
      array[4] = createGradient( canvas.width, canvas.height, 0, 0, true );
      // southGrad = ctx.createLinearGradient( 0, canvas.height, 0, 0 );
      array[5] = createGradient( 0, canvas.height, 0, 0 );
      // southWestGrad = ctx.createLinearGradient( 0, canvas.height, canvas.width, 0 );
      array[6] = createGradient( 0, canvas.height, canvas.width, 0, true );
      // westGrad = ctx.createLinearGradient( 0, 0, canvas.width, 0 );
      array[7] = createGradient( 0, 0, canvas.width, 0 );

      function createGradient( x: number, y: number, x1: number, y1: number, isCorner = false ) {
        let grad = ctx.createLinearGradient( x, y, x1, y1 );
          grad.addColorStop(0, "#4e4e4e4e");
          if( isCorner ) {
            grad.addColorStop(0.03, "#3333332f");
            grad.addColorStop(0.15, "transparent");
          } else {
            grad.addColorStop(0.005, "#3333332f");
            grad.addColorStop(0.05, "transparent");
          }
        return grad;
      }

      gradients = array;
    }

    function setupCanvas( w: number, h: number ): [ HTMLCanvasElement, CanvasRenderingContext2D ] {
      const canvas = document.getElementById("hexCanvas") as HTMLCanvasElement;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const context = canvas.getContext("2d")!

      window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setCanvasDeltas( cv );
      });

      canvas.addEventListener('mousemove', ( event: MouseEvent ) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
        cardinality = setDirectionalGradient();
      });

      canvas.addEventListener('mouseleave', () => {
        cardinality = "off";
      })

      canvas.addEventListener('wheel', ( ev: WheelEvent ) => {
        if( ev.deltaY < 0 ) {
          scrollSpeed += 0.1;
        } else 
        if( scrollSpeed > defaultScrollSpeed && ev.deltaY > 0 ) {
          scrollSpeed -= 0.1;
        }
      })

      
      setCanvasDeltas( canvas );
      function setCanvasDeltas( cvI: HTMLCanvasElement ) {
        centerX = cvI.width / 2;
        centerY = cvI.height / 2;
      }

      return [ canvas, context ];
    }
  });
</script>

<canvas id="hexCanvas"></canvas>
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
  #hexCanvas {
    position: relative;
    display: block;
    margin: auto;
    z-index: 0;
  }

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
    color: var( --theme-text );
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