import React from "react";
import "./Videos.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Videos = () => {

    useGSAP(() => {
  const tl = gsap.timeline();

  tl.from(".Heading" , {
    x:600,
    duration:2,
    delay:0.4,
    ease:"power1.out",
    opacity:0
  })

  tl.from(".Videos video" , {
 xPercent:100,
    duration:2,
    delay:0.3,
    rotate:100,
    opacity:0,
  })

    })
  return (
    <div className="Main2">
      <div className="Heading">
        <h3>Videos</h3>
      </div>

      <div className="Videos">
        <video src="/Videos/v1.mp4" width={"350px"} controls playsInline />

        <video src="/Videos/v2.mp4" width={"350px"} controls playsInline />

        <video src="/Videos/v3.mp4" width={"350px"} controls playsInline />

        <video src="/Videos/v5.mp4" width={"350px"} controls playsInline />

        <video src="/Videos/v6.mp4" width={"350px"} controls playsInline />

        <video src="/Videos/v7.mp4" width={"350px"} controls playsInline />

      </div>
    </div>
  );
};

export default Videos;
