self.addEventListener("install", e =>{
    e.waitUntil(
    caches.open("static").then(cache =>{
        return cache.addAll(["./", "./src/style.css", "./images/logo.png", "./images/logo192.png",
        "./images/logo512.png", "./src/app.js", "./src/index.js", "./src/live.js", "./src/map.js",
         "./src/script.js", "./src/script2.js", "./call.html", "./user.html", "./secure.php"]);
    })
    );
    });
    
   self.addEventListener("fetch", e =>{
    e.respondWith(
    caches.match(e.request).then(response =>{
      return response || fetch(e.request);
   })
    );
    });
    
