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

## App Overview:

  - We would have `two` separate backend servers, onr for business logic (auth, logging, db access, ...) and the other one for rendering the html document.

  -  the first benefit of this separation is that we could replace react with any other technology at any time.

  - Another benefit is that we could scale out each server separately.

  - IMPORTANT NOTE: SSR performance is not fast and needs optimization (like having fast machines for the rendering servers). check out this [Walmart labs blog post](https://medium.com/walmartglobaltech/using-electrode-to-improve-react-server-side-render-performance-by-up-to-70-e43f9494eb8b) 

  ![sepservers](./pics/sep-servers.png)

## Notes: 

  - **ReactDOM.render**: Creates instances of a bunch of components and mounts them to a DOM node.
  - **ReactDOM.renderToString**: renders a bunch of components one time and produces a string out of all the resulting HTML.

  - Isomorphic/Universal Javascript: same code runs on both client and server (like using es5 imports on the server)
  - Server-side Rendering: Generate HTML on the server and ship it down to the client.

  - Event handlers (onClick, ...) are registered after component is re4ndered and atached to the dom in a regular react app.
  - But in the case of SSR, no JS files are sent to the user by default, So, we need, after sending HTML, to send our react app that have the JS functionality.

  - So to ship the react app to the browser we are going to create a **second bundle** that only contains the React App code (the first one contains server code + react app).