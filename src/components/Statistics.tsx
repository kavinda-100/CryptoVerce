type StatisticsProps = {
  text: string
  value: number | string
}

const Statistics = ({text, value}: StatisticsProps) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className=" font-montserrat font-semibold dark:text-gray-400 text-gray-500 text-balance">{text}</h3>
      <h5 className=" font-montserrat font-medium text-balance">{value}</h5>
    </div>
  )
}

export default Statistics