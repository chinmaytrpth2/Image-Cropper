import React, { useState } from "react";

import "./App.css";

import isValidImg from "./utils/imageHelper";
import imageUpload from "./api/imageUpload";
import ImageOptions from "./components/ImageOptions/ImageOptions";

const App: React.FC = () => {
  const [File, setFile] = useState<string>("");
  const [Upload, setUpload] = useState<boolean>(false);
  const [ShowImageOptions, setShowImageOptions] = useState<boolean>(false);
  const [Error, setError] = useState<boolean>(false);
  const [OnSubmit, setOnSubmit] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>("");
  const [Loading, setLoading] = useState<boolean>(false);

  const inputFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const objURL = window.URL.createObjectURL(event.target.files[0]);
      console.log(isValidImg(objURL));
      let img = new Image();
      img.src = objURL;
      img.onload = () => {
        if (img.width === 1024 && img.height === 1024) {
          setFile(objURL);
          setShowImageOptions(true);
          setError(false);
        } else {
          setError(true);
          setUpload(false);
          setImagePreview(null);
        }
      };
    }
  };

  const getImageData = (data: string) => {
    setImagePreview(data);
    setShowImageOptions(false);
    setUpload(true);
  };

  const submitFileHandler = () => {
    setLoading(true);
    imageUpload(imagePreview!).then((res) => {
      setImagePreview(res.url);
      setLoading(false);
      setOnSubmit(true);
    });
  };

  return (
    <div className="App">
      <h1>Insider Assignment</h1>
      <input type="file" onChange={inputFileHandler} />
      {Error && <h4 className="error">Incorrect Dimensions</h4>}
      {OnSubmit && <h4 className="success">Image Uploaded Successfully</h4>}
      {ShowImageOptions && (
        <ImageOptions src={File} getImageData={getImageData} />
      )}
      {Loading && <h1 className="Loading">Loading...</h1>}
      {imagePreview && (
        <div>
          <h2>Preview Image</h2>
          <img src={imagePreview} alt="ImagePreview" />
        </div>
      )}
      {Upload && (
        <button className="btn" type="submit" onClick={submitFileHandler}>
          Upload File
        </button>
      )}
    </div>
  );
};

export default App;
