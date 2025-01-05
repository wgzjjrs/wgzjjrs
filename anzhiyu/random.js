var posts=["2025/01/02/hello-world/","2025/01/06/test1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };