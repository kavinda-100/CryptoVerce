import { CreateCryptoValues } from "@/lib/utils";
import { useMemo, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type LineChartsProps = {
  timePeriod: string
}
const LineCharts = ({timePeriod}: LineChartsProps) => {
  const [data, setData] = useState(CreateCryptoValues())
  
  useMemo(() => {
    const NewData = CreateCryptoValues()
    setData(NewData)
  }, [timePeriod])
  
  return (
    <ResponsiveContainer aspect={3}>
        <LineChart
          data={data}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="$" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="BTC" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
  )
}

export default LineCharts