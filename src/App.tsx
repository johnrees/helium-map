import { OrbitControls, Stars } from "@react-three/drei";
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import ThreeGeo from "three-geo";
import "./app.css";

const tgeo = new ThreeGeo({
  tokenMapbox: process.env.REACT_APP_MAPBOX_API_KEY,
});

const Terrain = () => {
  const [terrain, setTerrain] = useState<any>(null);
  useEffect(() => {
    tgeo.getTerrainRgb([53.326088, -3.827859], 1.0, 13).then(setTerrain);
  }, []);

  return terrain ? <primitive object={terrain} /> : null;
};

const App = () => {
  return (
    <div className="main">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Suspense fallback={<div>Loading.</div>}>
          <Stars />
          <Terrain />
        </Suspense>

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
