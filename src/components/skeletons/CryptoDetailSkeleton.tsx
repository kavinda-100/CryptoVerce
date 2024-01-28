import { CreateArray } from "@/lib/utils"
import { Separator } from "../ui/separator"
import { Skeleton } from "../ui/skeleton"


const CryptoDetailSkeleton = () => {
  return (
    <div className="w-full flex flex-col">
          {/* -------------------------------------------- */}
          {/* title */}
          <div className="flex flex-col w-full my-5 items-center">
            <Skeleton className=" h-4 w-3/5" />
            <Skeleton className=" h-6 w-5/5" />
          </div>
          {/* select menu */}
          <div>
          <Skeleton className=" h-10 w-3/5" />
          </div>
          {/* line chart */}
          <div className="w-full my-6">
          <Skeleton className=" h-72 w-4/5" />
          </div>
          {/* -------------------------------------------- */}
          {/* crypto info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 my-10">
            {/* related currency */}
            <div className="w-full flex flex-col gap-2">
              <div className=" justify-start">
                <Skeleton className=" h-4 w-3/5" />
                <Skeleton className=" h-6 w-5/5" />
              </div>
              <MapSkeleton />
            </div>
            {/* Other related currency */}
            <div className="w-full flex flex-col gap-2">
              <div className=" justify-start">
                <Skeleton className=" h-4 w-3/5" />
                <Skeleton className=" h-6 w-5/5" />
              </div>
              <MapSkeleton />
            </div>
          </div>
          {/* -------------------------------------------- */}
          {/* crypto links */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 my-10">
            {/* related currency */}
            <div className="w-full flex flex-col gap-2">
              <div className=" justify-start">
                <Skeleton className=" h-4 w-3/5" />
                <Skeleton className=" h-6 w-5/5" />
              </div>
              <MapSkeleton />
            </div>
            {/* Other related currency */}
            <div className="w-full flex flex-col gap-2">
              <div className=" justify-start">
                <Skeleton className=" h-4 w-3/5" />
                <Skeleton className=" h-6 w-5/5" />
              </div>
              <MapSkeleton />
            </div>
          </div>
        </div>
  )
}

export default CryptoDetailSkeleton


const MapSkeleton = () => {
    const skeleton = CreateArray(5)
    return(
        <>
        {
            skeleton.map((_, index) => (
                <div key={index} className="w-full flex flex-row gap-2 justify-between items-center mt-5">
                    <span className="w-full flex flex-row gap-2">
                    <Skeleton className=" h-4 w-4" />
                    <Skeleton className=" h-4 w-full" />
                    </span>
                    <span className="w-full flex justify-end">
                    <Skeleton className=" h-4 w-full" />
                    </span>
                    <Separator className="my-1" />
                </div>
            ))
        }
        </>
    )
}