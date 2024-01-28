import { Skeleton } from "../ui/skeleton"

const NewsSkeleton = () => {
  return (
    <div className="w-full shadow-md px-4 py-6 flex flex-col justify-between rounded-md">
      <div className="flex justify-center items-center">
        <Skeleton className="w-3/6 h-2" />
      </div>
      <div className="mt-5">
        <div className="flex flex-col gap-3">
          <Skeleton className="w-3/6 h-2" />
          <Skeleton className="w-3/6 h-2" />
        </div>
      </div>
    </div>
  )
}

export default NewsSkeleton