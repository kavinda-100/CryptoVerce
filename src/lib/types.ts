
export type GloableStats = {
  total: number;
  total24hVolume: string;
  totalCoins: number;
  totalExchanges: number;
  totalMarketCap: string;
  totalMarkets: number;
};

export type newsType = {
  card: string
  date: number
  id: string
  longURL: string
  title: string
}

export type Data ={
  name: string
  BTC: number
  $: number
  amt: number
}

export type ExchangesData = {
      id: number
      name: string
      TradeVolume: string
      market: string
      changes: string
      description: string
      color: string
}