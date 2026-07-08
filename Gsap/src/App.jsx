import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const box = useRef();

  useGSAP(() => {
    gsap.to(box.current, {
      x: 300,
      duration: 2,
    });
  });

  return (

    <div ref={box}>Hello GSAP</div>
  )
  }

export default App;