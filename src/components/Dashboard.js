import React from "react";
import '../styles/styles.scss'
import { Link } from "react-router-dom";

import { Header } from "./Header";
import {convertImgToBase64, uploadToServer} from "../js_funcs/image_funcs"

var photoType;

const takePhoto = (e) => {
  console.log(navigator);
  console.log(global);

  if (window.cordova.platformId === "browser") {
    // TODO special confirmation, notification not working good on browser
    phoneConfirmCallback(2); // for now no confirmation for gallery
    photoType="base64";
  } else {
    navigator.notification.confirm(
      navigator.app_lang.select_picture_not,
      phoneConfirmCallback,
      navigator.app_lang.picture,
      [navigator.app_lang.camera, navigator.app_lang.gallery] // the order is important for the callback function, up to 3 options on android
    );
    photoType="path";
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

function upload(){
  var dat = document.getElementById("takePhoto").src;
  if (photoType === "path"){
    
    convertImgToBase64(dat, (data)=>uploadToServer(data));
  }
  else{
    uploadToServer(dat);
  }
}

function pictureError(msg) {
  alert(msg);
}

export const Dashboard = () => (
  <div>
    <Header />
    
    <div className="dashboard">
      <button className="button" onClick={ takePhoto }>
        <img
          className="image"
          id="takePhoto"
          src={require("../images/add-photo.png")}
        />
      </button>

      <br />

      <button className="button" onClick={ upload }>
        Upload picture
      </button>
    </div>
  </div>
);
