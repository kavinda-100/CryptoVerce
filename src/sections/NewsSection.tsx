import CryptoNewsCard from "@/components/CryptoNewsCard";
import Error from "@/components/Error";
import Search from "@/components/Search";
import NewsSkeleton from "@/components/skeletons/NewsSkeleton";


type NewsSectionProps = {
  isHome: boolean;
};

import { useGetNewsQuery } from "@/features/api/CoinNews";
import { newsType } from "@/lib/types";
import { CreateArray } from "@/lib/utils";
import { useEffect, useState } from "react";

const NewsSection = ({ isHome }: NewsSectionProps) => {
  const {
    data: cryptoNewsList,
    isLoading,
    isError,
  } = useGetNewsQuery("cryptocurrency");
  const [cryptoNews, setCryptoNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setCryptoNews(cryptoNewsList?.news);
    // filter news based on search term
    if (searchTerm !== "") {
      const filteredNews = cryptoNewsList?.news?.filter((news: newsType) =>
        news.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCryptoNews(filteredNews);
    }
  }, [cryptoNewsList, searchTerm]);

  // if isHome, show only 8 news
  useEffect(() => {
    if (isHome) {
      const firstEightNews = cryptoNewsList?.news?.slice(0, 8);
      setCryptoNews(firstEightNews);
    }
  }, [isHome, cryptoNewsList]);

  const amount: number = isHome ? 8 : 25;
  const skeletonArray = CreateArray(amount);
  console.log(cryptoNews);

  return (
    <div>
      {!isHome && 
      <div className="w-5/6 lg:w-2/6 my-3">
        <Search 
        placeholder="Search Cryptocurrencies News"
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        />
      </div>
      }
      {isLoading ? (
        // skeleton
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {skeletonArray.map((_, i) => (
            <NewsSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {
            cryptoNews?.map((news: newsType) => (
              <CryptoNewsCard
                key={news.id}
                id={news.id}
                card={news.card}
                title={news.title}
                longURL={news.longURL}
                date={news.date}
              />
            ))
          }
        </div>
      )}
      {
        // error
        isError && <>
        {/* <Error message={JSON.stringify(error?.data)}/> */}
        <Error message="something went wrong"/>
        </>
      }
    </div>
  );
};

export default NewsSection;
