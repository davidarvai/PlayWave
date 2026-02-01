const songs = [
  { title: "Get Lucky", artist: "Daft Punk", time: "10:12" },
  { title: "Yellow", artist: "Coldplay", time: "10:08" },
  { title: "Hello", artist: "Adele", time: "10:02" },
  { title: "Believer", artist: "Imagine Dragons", time: "09:57" },
  { title: "Blinding Lights", artist: "The Weeknd", time: "09:52" },
];

export default function RightSidebar() {
  return (
    <div className="sidebar">
      <h3>🎵 Lejátszott zenék</h3>

      {songs.map((s, i) => (
        <div key={i} className="song-card">
          <div className="song-title">{s.title}</div>
          <div className="song-artist">{s.artist}</div>
          <div className="song-time">{s.time}</div>
        </div>
      ))}
    </div>
  );
}
