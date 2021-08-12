#!/usr/bin/env node
require("dotenv").config();

const Api = require("../core/api/apiConfig").Api;
const readline = require("readline");
// Binance Will List Mina (MINA)

let coinList = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getCoin = (inStr) => {
  const getCoinRegex = /(?<=\().+?(?=\))/g;
  const buyList = inStr.match(getCoinRegex);
  buyList.forEach((coinWantToBuy) => {
    if (coinList.includes(coinWantToBuy)) {
      console.log(coinWantToBuy);
      buyCoin(coinWantToBuy);
    }
  });
};

const showQuestion = () => {
  rl.question("What do you want to buy: ", (inputStr) => {
    showQuestion(getCoin(inputStr));
  });
};

const getCoinList = () => {
  Api.get("open/api/v2/market/coin/list").then((response) => {
    const responseList = response.data.data;
    responseList.forEach((coinInfo) => {
      coinList.push(coinInfo.currency);
    });
    console.log("this is coin list", coinList);
    showQuestion();
  });
};

const buyCoin = (coinCode) => {
  const buySubmitData = {
    symbol: coinCode,
    price: 1.2472,
    quantity: 1,
    trade_type: "BID",
    order_type: "LIMIT_ORDER",
    // api_key: process.env.USER_TOKEN,
    // req_time: new Date().getTime(),
  };
  console.log('this is fucking key', process.env.USER_TOKEN);
  console.log('this is fucking sign___key', process.env.USER_TOKEN);
  const now = new Date();
  const timestamp = now.getTime()/1000;
  const buyRequestHeader = {
    api_key: process.env.USER_TOKEN,
    req_time: timestamp,
    sign: process.env.SIGN_KEY,
  };
  Api.post("open/api/v2/order/place", buySubmitData, {params: {...buyRequestHeader}})
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error.response);
    });
};

getCoinList();
