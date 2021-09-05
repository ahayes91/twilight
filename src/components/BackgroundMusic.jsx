import { useRef } from "react";
import backgroundFile from "../static/twilight_dubstep.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef();

  //   const playAudio = () => {
  //     const audioEl = audioRef.current;
  //     audioEl.play();
  //   };

  return (
    <div>
      <audio ref={audioRef} src={backgroundFile} controls autoPlay loop />
    </div>
  );
};

export default BackgroundMusic;
