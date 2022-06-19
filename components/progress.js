import React, { useEffect } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

export default function Progress(roomName) {
  useEffect(() => {
    NProgress.start();
    NProgress.set(0);
    NProgress.inc();
    NProgress.configure({ ease: "ease", speed: 500 });
    NProgress.configure({ trickleSpeed: 500 });
    //NProgress.configure({ showSpinner: true });
    NProgress.done();
  
  }, [roomName])
  

  
    return <div id="container"></div>;
}

