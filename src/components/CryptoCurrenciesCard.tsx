import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import millify from "millify";

export type CryptoCurrenciesCardProps = {
  uuid?: string;
  name: string;
  rank: string;
  iconUrl: string;
  price: number;
  marketCap: number;
  // dailyChange: string;
  change: string;
};

const CryptoCurrenciesCard = ({
  name,
  rank,
  iconUrl,
  price,
  marketCap,
  change,
}: CryptoCurrenciesCardProps) => {
  return (
    <Card className="flex flex-col justify-between hover:dark:brightness-150">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className=" text-balance">{name}</CardTitle>
        <img
          src={iconUrl}
          alt={`${name}-${rank}`}
          className="w-7 h-7 rounded-full"
        />
      </CardHeader>
      <CardContent>
          <div className="flex flex-col gap-2">
            <h6>Price: {millify(price)}</h6>
            <h6>Market Cap: {millify(marketCap)}</h6>
            <h6>Daily Change: {millify(Number(change))}%</h6>
          </div>
      </CardContent>
    </Card>
  );
};

export default CryptoCurrenciesCard;
