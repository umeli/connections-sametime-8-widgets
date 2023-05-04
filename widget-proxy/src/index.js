const express = require('express');

const { createProxyMiddleware } = require('http-proxy-middleware')



const app = express();
const PORT = 3000;
const HOST = "localhost";
const LOGLEVEL=process.env["PROXY_DEBUG"] || "info";
/*
  LEVELS[LEVELS["debug"] = 10] = "debug";
    LEVELS[LEVELS["info"] = 20] = "info";
    LEVELS[LEVELS["warn"] = 30] = "warn";
    LEVELS[LEVELS["error"] = 50] = "error";
    LEVELS[LEVELS["silent"] = 80] = "silent";

    */
const SAMETIME=process.env["SAMETIME_HOST"] || "localhost";

const AUTH_API_BASE_URL=`https://${SAMETIME}/sametime-auth/api/v1`;
const MEETING_API_BASE_URL = `https://${SAMETIME}/meeting-catalog/api/v1`;
const RECORDING_API_BASE = `https://${SAMETIME}/meeting-recording/api/v1`;

/* Create the proxies */
const meetingProxy = createProxyMiddleware({
    target: MEETING_API_BASE_URL,
    changeOrigin: true,
    pathRewrite: {
        "^/v1/meetings": ""
    },
    logLevel: LOGLEVEL,
    logger: console
});

const recordingProxy = createProxyMiddleware({
    target: RECORDING_API_BASE,
    changeOrigin: true,
    pathRewrite: {
        "^/v1/recordings": ""
    },
    logLevel: LOGLEVEL,
    logger: console
});

const authProxy =  createProxyMiddleware({
    target: AUTH_API_BASE_URL,
    changeOrigin: true,
    pathRewrite: {
        "^/v1/auth": ""
    },
    logLevel: LOGLEVEL,
    logger: console
});

/* use the proxies */
app.use("/v1/meetings", meetingProxy);
app.use("/v1/recordings", recordingProxy);
app.use("/v1/auth", authProxy);

const server = app.listen(PORT);
console.log(`[SAMETIME-WIDGET-PROXY] for ${SAMETIME} listening on ${PORT}`)
process.on('SIGINT', () => { console.log("[SAMETIME-WIDGET-PROXY] shutdown"); server.close() });
process.on('SIGTERM', () => { console.log("[SAMETIME-WIDGET-PROXY] shutdown"); server.close() });