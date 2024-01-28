import { CreateArray } from "@/lib/utils";
import { Skeleton } from "../ui/skeleton";

const ExchangesSkeleton = () => {
  const skeletonArray = CreateArray(10);
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <Skeleton className=" w-full h-5" />
        <Skeleton className=" w-full h-5" />
        <Skeleton className=" w-full h-5" />
        <Skeleton className=" w-full h-5" />
      </div>
      <Skeleton className=" w-full h-1" />
      {skeletonArray.map((_, index) => (
        <div className="flex justify-between items-center" key={index}>
          <Skeleton className=" w-full h-5" />
          <Skeleton className=" w-full h-5" />
          <Skeleton className=" w-full h-5" />
          <Skeleton className=" w-full h-5" />
        </div>
      ))}
    </div>
  );
};

export default ExchangesSkeleton;
