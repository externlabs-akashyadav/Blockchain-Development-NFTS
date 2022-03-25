var xrpl = require("xrpl");

const buyOfferController = async function buyOffer(req, res, next) {
  //  const address= req.body.address

  var tokenID = req.body.tokenID;
  var amount = req.body.amount;
  var ownerAddress = req.body.ownerAddress;
  res.json(await createBuyOffer(tokenID, amount, ownerAddress));
};

async function createBuyOffer(tokenID, amount, ownerAddress) {
  const wallet = xrpl.Wallet.fromSeed(process.env.SECRET);
  const client = new xrpl.Client("wss://xls20-sandbox.rippletest.net:51233");
  await client.connect();
  console.log("hello");
  console.log("Connected to Sandbox");

  // Prepare transaction -------------------------------------------------------
  const transactionBlob = {
    TransactionType: "NFTokenCreateOffer",
    Account: wallet.classicAddress,
    Owner: ownerAddress,
    TokenID: tokenID,
    Amount: amount,
    Flags: parseInt(1),
  };

  // Submit signed blob --------------------------------------------------------
  const tx = await client.submitAndWait(transactionBlob, { wallet });

  console.log("***Sell Offers***");
  let nftSellOffers;
  try {
    nftSellOffers = await client.request({
      method: "nft_sell_offers",
      tokenid: tokenId,
    });
  } catch (err) {
    console.log("No sell offers.");
  }
  console.log(JSON.stringify(nftSellOffers, null, 2));
  console.log("***Buy Offers***");
  let nftBuyOffers;
  try {
    nftBuyOffers = await client.request({
      method: "nft_buy_offers",
      tokenid: tokenId,
    });
  } catch (err) {
    console.log("No buy offers.");
  }
  console.log(JSON.stringify(nftBuyOffers, null, 2));

  // Check transaction results -------------------------------------------------
  console.log(
    "Transaction result:",
    JSON.stringify(tx.result.meta.TransactionResult, null, 2)
  );
  console.log(
    "Balance changes:",
    JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2)
  );
  var result = JSON.stringify(tx.result.meta.TransactionResult, null, 2);
  client.disconnect();

  return result;
  // End of createBuyOffer()
}

module.exports = { buyOfferController };
