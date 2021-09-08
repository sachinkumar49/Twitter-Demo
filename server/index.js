const express = require('express');
const request = require('request');
const {
  URL
} = require('url');
const {
  createProxyMiddleware
} = require('http-proxy-middleware');


// Create Express Server
const app = express();

// Configuration
const PORT = 7421;
const HOST = "localhost";
const API_SERVICE_URL = new URL("https://api.twitter.com/2/tweets/sample/stream?expansions=author_id&user.fields=created_at,profile_image_url");

app.get('/', (req, res) => {
  const config = {
    url: API_SERVICE_URL,
    auth: {
      bearer: req.headers.authorization? req.headers.authorization:''
    },
    timeout: 31000,
  };
  const stream = request.get(config);
  stream
    .on("data", (data) => {
      try {
        const json = JSON.parse(data);
        if (json.connection_issue) {
          //  socket.emit("error", json);
          //   reconnect(stream, socket, token);
        } else {
          if (json.data) {
            console.log('sachin', json)
            // socket.emit("tweet", json);
          } else {
            //socket.emit("authError", json);
          }
        }
      } catch (e) {
        //socket.emit("heartbeat");
      }
    })
  res.setHeader("Access-Control-Allow-Methods", "authorization");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.send('done');
});

app.listen(PORT, HOST, () => {
  console.log(`Starting  ${HOST}:${PORT}`);
});