const functions = require("firebase-functions");

exports.checkUID = functions.https.onRequest((request, response) => {
    response.send("hello from checkUID function");
});