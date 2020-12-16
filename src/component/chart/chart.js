import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
{ name: 'Page A', uv: 300, pv: 2400, amt: 2400 },
{ name: 'Page A', uv: 707, pv: 20, amt: 2400 },
{ name: 'Page A', uv: 500, pv: 2400, amt: 2400 },
{ name: 'Page A', uv: 800, pv: 2400, amt: 2400 }
];
function Chart() {
    return <div className='chart'>
        <BarChart width={610} height={600} data={data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="uv" fill="#ED8B4C" barSize={60} />
        </BarChart>
    </div>

}


export default Chart
