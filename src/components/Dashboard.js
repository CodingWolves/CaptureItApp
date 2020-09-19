import React from "react";
import { Link } from "react-router-dom";

import { Header } from "./Header";

const takePhoto = (e) => {
  console.log(navigator);
  console.log(global);
  var cameraOptions = {
    sourceType: window.Camera.PictureSourceType.CAMERA,
    correctOrientation: true,
  };

  navigator.camera.cleanup(); // removes the last image taken on ios
  navigator.camera.getPicture(pictureSuccess, pictureError, cameraOptions);
};

function pictureSuccess(picture_path) {
  if (window.cordova.platformId === "browser") {
    document.getElementById("takePhoto").src =
      "data:image/png;base64, " + picture_path;
  } else {
    document.getElementById("takePhoto").src = picture_path;
  }
}

function pictureError(msg) {
  alert(msg);
}

export const Dashboard = () => (
  <div>
    <Header />

    <button onClick={takePhoto} style={{ marginLeft: "5rem" }}>
      <img
        id="takePhoto"
        className="img-responsive"
        src={require("../images/add-photo.png")}
      />
    </button>
  </div>
);
