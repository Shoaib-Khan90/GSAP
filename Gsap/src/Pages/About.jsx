import React from "react";
import './About.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const About = () => {

  useGSAP(() => {
  const tl = gsap.timeline();

  tl.from (".Section" , {

     x:-600,
  opacity:0,
  duration:2,
  delay:0.4,
  ease:"power1.out"
  })

  tl.from(".Images img " , {
    xPercent:40,
    duration:2,
    delay:0.3,
    rotate:100,
    opacity:0,

  })

})
  return (
    <div className="Main1">
      <div className="Section">
        <h2>About Me</h2>
        <p>
          Hi, I'm *Shoaib Khan, a passionate Frontend Developer and fitness
          enthusiast from Karachi, Pakistan. I enjoy creating modern,
          responsive, and interactive websites using **React, Next.js, Tailwind
          CSS, GSAP, JavaScript, and Firebase*. My goal is to build fast,
          visually appealing, and user-friendly web experiences that leave a
          lasting impression. Alongside coding, fitness is an important part of
          my life. I believe that discipline in the gym creates discipline in
          every other area of life. Regular training has taught me consistency,
          patience, and the mindset to keep improving every day. That's why I
          created this gym website—to combine my passion for web development
          with my love for fitness. This website is dedicated to helping people
          stay motivated, build strength, improve endurance, and achieve their
          fitness goals. Whether you're just starting your journey or you're an
          experienced athlete, I hope this platform inspires you to stay
          focused, train harder, and become the best version of yourself.
        </p>
      </div>
      <div className="Images">
      <img src="/public/Images/img1.jpg" width={"300px"} alt="" />
      <img src="/public/Images/img2.jpg" width={"250px"} alt="" />
      <img src="/public/Images/img3.jpg" width={"250px"} alt="" />
      </div>
    </div>
  );
};

export default About;
