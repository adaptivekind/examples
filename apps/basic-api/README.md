# Basic API

A basic stand alone API service. Nothing fancy, no dependencies. Just listens on
an HTTP port and return JSON.

Run locally

    node index.js

Run in Docker

    docker build -t adaptivekind/basic-api .
    docker run -p 3000:3000 adaptivekind/basic-api
