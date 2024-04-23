/* CSS */
  import "@css/tailwind.pcss";
  // custom plugins
  import "plyr/dist/plyr.css";
  // app alwyas last as it's custom
  import "@css/app.pcss";

/* JS */
  import 'lazysizes';
  
//  Vidstack
import 'vidstack/player/styles/default/theme.css';
import 'vidstack/player/styles/default/layouts/video.css';
import 'vidstack/player';
import 'vidstack/player/layouts/default';
import 'vidstack/player/ui';

// Medium 
import mediumZoom from 'medium-zoom'
mediumZoom('.zoomable');

// Motion.dev 
import { animate, inView, stagger } from "motion";


/**
 * Alpine JS
 * Best to put it last so that all other potential JS is available
 * when components start getting initialized.
 */
import Alpine from 'alpinejs';
import focus from '@alpinejs/focus';
import intersect from '@alpinejs/intersect'


Alpine.plugin(focus);
Alpine.plugin(intersect);

window.Alpine = Alpine;
Alpine.start();

/**
 * Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR");
  });
}

/**
 * Globally used animations
 */

// Titles 
inView('.animation_titleContainer', ({ target }) => {
     animate(
          target.querySelectorAll('.animation_titleElement'),
          { 
               opacity: [0,1],
               transform: ["translateY(2rem)", "translateY(0)"]
          },
          {
               delay: 0.4,
               duration: 0.8,
               easing: [0.17, 0.55, 0.55, 1]
          },
          { root: '.animation_titleContainer' },
     );
   });
inView('.animation_repeatingBlocksContainer', ({ target }) => {
     animate(
          target.querySelectorAll('.animation_repeatingBlocksElement'),
          { 
               opacity: [0,1],
               scale: [.8, 1],
               transform: ["translateY(3rem)", "translateY(0)"]
          },
          {
               delay: stagger(0.3),
               duration: 0.4,
               easing: [0.17, 0.55, 0.55, 1]
          },
          { root: '.animation_repeatingBlocksContainer' },
     );
   });