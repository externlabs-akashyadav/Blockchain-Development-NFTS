import React, { useState } from "react";
import axios from "axios";

function App() {
  const [issuerAddress, setIssuerAddress] = useState(0);
  const [issuerTokenID, setIssuerTokenID] = useState(1);
  const [issuerAmount, setIssuerAmount] = useState(2);
  const [issuerTokenOfferIndex, setIssuerTokenOfferIndex] = useState(3);

  const mintToken = () => {
    axios({
      method: "post",
      url: "http://localhost:3005/mintToken",
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const listNFTS = () => {
    axios({
      method: "post",
      url: "http://localhost:3005/listNFTs",
      data: {
        address: issuerAddress,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const burnNFT = () => {
    axios({
      method: "post",
      url: "http://localhost:3005/burnNFT",
      data: {
        address: issuerAddress,
        tokenID: issuerTokenID,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const createSellOffer = () => {
    axios({
      method: "post",
      url: "http://localhost:3005/createSellOffer",
      data: {
        tokenID: issuerTokenID,
        amount: issuerAmount,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getOffers = () => {
    axios({
      method: "post",
      url: "http://localhost:3005/getOffers",
      data: {
        tokenID: issuerTokenID,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const acceptSellOffer = () => {
    axios({
      method: "post",
      url: "http://localhost:3005/acceptSellOffer",
      data: {
        tokenOfferIndex: issuerTokenOfferIndex,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const createBuyOffer = () => {
    axios({
      method: "post",
      url: "http://localhost:3005/createBuyOffer",
      data: {
        tokenID: issuerTokenID,
        amount: issuerAmount,
        address: issuerAddress,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const acceptBuyOffer = () => {
    axios({
      method: "post",
      url: "http://localhost:3005/acceptBuyOffer",
      data: {
        tokenOfferIndex: issuerTokenOfferIndex,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const cancelOffer = () => {
    axios({
      method: "post",
      url: "http://localhost:3005/acceptBuyOffer",
      data: {
        tokenOfferIndex: issuerTokenOfferIndex,
        tokenID: issuerTokenID,
      },
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div style={styles.container}>
      <dir></dir>
      <button onClick={mintToken}>mintToken</button>
      <dir></dir>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setIssuerAddress(event.target.value);
        }}
      />
      <br />
      <button onClick={listNFTS}>List NFTs</button>
      <dir></dir>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setIssuerAddress(event.target.value);
        }}
      />{" "}
      <br />
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setIssuerTokenID(event.target.value);
        }}
      />{" "}
      <br />
      <button onClick={burnNFT}> burnNFT</button>
      <dir></dir>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setIssuerTokenID(event.target.value);
        }}
      />
      <br />
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setIssuerAmount(event.target.value);
        }}
      />{" "}
      <br />
      <button onClick={createSellOffer}> createSellOffer</button>
      <dir></dir>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setIssuerTokenID(event.target.value);
        }}
      />
      <br />
      <button onClick={getOffers}> getOffers</button>
      <dir></dir>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setIssuerTokenOfferIndex(event.target.value);
        }}
      />
      <br />
      <button onClick={acceptSellOffer}> acceptSellOffer</button>
      <dir></dir>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setIssuerTokenID(event.target.value);
        }}
      />
      <br />
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setIssuerAmount(event.target.value);
        }}
      />
      <br />
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setIssuerAddress(event.target.value);
        }}
      />
      <br />
      <button onClick={createBuyOffer}> createBuyOffer</button>
      <dir></dir>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setIssuerTokenOfferIndex(event.target.value);
        }}
      />
      <br />
      <button onClick={acceptBuyOffer}> acceptBuyOffer</button>
      <dir></dir>
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setIssuerTokenOfferIndex(event.target.value);
        }}
      />
      <br />
      <input
        onChange={(event) => {
          console.log(event.target.value);
          setIssuerTokenID(event.target.value);
        }}
      />
      <br />
      <button onClick={cancelOffer}> cancelOffer</button>
      <dir></dir>
    </div>
  );
}

// Some styles given to button
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f0fff0",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    marginBottom: 20,
    padding: 30,
  },
  space: {
    width: 50, // or whatever size you need
    height: 50,
  },
};

export default App;
