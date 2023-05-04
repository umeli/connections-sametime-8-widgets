const express = require('express');

const { createProxyMiddleware } = require('http-proxy-middleware')



const app = express();
const PORT = 3000;
const HOST = "localhost";
const MEETING_API_BASE_URL = "https://dosam.collab.cloud/meeting-catalog/api/v1"
const AUTH_API_BASE_URL="https://dosam.collab.cloud/sametime-auth/api/v1"



const meetingProxy = createProxyMiddleware({
    target: MEETING_API_BASE_URL,
    changeOrigin: true,
    pathRewrite: {
        "^/stm": ""
    },
    logLevel: "debug",
    logger: console
});

const authProxy =  createProxyMiddleware({
    target: AUTH_API_BASE_URL,
    changeOrigin: true,
    pathRewrite: {
        "^/auth": ""
    },
    logLevel: "debug",
    logger: console
});

app.use("/stm", meetingProxy);
app.use("/auth", authProxy);

const server = app.listen(PORT);
console.log(`[SAMETIME-WIDGET-PROXY] listening on ${PORT}`)
process.on('SIGINT', () => { console.log("[SAMETIME-WIDGET-PROXY] shutdown"); server.close() });
process.on('SIGTERM', () => { console.log("[SAMETIME-WIDGET-PROXY] shutdown"); server.close() });