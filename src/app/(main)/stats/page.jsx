"use client"
import React from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const data = [
  { name: 'Text', value: 400, fill: '#0088FE' },
  { name: 'Call', value: 300, fill: '#00C49F' },
  { name: 'Video Call', value: 300, fill: '#FFBB28' },
 
];

const StatsPage = () => {
    return ( <div className='w-11/12 mx-auto mt-10'>
        <h2 className='text-4xl font-semibold'>Friendship Analytics</h2>
    <div className=' mt-10 shadow-lg py-5 '>
        <h2 className='ml-10'>By Interaction Type</h2>
        <div className='flex justify-center'>
    <PieChart style={{ width: '20%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
    
    </PieChart>
    </div>
    </div>
    </div>
  );
    
};

export default StatsPage;