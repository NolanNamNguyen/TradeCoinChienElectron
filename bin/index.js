#!/usr/bin/env node

const Api = require('../core/api/apiConfig').Api;
const readline = require('readline');
// Binance Will List Mina (MIN1A) and Raydium (RAY) in the Innovation Zone

let coinList = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getCoin = (inStr) => {
  const getCoinRegex = /(?<=\().+?(?=\))/g;
  const buyList = inStr.match(getCoinRegex);
  buyList.forEach(coinWantToBuy => {
    coinList.includes(coinWantToBuy) && console.log(`Buy ${coinWantToBuy}`);
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
    responseList.forEach(coinInfo => {
      coinList.push(coinInfo.currency);
    });
    console.log('this is coin list', coinList);
    showQuestion();
  });
};

const buyCoin = () => {
  Api.post()
}


getCoinList();




