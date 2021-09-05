import { useRef } from "react";
import backgroundFile from "../static/twilight_dubstep.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef();

  return (
    <div>
      <audio ref={audioRef} src={backgroundFile} autoPlay loop />
    </div>
  );
};

export default BackgroundMusic;
