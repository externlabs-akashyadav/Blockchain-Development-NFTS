var xrpl = require('xrpl')



const acceptSellOfferController=(async function sellOffer(req,res,next) {

     const tokenOfferIndex= req.body.tokenOfferIndex
    res.json(await acceptSellOffer(tokenOfferIndex));
    
});

async function acceptSellOffer(tokenOfferIndex) {

	const wallet = xrpl.Wallet.fromSeed(process.env.SECRETNEW)
	const client = new xrpl.Client("wss://xls20-sandbox.rippletest.net:51233")
	await client.connect()
	console.log("Connected to Sandbox")

 // Prepare transaction -------------------------------------------------------
  const transactionBlob = {
      	"TransactionType": "NFTokenAcceptOffer",
      	"Account": wallet.classicAddress,
      	"SellOffer": tokenOfferIndex
  }
  // Submit signed blob --------------------------------------------------------
  const tx = await client.submitAndWait(transactionBlob,{wallet})
  const nfts = await client.request({
	method: "account_nfts",
	account: wallet.classicAddress
  })
  console.log(JSON.stringify(nfts,null,2))

  // Check transaction results -------------------------------------------------
  console.log("Transaction result:",
    JSON.stringify(tx.result.meta.TransactionResult, null, 2))
  console.log("Balance changes:",
    JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2))
    var result=JSON.stringify(tx.result.meta.TransactionResult, null, 2)
  client.disconnect()

  return (result);
  // End of acceptSellOffer()
}



module.exports={acceptSellOfferController}

