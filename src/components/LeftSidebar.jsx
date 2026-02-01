export default function LeftSidebar({ radios = [], setCurrentIndex }) {
  return (
    <div className="sidebar left">
      <h3><span>🎙️</span> Rádióadások</h3>

      {radios.length === 0 && (
        <div style={{ color: "#94a3b8" }}>Nincs rádió betöltve</div>
      )}

      {radios.map((r, i) => (
        <div
          key={i}
          className="item"
          onClick={() => setCurrentIndex(i)}
        >
          {r.name}
        </div>
      ))}
    </div>
  );
}
