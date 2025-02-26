<script lang="ts">
  import { onMount } from 'svelte';
  import hex_pattern from '$lib/assets/hex.png';
  import { SpeedControl } from './controlHub.svelte';

  const targetFPS = 60;
  const interval = 1000 /* millisec from 1 sec */ / targetFPS;
  let canvas: HTMLCanvasElement;
  let bkgImage: HTMLImageElement;
  let imgH = 0;
  let imgW = 0;

  /**
   * * STATE
   */
  let ctx: CanvasRenderingContext2D | undefined = $state( undefined )
  let cw = $state( 0 );
  let ch = $state( 0 );
  let scrollX = $state(0);
  let scrollY = $state(0);
  let mouseX = $state(0);
  let mouseY = $state(0);
  let centerX = $state(0)
  let centerY = $state(0);
  let animateThen = $state( Date.now() );

  const isReverseScroll = true;

  /**
   * * Attribute Listeners
   */
  function resize() {
    cw = window.innerWidth;
    ch = window.innerHeight;

    canvas.width = cw;
    canvas.height = ch;

    findCenter();
  }

  function mouseMove( event: MouseEvent ) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }

  function findCenter() {
    centerX = cw / 2;
    centerY = ch / 2;
  }

  /**
   * * Tracking
   */
  function updateScroll() {
    const defaultSpeed = SpeedControl?.current;
    const panSpeed = defaultSpeed != null ? defaultSpeed / 100 : 0.8;

    let revVal = isReverseScroll ? -1 : 1;
    let fromOX, fromOY = 0;

    (function originateMouse() {
      fromOX = mouseX - centerX;
      fromOY = mouseY - centerY;
    })();

    scrollX += ((fromOX / centerX) * (revVal)) * panSpeed;
    scrollY += ((fromOY / centerY) * (revVal)) * panSpeed;
  }

  /**
   * * Init Draw
   */
  function initBkgImage() {
    bkgImage = new Image();
    bkgImage.src = hex_pattern;
    // bkgImage.width = 64;
    // bkgImage.height = 64;
    bkgImage.width = 512;
    bkgImage.height = 512;
    imgH = bkgImage.height;
    imgW = bkgImage.width;
  }

  /**
   * * Draw
   */
  function drawCircularRing() {
    if ( !ctx ) return;

    let grad = ctx.createRadialGradient( centerX, centerY, Math.max( cw, ch ) /7, centerX, centerY, Math.max( cw, ch ) / 1.85 );
      grad.addColorStop(0, "#000000b7");
      grad.addColorStop(0.5, "#0000006d");
      grad.addColorStop(0.75, "#0000003c");
      grad.addColorStop(0.87,"#00000019");
      grad.addColorStop(0.95, "#2b2b2b6b");
      grad.addColorStop(0.95, "#000000cd");
      grad.addColorStop(1, "#000000ed");
      ctx.fillStyle = grad;
      ctx.fillRect( 0, 0, cw, ch );
  }

  function drawBkgPattern() {
    if (!bkgImage.complete || !ctx) return;

    const pattern = ctx.createPattern(bkgImage, 'repeat')!;
    ctx.fillStyle = pattern;

    ctx.save();
    ctx.translate(scrollX, scrollY);
    ctx.fillRect( -scrollX, -scrollY, cw, ch );
    ctx.restore();
  }

  /**
   * * Draw On Canvas
   */
  function drawOn() {
    requestAnimationFrame( drawOn );
    const now = Date.now();
    const elapsed = now - animateThen;

    if( SpeedControl.current == 0 ) return;

    if (elapsed > interval && ctx) {
      animateThen = now - (elapsed % interval);
      // console.log( (-(elapsed - targetFPS)).toFixed() );

      ctx.clearRect(0, 0, cw, ch);
      updateScroll( );
      drawCircularRing( );
      drawBkgPattern( );
    }
  }

  onMount(() => {
    ctx = canvas.getContext('2d')!;

    initBkgImage();
    bkgImage.onload = () => {
      drawOn();
    };

    resize();
    
    window.addEventListener('resize', resize);
		
		return () => {
			window.removeEventListener('resize', resize);
		}
  });

  // $effect(() => {
  //   $inspect( (-(elapsed - targetFPS)).toFixed() );
  // })
</script>

<canvas bind:this={ canvas } 
  onmousemove={ mouseMove }>
<!-- {@render children()} -->
</canvas>

<style>
  canvas {
    position: relative;
    display: block;
    margin: auto auto;
    z-index: 0;
  }
</style>