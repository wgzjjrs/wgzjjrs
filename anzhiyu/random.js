var posts=["posts/c8b9.html","posts/3eeb.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };