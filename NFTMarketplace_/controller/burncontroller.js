var xrpl = require("xrpl");

const burncontroller = async function burn(req, res, next) {
  //  const address= req.body.address
  const address = req.body.address;
  const tokenID = req.body.tokenID;

  res.json(await burnToken(address, tokenID));
};

async function burnToken(address, tokenID) {
  const wallet = xrpl.Wallet.fromSeed(process.env.SECRET);
  const client = new xrpl.Client("wss://xls20-sandbox.rippletest.net:51233");
  await client.connect();
  console.log("Connected to Sandbox");

  // Prepare transaction -------------------------------------------------------
  const transactionBlob = {
    TransactionType: "NFTokenBurn",
    Account: address,
    TokenID: tokenID,
  };

  // Submit signed blob --------------------------------------------------------
  const tx = await client.submitAndWait(transactionBlob, { wallet });
  const nfts = await client.request({
    method: "account_nfts",
    account: wallet.classicAddress,
  });
  console.log(nfts);
  // Check transaction results -------------------------------------------------
  console.log("Transaction result:", tx.result.meta.TransactionResult);
  console.log(
    "Balance changes:",
    JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2)
  );
  client.disconnect();

  return tx.result.meta.TransactionResult;
}

module.exports = { burncontroller };
