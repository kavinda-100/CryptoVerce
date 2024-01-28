import { newsType } from "@/lib/types"
import moment from "moment";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "./ui/button";


const CryptoNewsCard = ({card, title, longURL, date, id}: newsType) => {
  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="text-balance">{card}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-balance">{title}</CardDescription>
        <h6 className="hidden">{moment(date).startOf("hour").hours()}</h6>
      </CardContent>
        <h6 className="hidden">{id}</h6>
      <CardFooter>
        <Button asChild variant="secondary">
          <a href={longURL} target="_blank">Open</a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default CryptoNewsCard