import DashboardBox from '@/components/DashboardBox'
import { useGetKpisQuery } from '@/state/api';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'recharts';
import React, { useMemo } from 'react';
import { useTheme } from '@emotion/react';


const Row1 = () => {
  const tempData = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  const { palette } = useTheme();
  const { data } = useGetKpisQuery();
  console.log("data: ", data)
  //this is memo, the second arguament is only going change when we want the second arguament to change
  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses
        }
      })
    )
  }, [data]);
  return (
    <>
        <DashboardBox gridArea="a">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={tempData}
              margin={{
                top: 15,
                right: 25,
                left: -10,
                bottom: 60,
              }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" 
                  stopColor={palette.primary[300]} 
                  stopOpacity={0.5}
                  />
                  <stop offset="95%" 
                  stopColor={palette.primary[300]} 
                  stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" 
                  stopColor={palette.primary[300]} 
                  stopOpacity={0.5}
                  />
                  <stop offset="95%" 
                  stopColor={palette.primary[300]} 
                  stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tickLine={false} style={{fontSize: "10px"}}/>
              <YAxis tickLine={false} axisLine={{strokeWidth: "0"}} style={{fontSize: "10px"}} domain={[8000,23000]}/>
              <Tooltip />
              <Area type="monotone" 
              dataKey="revenue" 
              dot={true}
              stroke={palette.primary.main} 
              fillOpacity={1}
              fill="url(#colorRevenue)" />
              
              <Area type="monotone" 
              dataKey="expenses" 
              dot={true}
              stroke={palette.primary.main} 
              fillOpacity={1}
              fill="url(#colorExpenses)" />
            </AreaChart>
          </ResponsiveContainer>
        </DashboardBox>
        <DashboardBox gridArea="b"></DashboardBox>
        <DashboardBox gridArea="c"></DashboardBox>
    </>
  )
}

export default Row1;