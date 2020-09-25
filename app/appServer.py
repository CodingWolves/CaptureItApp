import random
from flask import Flask, escape, request, jsonify, Response, Request
from flask_cors import CORS, cross_origin
import base64

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

request: Request


@app.route('/', methods=['POST'])
@cross_origin()
def add_pic():
    if request.form and 'image' in request.form:
        imageHeaderData = request.form['image'].split(',')
        if len(imageHeaderData) > 1:
            imageDataBase64 = imageHeaderData[1]
            imageDataBytes = bytes(imageDataBase64, 'ascii')
            imageData = base64.decodebytes(imageDataBytes)
            with open("imageToSave.png", "wb") as imageFile:
                imageFile.write(imageData)
            res = "image received successfully"
            return res, 202
    res = "must contain form-data with 'image' variable inside"
    return res, 400


def getApp():
    return app


if __name__ == "__main__":
    app.run(debug=True)
