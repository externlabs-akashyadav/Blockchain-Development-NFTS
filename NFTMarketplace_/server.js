const express = require("express");
const routes = require("./routes/NFTrouter");
require("dotenv").config();
const cors = require("cors");

//require("../nft_frontend")

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/", routes); //to use the routes

app.get("/", function (req, res) {
  res.json({ message: "Hello world!" });
});

// app.use('/request-type', (req, res, next) => {
//     console.log('Request type: ', req.method);
//     next();
//   });

app.get("/", (req, res) => {
  res.send("Successful response.");
});

const port = 3005;
app.listen(port, () => console.log("Example app is listening on port " + port));

app.post("/test", (req, res) => {
  var data = req.body.userName;
  res.send(data);
  console.log(data);
});

app.post("/test1", (req, res) => {
  var data = req.body.data;
  res.send(data);
  console.log(data);
});
