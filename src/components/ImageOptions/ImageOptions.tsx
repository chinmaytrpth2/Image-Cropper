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
      <h3 data-test="h3">Image Grid Preview</h3>
      <h4 data-test="h4">Choose an Image to upload!</h4>
      {/* //Altered for writing tests */}
      {src && <div className="imageGrid" data-test="imageGrid"> 
        {ImageDimensions.map((dimension) => (
          <ImageItem
            src={src}
            key={Math.random()} //For the sake of Test
            getImageData={getImageData}
            width={dimension.width}
            height={dimension.height}
          />
        ))}
      </div>}
    </React.Fragment>
  );
};

export default ImageOptions;
