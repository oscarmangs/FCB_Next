import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import classes from "../components/messi.module.css";
import { shouldShowMessiComponent} from "../../optimizely-js-quickstart";

export default function Messi() {
  const [showMessi, setShowMessi] = useState(false);
  


  useEffect(() => {
    setShowMessi(shouldShowMessiComponent("user_id_here"));
  }, []);

  const messiRef = useRef(null);
  const [isMirrored, setIsMirrored] = useState(false);
  const keysPressed = {};

  useEffect(() => {
    const handleKeyDown = (event) => {
      keysPressed[event.key] = true;
      handleKeys();
    };

    const handleKeyUp = (event) => {
      keysPressed[event.key] = false;
      handleKeys();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  });

  const handleKeys = () => {
    // Check if messiRef and messiRef.current are not null
    if (messiRef && messiRef.current) {
      const currentTop = parseInt(messiRef.current.style.top) || 300;
      const currentLeft = parseInt(messiRef.current.style.left) || 40;

      if (keysPressed["ArrowDown"]) {
        messiRef.current.style.top = currentTop + 10 + "px";
      }

      if (keysPressed["ArrowUp"]) {
        messiRef.current.style.top = currentTop - 10 + "px";
      }

      if (keysPressed["ArrowRight"]) {
        setIsMirrored(false);
        messiRef.current.style.left = currentLeft + 10 + "px";
      } else if (keysPressed["ArrowLeft"]) {
        setIsMirrored(true);
        messiRef.current.style.left = currentLeft - 10 + "px";
      }
    }
  };


  if (!showMessi) {
    return null; // Don't render Messi component on the server side
  }

  return (
    <Image
      src="/images/messi.png"
      alt="messi"
      className={`${classes.messiPic} ${isMirrored ? classes.mirror : ""}`}
      id="messi"
      ref={messiRef}
      width={200}
      height={200}
    />
  );
}
