import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { faker} from "@faker-js/faker"
import millify from "millify"
import { ExchangesData } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CreateArray = (amount: number) => {
  const skeletonArray: number[] = new Array(Number(amount)).fill(0);
  return skeletonArray;
}

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
}

export const CreateCryptoValues = () => {
  const moths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", 'November', 'December'];

  // return array with 12 object with random values
  return moths.map((month) => {
    return {
      month,
      BTC: randomNumber(1000, 10000),
      $: randomNumber(1000, 5000),
      amt: randomNumber(1000, 10000),
    }
  })
}

export const createLightHexColorArray = (amount: number): string[] => {
  const colors: string[] = [];
  const darkColors = ["#000000", "#333333", "#666666", "#999999", "#ffffff"];
  const redColors = ["#FF0000", "#FF3333", "#FF6666", "#FF9999", "#FFCCCC"];

  while (colors.length < amount) {
    const color = faker.internet.color();
    if (!darkColors.includes(color) && !redColors.includes(color)) {
      colors.push(color);
    }
  }

  return colors;
}

export const CryptoExchangesDtaGenerator = async (): Promise<ExchangesData[]> => {
  // crypto coins names
  const cryptoNames = ["Bitcoin", "Ethereum", "Cardano", "Tether", "Binance Coin", "XRP", "Solana", "Polkadot", "USD Coin", "Dogecoin", "Avalanche", "Terra", "Binance USD", "Uniswap", "Chainlink", "Litecoin", "Algorand", "Bitcoin Cash", "Cosmos", "Polygon", "Internet Computer", "Stellar", "VeChain", "Filecoin", "TRON", "Wrapped Bitcoin", "FTX Token", "Dai", "Ethereum Classic", "Theta Network", "Aave", "Monero", "EOS", "Crypto.com Coin", "Shiba Inu", "PancakeSwap", "TerraUSD", "Amp", "Tezos", "BitTorrent", "Fantom", "OKB", "NEO", "Klaytn", "Elrond", "cETH", "cUSDC", "cDAI", "Compound", "Kusama",]

  const colors = createLightHexColorArray(cryptoNames.length);  

  // return array with object
  return cryptoNames.map((name, index) => {
    return{
      id: index + 1,
      name,
      TradeVolume: millify(randomNumber(10000000, 70000000)),
      market: millify(randomNumber(100, 1500)),
      changes: (Math.random() * 10).toFixed(2),
      description: faker.lorem.paragraphs(randomNumber(3, 5)),
      color: colors[index],
    }
  })
}

