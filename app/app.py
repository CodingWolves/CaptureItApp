import random
from flask import Flask, escape, request, jsonify
app = Flask(__name__)

@app.route('/', methods=['POST'])
def add_pic():
    res = str(random.randint(0, 100))
    return res, 201