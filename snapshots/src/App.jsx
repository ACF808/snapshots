import { useState } from "react";
import Photobooth from "./components/Photobooth";
import Darkroom from "./components/Darkroom";
import DryingStation from "./components/DryingStation";
import "./App.css";

function App() {
  const [scene, setScene] = useState("home");
  const [photos, setPhotos] = useState([]);
  const [developedStrip, setDevelopedStrip] = useState(null);
  const [photoMode, setPhotoMode] = useState("bw");

  function restart() {
    setPhotos([]);
    setDevelopedStrip(null);
    setPhotoMode("bw");
    setScene("home");
  }

  return (
    <main className="app">
      {scene === "home" && (
        <div className="home-screen">
          <h1>Snapshots</h1>
          <h2>A Tiny Darkroom</h2>

          <button onClick={() => setScene("photobooth")}>
            Enter Photobooth
          </button>
        </div>
      )}

      {scene === "photobooth" && (
        <Photobooth
          photos={photos}
          setPhotos={setPhotos}
          photoMode={photoMode}
          onNext={() => setScene("darkroom")}
          onBack={() => setScene("home")}
        />
      )}

      {scene === "darkroom" && (
        <Darkroom
          photos={photos}
          photoMode={photoMode}
          setDevelopedStrip={setDevelopedStrip}
          onNext={() => setScene("drying")}
          onBack={() => setScene("photobooth")}
        />
      )}

      {scene === "drying" && (
        <DryingStation
          developedStrip={developedStrip}
          onRestart={restart}
        />
      )}
    </main>
  );
}

export default App;