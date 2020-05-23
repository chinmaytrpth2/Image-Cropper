import React, { useReducer } from "react";

import "./App.css";

import { AppReducer, initialState } from "./reducer/reducer";
import { ActionType } from "./reducer/actions";

import imageUpload from "./api/imageUpload";
import ImageOptions from "./components/ImageOptions/ImageOptions";

const App2: React.FC = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const {
    file,
    upload,
    showImageOptions,
    error,
    onSubmit,
    imagePreview,
    loading,
  } = state;

// Function to handle FILE UPLOAD ->

  const inputFileHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const objURL = window.URL.createObjectURL(event.target.files[0]);
      let img = new Image();
      img.src = objURL;
      img.onload = () => {
        if (img.width === 1024 && img.height === 1024) {
          dispatch({
            type: ActionType.SetFile,
            payload: objURL,
          });
        } else {
          dispatch({
            type: ActionType.Error,
          });
        }
      };
    }
  };

  // Function to get the selected image data out of 4 given options ->

  const getImageData = (data: string) => {
    dispatch({
      type: ActionType.SetImagePreview,
      payload: data,
    });
  };

  // Function to submit and upload the image on server ->

  const submitFileHandler = () => {
    dispatch({
      type: ActionType.SetLoading,
    });
    imageUpload(imagePreview!).then((res) => {
      dispatch({
        type: ActionType.Success,
        payload: res.url,
      });
    });
  };

  return (
    <div className="App" data-test="App">
      <h1>Insider Assignment</h1>
      <input type="file" onChange={inputFileHandler} data-test="input-file"/>
      {error && <h4 className="error">Incorrect Dimensions</h4>}
      {onSubmit && <h4 className="success">Image Uploaded Successfully</h4>}
      {showImageOptions && (
        <ImageOptions src={file} getImageData={getImageData} />
      )}
      {loading && <div className="loading"></div>}
      {imagePreview && (
        <div>
          <h2>Preview Image</h2>
          <img src={imagePreview} alt="ImagePreview" />
        </div>
      )}
      {upload && (
        <button className="btn" type="submit" onClick={submitFileHandler}>
          Upload File
        </button>
      )}
    </div>
  );
};

export default App2;
