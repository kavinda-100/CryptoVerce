import { useGetCoinDetailsQuery } from "@/features/api/CoinApi";
import HTMLReactParser from "html-react-parser/lib/index";
import {
  AudioWaveform,
  BadgeCent,
  Ban,
  CandlestickChart,
  CircleDollarSign,
  PackageCheck,
  ShieldCheck,
  ShieldHalf,
  Trophy,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Separator } from "@/components/ui/separator";

import millify from "millify";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LineCharts from "@/components/LineCharts";
import CryptoDetailSkeleton from "@/components/skeletons/CryptoDetailSkeleton";
import Error from "@/components/Error";

type LinkType = {
  name: string;
  type: string;
  url: string;
};

const CryptoDetails = () => {
  const { coinId } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isLoading, isError } = useGetCoinDetailsQuery(coinId as string);

  const cryptoDetails = data?.data?.coin;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <CircleDollarSign />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <ShieldHalf /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: <AudioWaveform />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <CandlestickChart />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <Trophy />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <BadgeCent />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <AudioWaveform />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? <ShieldCheck /> : <Ban />,
      icon: <PackageCheck />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <PackageCheck />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }-`,
      icon: <PackageCheck />,
    },
  ];

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!coinId) return <div>Not Found</div>;

  return (
    <>
      {isLoading ? (
        <div className="w-full">
          <CryptoDetailSkeleton />
        </div>
      ) : (
        <div className="w-full flex flex-col">
          {/* -------------------------------------------- */}
          {/* title */}
          <div className="flex flex-col w-full my-5 items-center">
            <h1 className="text-lg lg:text-xl my-2 text-balance font-bold font-montserrat">
              {data?.data?.coin?.name} ({data?.data?.coin.symbol}) Price
            </h1>
            <p className="text-balance">
              {cryptoDetails?.name} live price in US Dollar (USD). View value
              statistics, market cap and supply.
            </p>
          </div>
          {/* select menu */}
          <div>
            <Select onValueChange={(value) => setTimePeriod(value)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select TimePeriod" />
              </SelectTrigger>
              <SelectContent>
                {time.map((date) => (
                  <SelectItem key={date} value={date}>
                    {date}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* line chart */}
          <div className="w-full my-6">
            <LineCharts  timePeriod={timePeriod}/>
          </div>
          {/* -------------------------------------------- */}
          {/* crypto info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 my-10">
            {/* related currency */}
            <div className="w-full flex flex-col gap-2">
              <div className=" justify-start">
                <h1 className="text-lg lg:text-xl my-2 text-balance font-bold font-montserrat">
                  {cryptoDetails?.name} Value Statistics
                </h1>
                <p className="text-balance">
                  An overview showing the statistics of {cryptoDetails?.name},
                  such as the base and quote currency, the rank, and trading
                  volume.
                </p>
              </div>
              {stats.map(({ icon, title, value }) => (
                <div key={title}>
                  <div className="w-full flex flex-row gap-2 justify-between items-center mt-5">
                    <span className="w-full flex flex-row gap-2">
                      <h3 className="text-balance">{icon}</h3>
                      <h3 className="text-balance">{title}</h3>
                    </span>
                    <span className="w-full flex justify-end">
                      <h4 className="text-balance">{value}</h4>
                    </span>
                  </div>
                  <Separator className="my-1" />
                </div>
              ))}
            </div>
            {/* Other related currency */}
            <div className="w-full flex flex-col gap-2">
              <div className=" justify-start">
                <h1 className="text-lg lg:text-xl my-2 text-balance font-bold font-montserrat">
                  Other Stats Info
                </h1>
                <p className="text-balance">
                  An overview showing the statistics of {cryptoDetails?.name},
                  such as the base and quote currency, the rank, and trading
                  volume.
                </p>
              </div>
              {genericStats.map(({ icon, title, value }) => (
                <div key={value}>
                  <div className="w-full flex flex-row gap-2 justify-between items-center mt-5">
                    <span className="w-full flex flex-row gap-2">
                      <h3 className="text-balance">{icon}</h3>
                      <h3 className="text-balance">{title}</h3>
                    </span>
                    <span className="w-full flex justify-end">
                      <h4 className="text-balance">{value}</h4>
                    </span>
                  </div>
                  <Separator className="my-1" />
                </div>
              ))}
            </div>
          </div>
          {/* -------------------------------------------- */}
          {/* crypto links */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 my-10">
            {/* related currency */}
            <div className="w-full flex flex-col gap-2">
              <div className=" justify-start">
                <h1 className="text-lg lg:text-xl my-2 text-balance font-bold font-montserrat">
                  What is {cryptoDetails?.name}?
                </h1>
                {HTMLReactParser(cryptoDetails?.description || "")}
              </div>
            </div>
            {/* Other related currency */}
            <div className="w-full flex flex-col gap-2">
              <div className=" justify-start">
                <h1 className="text-lg lg:text-xl my-2 text-balance font-bold font-montserrat">
                  {cryptoDetails?.name} Links
                </h1>
              </div>
              {cryptoDetails?.links?.map((link: LinkType) => (
                <div key={link.name}>
                  <div className="w-full flex flex-row gap-2 justify-between items-center mt-5">
                    <span className="w-full flex flex-row gap-2">
                      <h3 className="text-balance">{link.type}</h3>
                    </span>
                    <span className="w-full flex justify-end">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className=" hover:underline cursor-pointer"
                      >
                        {link.name}
                      </a>
                    </span>
                  </div>
                  <Separator className="my-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {isError && <Error message="Something went wrong" />}
    </>
  );
};

export default CryptoDetails;
