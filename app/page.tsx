"use client";

import Webcam from "react-webcam";
import { useRef } from "react";

const HomePage = () => {
  const webcamRef = useRef<Webcam>(null);

  return (
    <div>
      <Webcam />
    </div>
  );
};

export default HomePage;
