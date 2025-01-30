var posts=["posts/3eeb.html","posts/c8b9.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };