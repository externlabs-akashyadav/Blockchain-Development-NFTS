var xrpl = require("xrpl");

var express = require("express");
var app = express();
var bodyParser = require("body-Parser");
var multer = require("multer");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array());

const listNFTController = async function listNFTs(req, res, next) {
  const address = req.body.address;
  console.log("HTML ADDRESSS", address);
  res.json(await ListNFTs(address));
};

async function ListNFTs(address) {
  const wallet = xrpl.Wallet.fromSeed(process.env.SECRET);
  const client = new xrpl.Client("wss://xls20-sandbox.rippletest.net:51233");
  await client.connect();
  console.log("Connected to devnet");

  const nfts = await client.request({
    method: "account_nfts",
    account: address,
  });
  console.log(nfts);

  console.log("NTFS Value", JSON.stringify(nfts, null, 4));

  // Check transaction results -------------------------------------------------
  //console.log("Transaction result:", tx.result.meta.TransactionResult)
  // console.log("Balance changes:",
  //  JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2))
  client.disconnect();

  return nfts;
}

module.exports = { listNFTController };
