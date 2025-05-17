
const functions = require("firebase-functions");

exports.helloAgriNexus = functions.https.onRequest((req, res) => {
  res.send("AgriNexus Functions Active");
});
