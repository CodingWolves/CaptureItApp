/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  // Cordova is now initialized. Have fun!

  console.log("Running cordova-" + cordova.platformId + "@" + cordova.version);
  document.getElementById("deviceready").classList.add("ready");
  document.getElementById("but").disabled = false;
}

function photo() {
  alert("photo");
  if (!navigator.camera) {
    alert("not ready");
    return;
  }
  var cameraOptions = {};
  //https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/#module_Camera.MediaType
	cameraOptions.sourceType = Camera.PictureSourceType.CAMERA; // take a new picture
	// cameraOptions.sourceType = Camera.PictureSourceType.PHOTOLIBRARY; // request a picture from library
	cameraOptions.correctOrientation = true; // corrects the photo orientation to when it was taken

	navigator.camera.cleanup(); // removes the last image taken on ios
  navigator.camera.getPicture(photoSuccess, photoError, cameraOptions);
}

function photoSuccess(photo_path) {
  document.body.style.backgroundImage = "url(" + photo_path + ")";
  document.body.style.backgroundSize = "100% 100%";
  alert(photo_path);
}

function photoError(msg) {
  alert("photo error = " + msg);
}
