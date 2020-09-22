import React from "react";
import { Link } from "react-router-dom";

import { Header } from "./Header";

const takePhoto = (e) => {
  console.log(navigator);
  console.log(global);

  if (window.cordova.platformId === "browser") {
    // TODO special confirmation, notification not working good on browser
    phoneConfirmCallback(2); // for now no confirmation for gallery
  } else {
    navigator.notification.confirm(
      "Where do you want to take the picture from?",
      phoneConfirmCallback,
      "Picture",
      ["Camera", "Gallery"] // the order is important for the callback function, up to 3 options on android
    );
  }
};

function phoneConfirmCallback(selected_index) {
  // alert(JSON.stringify(clicked_index, null, 4));
  var cameraOptions = {
    correctOrientation: true,
  };
  if (selected_index === 1) {
    // selected Camera
    cameraOptions.sourceType = window.Camera.PictureSourceType.CAMERA;
  }
  if (selected_index === 2) {
    // selected Gallery
    cameraOptions.sourceType = window.Camera.PictureSourceType.SAVEDPHOTOALBUM;
  }
  navigator.camera.cleanup(); // removes the last image taken on ios
  navigator.camera.getPicture(pictureSuccess, pictureError, cameraOptions);
};

function pictureSuccess(picture_path) {
  if (window.cordova.platformId === "browser") {
    // browser returns base64 image data instead of picture path
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
