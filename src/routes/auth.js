const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.post("/account/api/oauth/token", (req, res) => {
    res.status(200).send({
        access_token: "eg1~fortnite",
        expires_in: 28800,
        expires_at: "2026-12-02T01:12:01.100Z",
        token_type: "bearer",
        refresh_token: "eg1~fortnite",
        refresh_expires: 86400,
        refresh_expires_at: "2026-12-02T01:12:01.100Z",
        account_id: "fortnite",
        client_id: "fortnite",
        internal_client: true,
        client_service: "fortnite",
        displayName: "lexia",
        app: "fortnite",
        in_app_id: "fortnite",
        device_id: "fortnite"
    });
});

app.post("/account/api/oauth/verify", (req, res) => {
    res.status(200).send({
        access_token: "eg1~fortnite",
        expires_in: 28800,
        expires_at: "9999-12-02T01:12:01.100Z",
        token_type: "bearer",
        refresh_token: "eg1~fortnite",
        refresh_expires: 86400,
        refresh_expires_at: "9999-12-02T01:12:01.100Z",
        account_id: "fortnite",
        client_id: "fortnite",
        internal_client: true,
        client_service: "fortnite",
        displayName: "lexia",
        app: "fortnite",
        in_app_id: "fortnite",
        device_id: "fortnite"
    });
});


app.delete("/account/api/oauth/sessions/kill", (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    });
});

app.delete("/account/api/oauth/sessions/kill/:token", (req, res) => {
    res.status(200).send({
        status: "OK",
        code: 200
    })
});


module.exports = app;
