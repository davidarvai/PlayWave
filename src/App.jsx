import "./App.css";
import { useState, useRef, useEffect } from "react";
import LeftSidebar from "./components/LeftSidebar";
import CenterPlayer from "./components/CenterPlayer";
import RightSidebar from "./components/RightSidebar";

export default function App() {
  const audioRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

const radios = [
  {
    name: "Radio Cafe",
    stream: "https://icast.connectmedia.hu/5001/live.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Radio_Cafe_98.6_logo.png"
  },
  {
    name: "Park FM",
    stream: "http://193.201.191.68:8080/radiocafe98_192k",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6d/ParkFM_logo.png"
  },
  {
    name: "Class FM",
    stream: "https://icast.connectmedia.hu/5003/live.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5c/ClassFM_logo.png"
  },
  {
    name: "Oxigen Rádió",
    stream: "https://icast.connectmedia.hu/5700/live.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Oxigen_Radio_logo.png"
  },
  {
    name: "Best FM",
    stream: "https://icast.connectmedia.hu/5100/live.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/BestFM_logo.png"
  },
  {
    name: "Music FM",
    stream: "https://icast.connectmedia.hu/5200/live.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Music_FM_logo.png"
  }
];

  const play = () => {
    audioRef.current?.play().catch(() => {});
  };

  const pause = () => {
    audioRef.current?.pause();
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % radios.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + radios.length) % radios.length);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = radios[currentIndex].stream;
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  return (
    <div className="layout">
      <LeftSidebar radios={radios} setCurrentIndex={setCurrentIndex} />

      <CenterPlayer
        radio={radios[currentIndex]}
        play={play}
        pause={pause}
        next={next}
        prev={prev}
      />

      <RightSidebar />

      <audio ref={audioRef} />
    </div>
  );
}
