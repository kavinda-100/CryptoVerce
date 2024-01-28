
// component
import CryptoCurrenciesCard, { CryptoCurrenciesCardProps } from "@/components/CryptoCurrenciesCard";
import Error from "@/components/Error";
import Search from "@/components/Search";
import CardSkeleton from "@/components/skeletons/CardSkeleton";
// API query
import { useGetCoinsQuery } from "@/features/api/CoinApi";
import { CreateArray } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


type CryptoSectionProps = {
  isHome: boolean;
  amount: string;
};

const CryptoSection = ({ isHome, amount }: CryptoSectionProps) => {
  const { data: cryptoList, isLoading, isError } = useGetCoinsQuery(amount);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // console.log(cryptoList?.data?.coins);
  const skeletonArray = CreateArray(Number(amount));

  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);
    // filter
    const results = cryptoList?.data?.coins?.filter((crypto: CryptoCurrenciesCardProps) => crypto.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setCryptos(results);
  }, [searchTerm, cryptoList])

  return (
    <div>
      {!isHome && 
      <div className="w-5/6 lg:w-2/6 my-3">
        <Search 
        placeholder="Search Cryptocurrencies"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        />
      </div>}
      {isLoading ? (
        // skeleton
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {skeletonArray.map((_, i) => (<CardSkeleton key={i} />))}
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {
            cryptos?.map((crypto: CryptoCurrenciesCardProps) => (
              <Link 
              to={`/crypto/${crypto.uuid}`} 
              key={crypto.uuid}>
              <CryptoCurrenciesCard
                key={crypto.uuid}
                name={crypto.name}
                rank={crypto.rank}
                iconUrl={crypto.iconUrl}
                price={crypto.price}
                marketCap={crypto.marketCap}
                change={crypto.change}
              />
              </Link>
            ))
          }
        </div>
      )}
      {
        isError && (
          <>
          <Error message="Something went wrong" />
          </>
        )
      }
    </div>
  );
};

export default CryptoSection;
