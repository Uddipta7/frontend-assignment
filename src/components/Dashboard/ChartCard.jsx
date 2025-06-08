
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const chartData = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 28 },
  { name: 'Thu', value: 80 },
  { name: 'Fri', value: 50 }
];

<div className="card">
  <h3>Weekly Progress</h3>
  <BarChart width={500} height={300} data={chartData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" fill="#4CAF50" />
  </BarChart>
</div>