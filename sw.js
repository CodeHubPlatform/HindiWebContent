importScripts('https://codehubplatform.github.io/HindiWebContent/cache-polyfill.js');
var cacheName = 'my-site-cache-v1';
var filesToCache = [
  '/HindiWebContent/css/main.css',
  '/HindiWebContent/javascript/marksheet.js',
  '/HindiWebContent/index.html',
  '/HindiWebContent//2015/01/01/introduction.html',
  '/HindiWebContent//2015/01/02/internet.html',
  '/HindiWebContent//2015/01/03/web.html',
  '/HindiWebContent//2015/01/04/browser.html',
  '/HindiWebContent//2015/02/02/html-introduction.html',
  '/HindiWebContent//2015/02/03/html-syntax.html',
  '/HindiWebContent//2015/02/04/html-content.html',
  '/HindiWebContent//2015/02/04/html-text.html',
  '/HindiWebContent//2015/02/05/html-links.html',
  '/HindiWebContent//2015/02/06/html-tables.html',
  '/HindiWebContent//2015/02/07/html-images.html',
  '/HindiWebContent//2015/03/02/html-lists.html',
  '/HindiWebContent//2015/03/03/html-forms.html',
  '/HindiWebContent//2015/03/03/html-blobks.html',
  '/HindiWebContent//2015/04/01/css-basics.html',
  '/HindiWebContent//2015/04/02/why-css-exists.html',
  '/HindiWebContent//2015/04/03/css-syntax.html',
  '/HindiWebContent//2015/04/04/css-selectors.html',
  '/HindiWebContent//2015/04/06/css-priority.html',
  '/HindiWebContent//2015/04/07/css-color-units.html',
  '/HindiWebContent//2015/04/08/css-size-units.html',
  '/HindiWebContent//2015/04/09/css-reset.html',
  '/HindiWebContent//2015/05/01/css-text.html',
  '/HindiWebContent//2015/05/02/css-font-family.html',
  '/HindiWebContent//2015/05/03/css-font-size-style-weight.html',
  '/HindiWebContent//2015/05/04/css-line-height.html',
  '/HindiWebContent//2015/05/05/css-font-shorthand.html',
  '/HindiWebContent//2015/05/06/css-text-properties.html',
  '/HindiWebContent//2015/06/01/css-box-model.html',
  '/HindiWebContent//2015/06/02/css-background.html',
  '/HindiWebContent//2015/06/03/css-display.html',
  '/HindiWebContent//2015/06/04/css-height-width-overflow.html',
  '/HindiWebContent//2015/06/05/css-border.html',
  '/HindiWebContent//2015/06/06/css-padding.html',
  '/HindiWebContent//2015/06/07/css-margin.html',
  '/HindiWebContent//2015/06/08/css-size-shorthand-wheel.html',
  '/HindiWebContent//2015/07/01/css-positioning.html',
  '/HindiWebContent//2015/07/02/css-the-flow.html',
  '/HindiWebContent//2015/07/03/css-position.html',
  '/HindiWebContent//2015/07/04/css-float-clear.html',
  '/HindiWebContent//2015/08/01/css-advanced.html',
  '/HindiWebContent//2015/08/02/css-pseudo-classes.html',
  '/HindiWebContent//2015/08/03/css-gradients.html',
  '/HindiWebContent//2015/08/04/css-transitions.html',
  '/HindiWebContent//2015/08/05/css-animations.html',
  '/HindiWebContent//2015/08/06/css-transform.html',
  '/HindiWebContent//2015/08/07/css-responsiveness.html',
  '/HindiWebContent/javascript/codemirror.js',
  '/HindiWebContent/javascript/mode/xml/xml.js',
  '/HindiWebContent/javascript/mode/htmlmixed/htmlmixed.js'



];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    console.log('[*] Serving cached: ' + event.request.url);
                    return response;
                }

                console.log('[*] Fetching: ' + event.request.url);
                return fetch(event.request);
            }
        )
    );
});