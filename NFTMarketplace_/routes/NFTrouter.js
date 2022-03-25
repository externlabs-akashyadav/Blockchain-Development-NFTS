const express = require("express");
const app = express();
const router = express.Router();
const NFTcontroller = require("../controller/NFTcontroller");
const listNFTController = require("../controller/listNFTController");
const transferController = require("../controller/transferController");
const burncontroller = require("../controller/burncontroller");
const sellOfferController = require("../controller/createSellOffer");
const buyOfferController = require("../controller/createBuyOffcer");
const getOffercontroller = require("../controller/getOfferController");
const acceptSellOffer = require("../controller/acceptSellOffer");
const acceptBuyOffer = require("../controller/acceptBuyOffer");
const cancelOffer = require("../controller/cancelOffer");

router.post("/mintToken", NFTcontroller.newNFTController);
app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

router.post("/listNFTs", listNFTController.listNFTController);
app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});

router.post("/transferNFTs", transferController.transferController);
app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});

router.post("/burnNFT", burncontroller.burncontroller);
app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});

router.post("/createSellOffer", sellOfferController.sellOfferController);
app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});

router.post("/createBuyOffer", buyOfferController.buyOfferController);
app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});

router.post("/getOffers", getOffercontroller.getOffercontroller);
app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});

router.post("/acceptSellOffer", acceptSellOffer.acceptSellOfferController);
app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});

router.post("/acceptBuyOffer", acceptBuyOffer.acceptBuyOfferController);
app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});

router.post("/cancelOffer", cancelOffer.cancelOfferController);
app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
  tokenId;
});
module.exports = router;
