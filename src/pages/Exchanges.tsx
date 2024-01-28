import { ExchangesData } from "@/lib/types";
import { CryptoExchangesDtaGenerator } from "@/lib/utils";
import { useEffect, useState, useMemo } from "react";

// import {
//   Collapsible,
//   CollapsibleContent,
//   CollapsibleTrigger,
// } from "@/components/ui/collapsible";
// import { Separator } from "@/components/ui/separator";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ExchangesSkeleton from "@/components/skeletons/ExchangesSkeleton";
import Error from "@/components/Error";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState<ExchangesData[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useMemo(() => {
    setLoading(true);
    CryptoExchangesDtaGenerator()
      .then((data) => setExchanges(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <ExchangesSkeleton />;

  if (error) return <Error message={JSON.stringify(error)}/>;

  return (
    <div className="w-full">
      <Table>
        <TableCaption>A list of Exchanges.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Exchanges</TableHead>
            <TableHead>24h Trade Volume</TableHead>
            <TableHead>Markets</TableHead>
            <TableHead>Changes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {exchanges?.map((exchange) => (
          <TableRow key={exchange.id}>
            <TableCell>{exchange.id}. <span className=" font-bold font-montserrat" style={{color: exchange.color}}>{exchange.name}</span></TableCell>
            <TableCell>{exchange.TradeVolume}</TableCell>
            <TableCell>{exchange.market}</TableCell>
            <TableCell>{exchange.changes}%</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* headers */}
      {/* <div className="flex justify-between items-center">
        <h1 className=" font-bold font-montserrat">Exchanges</h1>
        <h1 className="hidden lg:flex font-bold font-montserrat">
          24h Trade Volume
        </h1>
        <h1 className="hidden lg:flex font-bold font-montserrat">Markets</h1>
        <h1 className="hidden lg:flex font-bold font-montserrat">Changes</h1>
      </div>
      <Separator className="my-1" />
      {/* data */}
      {/* {exchanges?.map((exchange) => (
        <>
          <Collapsible className="my-4">
            <div className="flex justify-between items-center">
              <CollapsibleTrigger className="flex gap-3">
                <h1 className=" font-semibold font-montserrat">
                  {exchange.id}.
                </h1>
                <h1
                  className=" font-bold font-montserrat"
                  style={{ color: exchange.color }}
                >
                  {exchange.name}
                </h1>
              </CollapsibleTrigger>
              <h2 className="hidden lg:flex font-semibold font-montserrat items-end">
                {exchange.TradeVolume}
              </h2>
              <h2 className="hidden lg:flex font-semibold font-montserrat">
                {exchange.market}
              </h2>
              <h2 className="hidden lg:flex font-semibold font-montserrat">
                {exchange.changes}%
              </h2>
            </div>
            <CollapsibleContent className="my-2">
              <div className="flex flex-col lg:hidden">
                <h4 className=" font-semibold font-montserrat">
                  24h Trade Volume: {exchange.TradeVolume}
                </h4>
                <h4 className=" font-semibold font-montserrat">
                  Markets: {exchange.market}
                </h4>
                <h4 className=" font-semibold font-montserrat">
                  Changes: {exchange.changes}%
                </h4>
              </div>
              <p className="text-balance lg:text-pretty">
                {exchange.description}
              </p>
            </CollapsibleContent>
          </Collapsible>
          <Separator className="my-2" />
        </>
      ))} */}
    </div>
  );
};

export default Exchanges;
