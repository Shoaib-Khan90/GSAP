import { Link } from 'react-router-dom'
import './Navbar.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {

  
useGSAP(() => {
  const tl = gsap.timeline();

  tl.from(".child", {
    y: -100,
    opacity: 0,
    duration: 1,
    rotate: 20,
    scale: 0.2,
    ease: "power1.out",
  });

  tl.from(".Links li", {
    x: 100,
    opacity: 0,
    duration: 1,
    delay:0.4,
    stagger: 0.2,
    ease: "back.out(1.7)",
  });
});


  return (

    <div className='Header'>
      <div className='child'>
      <ul className='Links li'>
        <li> <Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/trainer">Trainer</Link></li>
        <li><Link to="/contact">Contact</Link></li>

      </ul>
      </div>
    </div>
  )
}

export default Navbar
