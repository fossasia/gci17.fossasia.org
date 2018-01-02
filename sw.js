/* Notice: Modifying this file can break the site caching */

(function() {
    
    'use strict';
  
    var filesToCache = [
      '.',
      'css/bootstrap.css',
      'css/flexslider.css',
      'css/stylesheet.css',
      'css/lightbox.min.css',
      'css/theme-red.css',
      'css/animate.css',
      'css/hover.css',
      'css/custom.css',
      'css/blog.css',
      'css/hover-media-links.css',
      'js/jquery.min.js',
      'js/bootstrap.min.js',
      'js/flexslider.min.js',
      'js/lightbox.min.js',
      'js/masonry.min.js',
      'js/flickr.js',
      'js/twitterfetcher.min.js',
      'js/spectragram.min.js',
      'js/smooth-scroll.min.js',
      'js/parallax.js',
      'js/contributors.js',
      'js/inview.js',
      'js/scripts.js',
      'img/asia-bg.jpg',
      'img/fossasia-dark.png',
      'img/fossasia-light.png',
      'img/gci-logo.png',
      'img/mentors/mariobehling.jpg',
      'img/mentors/sumedh.jpeg',
      'img/mentors/nikit.jpeg',
      'img/mentors/hpdang.jpg',
      'img/mentors/mohitsharma.png',
      'img/slider/community-map.jpg',
      'img/slider/group-photo.jpg'
    ];
    
    var staticCacheName = 'pages-cache-v1';
    
    self.addEventListener('install', function(event) {
      console.log('Attempting to install service worker and cache static assets');
      event.waitUntil(
        caches.open(staticCacheName)
        .then(function(cache) {
          return cache.addAll(filesToCache);
        })
      );
    });
    
    
    self.addEventListener('fetch', function(event) {
      console.log('Fetch event for ', event.request.url);
      event.respondWith(
        caches.match(event.request).then(function(response) {
          if (response) {
            console.log('Found ', event.request.url, ' in cache');
            return response;
          }
          console.log('Network request for ', event.request.url);
          return fetch(event.request)
    
          // TODO 4 - Add fetched files to the cache
    
        }).catch(function(error) {
    
          // TODO 6 - Respond with custom offline page
    
        })
      );
    });
    

})();
