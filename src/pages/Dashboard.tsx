// components
import Statistics from "@/components/Statistics";
import NewsSection from "@/sections/NewsSection";
import CryptoSection from "@/sections/CryptoSection";

// redux
import { useGetCoinsQuery } from "@/features/api/CoinApi";

//icons
import { Gem } from "lucide-react";

//types
import { GloableStats } from "@/lib/types";

//
import millify from "millify";
import { Link } from "react-router-dom";
import { CreateArray } from "@/lib/utils";
import StatisticsSkeleton from "@/components/skeletons/StatisticsSkeleton";
import { useEffect } from "react";

const Dashboard = () => {
  const { data, isLoading, isError } = useGetCoinsQuery("10");
  // console.log(data);
  const gloablestats: GloableStats = data?.data?.stats;
// array for skeleton
  const skeletonArray = CreateArray(5);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <>
      {isLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-3 mt-5">
          {skeletonArray.map((_, index) => (<StatisticsSkeleton key={index} />))}
        </div>
      ) : (
        <div className="w-full">
          <h1 className="font-bold font-montserrat text-lg lg:text-xl flex gap-2">
            Global Crypto Status <Gem />
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 mb-3 mt-5">
            <Statistics
              text="Total CryptoCurrencies"
              value={gloablestats?.totalCoins}
            />
            <Statistics
              text="Total Exchanges"
              value={millify(gloablestats?.totalExchanges)}
            />
            <Statistics
              text="Total Market Cap"
              value={millify(Number(gloablestats?.totalMarketCap))}
            />
            <Statistics
              text="Total 24h Volume"
              value={millify(Number(gloablestats?.total24hVolume))}
            />
            <Statistics
              text="Total Markets"
              value={millify(gloablestats?.totalMarkets)}
            />
          </div>
        </div>
      )}
      {isError && <h1 className="text-red-500">Error</h1>}

      {/* Crypto Currencies */}
      <div className="w-full mt-7 flex flex-col">
        <div className="flex justify-between items-center lg:mx-6">
          <h1 className="font-bold font-montserrat text-lg lg:text-xl flex gap-2 text-balance">
            Top 10 Crypto Currencies
          </h1>
          <Link
            to="/crypto"
            className="font-montserrat font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-balance ml-2"
          >
            show more
          </Link>
        </div>
        <CryptoSection isHome amount="10" />
      </div>
      {/* Crypto News */}
      <div className="w-full mt-7 flex flex-col">
        <div className="flex justify-between items-center lg:mx-6">
          <h1 className="font-bold font-montserrat text-lg lg:text-xl flex gap-2 text-balance">
            Latest Crypto News
          </h1>
          <Link
            to="/news"
            className="font-montserrat font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 text-balance ml-2"
          >
            show more
          </Link>
        </div>
        <NewsSection isHome />
      </div>
    </>
  );
};

export default Dashboard;
