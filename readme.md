# blog

Todo:

styles(css modules):
-------------------
+ editor.modules.css
+ utils.modules.css
+ global.css

Pages
-----
+ _app_
+ _document_
+ index - blog homepage - list recent posts, tags
+ blog_post - blog post page
+ Signin - authentication with google
+ Dashboard - list all post
+ Editor - edit/create post
+ Media - upload/view/delete/rename/copylink/ media files


"hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "cleanUrls": true,
    "rewrites": [
      {
        "source": "**",
        "function": "nextjs-server"
      }
    ]
  },