import { useState } from "react";

export default function CenterPlayer({ radio, play, pause, next, prev }) {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!radio) {
    return <div className="center">Nincs kiválasztott rádió</div>;
  }

  return (
    <div className="center">
      <div className="circle-wrapper">
        <div className="pulse"></div>
        <div className="circle">
          <img
              src={radio.logo}
              alt={radio.name}
              onError={(e) => (e.target.src = "/fallback.png")}
            />
          {radio.logo ? (
            <img src={radio.logo} alt={radio.name} />
          ) : (
            <div>{radio.name}</div>
          )}
        </div>
      </div>

      <h2 className="radio-name">{radio.name}</h2>

      <div className="controls">
        <button onClick={prev}>⏮</button>

        <button onClick={togglePlay} className="play-btn">
          {isPlaying ? "⏸" : "▶"}
        </button>

        <button onClick={next}>⏭</button>
      </div>
    </div>
  );
}
