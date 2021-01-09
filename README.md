## Overview: 

  - This repo provides some information about SSR, why we use them, and challenges of SSR.
  - I will use React, with redux and React Router, Also, topics like authentication will be discussed.

## Why?

  - How traditional React app works?

    1. The browser makes a request to the server (hosting the app), and an html document is returned by the server
    2. The html document has a script tag with `src` to the entire react app as a bundle (bundle.js).

  ![traditionl](./pics/typical-react.png)

  - Traditional React apps take a slightly long time to get content visible on the screen, which is a behavior we want to avoid.

  - With SSR, whne the browser reach out to server, it will get an html document thta has much more content compared to the traditional react app. So, having a full document really get content to screen pretty fast. (We are still using react on the client).

  ![ssr](./pics/ssr-react.png)




