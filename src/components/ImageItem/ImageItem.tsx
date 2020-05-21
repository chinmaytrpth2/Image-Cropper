import React, { useEffect, useRef } from "react";
import "./ImageItem.css";

interface Props {
  src: string;
  getImageData: (url: string) => void;
  width: number;
  height: number;
}

const ImageItem: React.FC<Props> = ({ src, width, height, getImageData }) => {

  // Using useRef to get the CANVAS Reference ->
  const canvas = useRef<HTMLCanvasElement>(null);


  // Using useEffect for getting the canvas context and drawing the..
  // ..cropped image with dimensions passed through props ->
  useEffect(() => {
    const ctx = canvas.current?.getContext("2d");
    if (ctx) {
      var img = new Image();
      img.src = src;
      ctx.drawImage(img, 0, 0, width, height, 0, 0, width, height);
    }
  }, [src, height, width]);

// Function to transform the selected CANVAS into an Image URL ->

  const CanvasToImage = () => {
    const ImageURL = canvas.current!.toDataURL();
    getImageData(ImageURL);
  };

  return (
    <div className="canvas-case">
      <canvas
        className="canvas"
        ref={canvas}
        width={width}
        height={height}
        onClick={CanvasToImage}
      />
    </div>
  );
};

export default ImageItem;
