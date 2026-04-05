# 📻 PlayWave - Online Radio Player

> **[🚀 View Live Demo](https://davidarvai.github.io/PlayWave/)**

A demo web application built with React for streaming online radio stations, with song recognition and a live "Now Playing" sidebar.

---

## ⚠️ Disclaimer

This is a **practice/demo project** built for learning purposes only.

- Song recognition is **not fully functional** — a fallback suggestion system is used when the API fails
- **Not all radio streams** may work, as continuous publicly streamable URLs are difficult to obtain
- Some features may be incomplete or experimental

---

## 🚀 Features

- 🎵 Live radio streaming via HTML5 Audio
- 📻 Multiple Hungarian and international radio stations
- 🎨 Animated circle player with sound bars and pulse rings
- 🔍 Song recognition using the [AudD API](https://audd.io) via microphone recording
- 🎲 Fallback song suggestions when recognition fails
- 🕐 60-second auto-refresh for "Now Playing" updates
- 💬 Welcome popup with demo information
- ⏮⏯⏭ Previous / Play / Next controls

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| CSS3 | Animations & layout |
| HTML5 Audio API | Radio streaming |
| Web Audio API / MediaRecorder 
| AudD API | Song recognition |
| Google Fonts (Orbitron) | Typography |

---

## 📁 Project Structure

```
src/
├── App.jsx                  # Main app, audio logic, radio list
├── App.css                  # Global styles and animations
└── components/
    ├── LeftSidebar.jsx      # Radio station list
    ├── CenterPlayer.jsx     # Animated circle player + controls
    └── RightSidebar.jsx     # Now Playing / song recognition
```

| Station | Stream URL |
|---|---|
| Radio Cafe | `https://icast.connectmedia.hu/5001/live.mp3` |
| Petőfi Rádió | `http://mr-stream.mediaconnect.hu/4738/mr2.mp3` |
| Kossuth Rádió | `http://mr-stream.mediaconnect.hu/4736/mr1.mp3` |
| Bartók Rádió | `http://mr-stream.mediaconnect.hu/4741/mr3.mp3` |
| Dankó Rádió | `https://icast.connectmedia.hu/4748/live.mp3` |
| Sláger FM | `https://icast.connectmedia.hu/5000/live.mp3` |

> **Note:** `http://` streams may be blocked by some browsers due to mixed content restrictions. Only `https://` streams are guaranteed to work in all environments.

To add or replace stations, edit the `radios` array in `src/App.jsx`:

```js
const radios = [
  { name: "My Station", stream: "https://example.com/stream.mp3" },
];
```

---

## 🎵 Song Recognition

Song recognition works by recording **5 seconds of audio from your microphone** and sending it to the AudD API.

### How it works

1. Press **Play** to start a radio station
2. The app automatically requests **microphone permission**
3. It records 5 seconds of ambient audio (what your speakers are playing)
4. The audio sample is sent to AudD for identification
5. If recognized → the song appears in the **Now Playing** sidebar
6. If not recognized → a random **suggested song** is shown instead
7. This repeats every **60 seconds** automatically

### Important notes

- The microphone must be able to **hear your speakers** — works best with external speakers at medium-to-loud volume
- Headphones or low volume may prevent successful recognition
- Browser will ask for **microphone permission** on first use — this must be allowed
- AudD free tier = **500 recognitions/month** (approx. 8 hours of use at 60s intervals)

---

## 🎨 UI Components

### CenterPlayer
- Animated **sound bars** that move while playing
- **Pulse wave rings** that radiate outward while playing
- **Orbit ring** that spins around the circle
- **Spectrum dots** arranged in a circle
- All animations pause when the radio is stopped

### LeftSidebar
- List of all available radio stations
- Click any station to switch immediately

### RightSidebar
- Shows the **currently recognized song** with title, artist, and time
- Displays a **countdown** to the next recognition attempt
- Shows **song history** (up to 10 previous songs)
- Labeled `▶ NOW PLAYING` for real recognitions and `🎲 SUGGESTED` for fallbacks

---

## 🔧 Known Limitations

- Some radio streams use `http://` which may be **blocked by browsers** on `https://` pages
- Song recognition depends on microphone access and speaker volume
- The AudD free tier has a monthly limit of 500 recognitions
- Radio stream URLs can change over time and may stop working without notice
- `http://` streams from `mr-stream.mediaconnect.hu` may not work in all browsers


