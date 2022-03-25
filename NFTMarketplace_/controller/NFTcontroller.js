

var xrpl = require('xrpl')

// const newNFTController=requestMint()

const newNFTController=(async function requestMint(req,res,next)  {
    res.json(await mintToken());
});



// const newNFTControllertest= requestMint()

// async function requestMint(req,res,next){

//     const result =  await mintToken()
//      return result
// };


// async function newmethod(){

//     const ipfs= 'ipfs://QmQjDvDhfHcMyUgDAxKig4AoMTtS5JrsfpiEEpFa3F9QRt';

//     const secret='';
//     console.log('Secret',process.env.SECRET)

//     mintToken()

    

//     return (ntfs);
// }

async function mintToken() {
    const wallet = xrpl.Wallet.fromSeed(process.env.SECRET)
    const client = new
         xrpl.Client("wss://xls20-sandbox.rippletest.net:51233")
    await client.connect()
    console.log("Connected to devnet")

    const transactionBlob = {
		TransactionType: "NFTokenMint",
		Account: wallet.classicAddress,
		URI: xrpl.convertStringToHex(process.env.TOKEN_URL),
		Flags: parseInt(11),
		TokenTaxon: 0 //Required, but if you have no use for it, set to zero.
	}
	// Submit signed blob --------------------------------------------------------
	const tx = await client.submitAndWait(transactionBlob,{wallet})

	const nfts = await client.request({
		method: "account_nfts",
		account: wallet.classicAddress
	})
	console.log(nfts)
    
    console.log('NTFS Value', JSON.stringify(nfts,null,4));

	// Check transaction results -------------------------------------------------
	console.log("Transaction result:", tx.result.meta.TransactionResult)
	console.log("Balance changes:",
	  JSON.stringify(xrpl.getBalanceChanges(tx.result.meta), null, 2))
	client.disconnect()

    return (nfts);
}

module.exports={newNFTController}

