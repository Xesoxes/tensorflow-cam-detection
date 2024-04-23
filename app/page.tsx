"use client";

import Webcam from "react-webcam";
import { useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  CameraIcon,
  SpaceBetweenHorizontallyIcon,
} from "@radix-ui/react-icons";
import { Camera, PersonStanding, Video } from "lucide-react";
import { trace } from "console";
import { toast } from "sonner";
import { Rings } from "react-loader-spinner";

const HomePage = () => {
  const webcamRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //STATE
  const [mirror, setMirror] = useState<boolean>(false);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [autoRecordEnabled, setAutoRecordEnabled] = useState<boolean>(false);

  return (
    <div className="flex h-screen">
      {/*BUTTON COMPONENT WLW;LWWKL*/}
      <div className="flex flex-row flex-1">
        <div className="border-primary/5 border-2 max-w-xs flex flex-col gap-2 justify-between shadow-md rounde-mdi p-4">
          {/*TOP SECTION*/}
          <div className="flex flex-col gap-2">
            <ThemeToggle />
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={() => {
                setMirror((prev) => !prev);
              }}
            >
              <SpaceBetweenHorizontallyIcon />
            </Button>
            <Separator className="my-2" />
          </div>

          {/*MID SECTION*/}
          <div className="flex flex-col gap-2">
            <Separator className="my-2" />
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={userPromptScreenshot}
            >
              <Camera />
            </Button>

            <Button
              variant={isRecording ? "destructive" : "outline"}
              size={"icon"}
              onClick={userPromptRecord}
            >
              <Video />
            </Button>

            <Separator className="my-2" />
            <Button
              variant={autoRecordEnabled ? "destructive" : "outline"}
              size={"icon"}
              onClick={toggleAutoRecord}
            >
              {autoRecordEnabled ? (
                <Rings color="white" height={45} />
              ) : (
                <PersonStanding />
              )}
            </Button>
          </div>

          {/*BOTTOM SECTION*/}
          <div className="flex flex-col gap-2"></div>
        </div>
      </div>

      <div className="relative">
        <div className="relative h-screen w-full">
          <Webcam
            ref={webcamRef}
            mirrored={mirror}
            className="h-full w-full object-contain p-2"
          />

          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 h-full w-full object-contain"
          ></canvas>
        </div>
      </div>
    </div>
  );

  //handler function
  function userPromptScreenshot() {
    // take picture
    //save picture to download
  }

  function userPromptRecord() {
    //chechk if recording
    //then stop recording
    //and save to downloads
    //
    //if not Recoding
    //start recording
  }

  function toggleAutoRecord() {
    if (autoRecordEnabled) {
      setAutoRecordEnabled(false);
      toast("Auto record disabled");
    } else {
      toast("Auto record enabled");
      setAutoRecordEnabled(true);
    }
  }
};

export default HomePage;
