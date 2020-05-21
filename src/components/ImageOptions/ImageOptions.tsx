import React from "react";
import "./ImageOptions.css";

import ImageItem from "../ImageItem/ImageItem";

interface Props {
  src: string;
  getImageData: (url: string) => void;
}

// Setting the Default image Cropping Dimensions ->

const ImageDimensions = [
  { width: 755, height: 450 },
  { width: 365, height: 450 },
  { width: 365, height: 212 },
  { width: 380, height: 380 },
];

const ImageOptions: React.FC<Props> = ({ src, getImageData }) => {
  return (
    <React.Fragment>
      <h3>Image Grid Preview</h3>
      <h4>Choose an Image to upload!</h4>
      <div className="imageGrid">
        {ImageDimensions.map((dimension) => (
          <ImageItem
            src={src}
            getImageData={getImageData}
            width={dimension.width}
            height={dimension.height}
          />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ImageOptions;
