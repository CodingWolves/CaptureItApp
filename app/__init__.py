from flask import Flask
from app.appServer import getApp


if __name__ == '__main__':
    app1 = getApp()
    app1.run(debug=True)
