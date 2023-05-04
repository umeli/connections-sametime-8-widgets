const express = require('express');

const { createProxyMiddleware } = require('http-proxy-middleware')



const app = express();
const PORT = 3000;
const HOST = "localhost";

const AUTH_API_BASE_URL = "https://dosam.collab.cloud/sametime-auth/api/v1"
const RECORDING_API_BASE = "https://dosam.collab.cloud/meeting-recording/api/v1"

const recordingProxy = createProxyMiddleware({
    target: RECORDING_API_BASE,
    changeOrigin: true,
    pathRewrite: {
        "^/stm": ""
    },
    logLevel: "debug",
    logger: console
});


const authProxy = createProxyMiddleware({
    target: AUTH_API_BASE_URL,
    changeOrigin: true,
    pathRewrite: {
        "^/auth": ""
    },
    logLevel: "debug",
    logger: console
});

app.use("/stm", recordingProxy);
app.use("/auth", authProxy);

const server = app.listen(PORT);
console.log(`[SAMETIME-RECORDING-PROXY] listening on ${PORT}`)
process.on('SIGINT', () => { console.log("[SAMETIME-RECORDING-PROXY] shutdown"); server.close() });
process.on('SIGTERM', () => { console.log("[SAMETIME-RECORDING-PROXY] shutdown"); server.close() });