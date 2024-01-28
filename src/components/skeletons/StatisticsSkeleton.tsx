import { Skeleton } from "../ui/skeleton"

const StatisticsSkeleton = () => {
  return (
    <div className="w-full shadow-md px-4 py-6 rounded-md">
      <div className="flex flex-col gap-3">
          <Skeleton className="w-5/6 h-2" />
          <Skeleton className="w-3/6 h-2" />
      </div>
    </div>
  )
}

export default StatisticsSkeleton