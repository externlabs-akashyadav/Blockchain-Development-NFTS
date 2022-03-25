var xrpl = require('xrpl')




const getOffercontroller=(async function getOffer(req,res,next) {

    const tokenID= req.body.tokenID
    console.log("tokenId: ",tokenID);
    
    res.json(await getOffers(tokenID));
    
});


// const newNFTController=(async function requestMint(req,res,next)  {
//     res.json(await mintToken());
// });

async function getOffers(tokenID) {

	const wallet = xrpl.Wallet.fromSeed(process.env.SECRET)
	const client = new xrpl.Client("wss://xls20-sandbox.rippletest.net:51233")
	await client.connect()
	console.log("Connected to Sandbox")
    console.log("***Sell Offers***")
    let nftSellOffers
      try {
	    nftSellOffers = await client.request({
		method: "nft_sell_offers",
		tokenid: tokenID
	  })
	  } catch (err) {
	    console.log("No sell offers. catch block")
	}
    console.log(JSON.stringify(nftSellOffers,null,2))
    console.log("***Buy Offers***")
    let nftBuyOffers
    try {
      nftBuyOffers = await client.request({
  	  method: "nft_buy_offers",
	  tokenid: tokenID})
    } catch (err) {
      console.log("No buy offers.")
  }
  console.log(JSON.stringify(nftBuyOffers,null,2))
var result=nftSellOffers + nftBuyOffers;
  client.disconnect()
  return (nftSellOffers);
  // End of getOffers()
}


module.exports={getOffercontroller}