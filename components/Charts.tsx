import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { ROI_DATA } from '../constants';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-n8n-panel border border-n8n-border p-3 rounded-lg shadow-xl">
        <p className="text-white font-semibold mb-1">{label}</p>
        <p className="text-n8n-primary text-sm">
          Tarefas: {payload[0].value.toLocaleString()}
        </p>
        <p className="text-gray-400 text-xs">Automated Executions</p>
      </div>
    );
  }
  return null;
};

export const PerformanceChart: React.FC = () => {
  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={ROI_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333338" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#71717a" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
          />
          <YAxis 
            stroke="#71717a" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
            tickFormatter={(value) => `${value/1000}k`} 
          />
          <Tooltip content={<CustomTooltip />} cursor={{fill: '#333338', opacity: 0.4}} />
          <Bar 
            dataKey="tasks" 
            fill="url(#colorGradient)" 
            radius={[4, 4, 0, 0]} 
            barSize={40}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ff6d5a" stopOpacity={0.9}/>
              <stop offset="95%" stopColor="#ea4b71" stopOpacity={0.6}/>
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
