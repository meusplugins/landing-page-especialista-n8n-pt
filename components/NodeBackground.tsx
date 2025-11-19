import React, { useEffect, useState } from 'react';
import { Hexagon, Triangle, Circle, Square } from 'lucide-react';

const NodeBackground: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setOffset({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Static representation of a simple workflow graph
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-20 z-0">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Simulated Workflow SVG */}
      <svg className="absolute inset-0 w-full h-full stroke-n8n-border stroke-2" style={{ transform: `translate(${-offset.x}px, ${-offset.y}px)` }}>
        {/* Connections */}
        {/* Start to Process */}
        <path d="M 150 200 C 250 200, 250 300, 350 300" fill="none" className="stroke-n8n-secondary" strokeDasharray="5,5" />
        {/* Process to API */}
        <path d="M 450 300 C 550 300, 550 150, 650 150" fill="none" />
        {/* Process to Database */}
        <path d="M 450 300 C 550 300, 550 450, 650 450" fill="none" />
        {/* API to End */}
        <path d="M 750 150 C 850 150, 850 250, 950 250" fill="none" />
        {/* Database to End */}
        <path d="M 750 450 C 850 450, 850 250, 950 250" fill="none" />
      </svg>

      {/* Nodes HTML Overlay */}
      <div className="relative w-full h-full">
        {/* Start Node */}
        <div className="absolute left-[50px] top-[175px] p-3 bg-n8n-panel border border-n8n-border rounded-lg shadow-lg flex items-center gap-2 animate-float" style={{ animationDelay: '0s' }}>
          <div className="w-8 h-8 bg-n8n-secondary rounded flex items-center justify-center text-white">
            <Triangle size={16} className="fill-current" />
          </div>
          <span className="text-xs font-semibold text-gray-300">Webhook</span>
        </div>

        {/* Process Node */}
        <div className="absolute left-[350px] top-[275px] p-3 bg-n8n-panel border border-n8n-border rounded-lg shadow-lg flex items-center gap-2 animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
            <Hexagon size={16} />
          </div>
          <span className="text-xs font-semibold text-gray-300">Data Transform</span>
        </div>

        {/* API Node */}
        <div className="absolute left-[650px] top-[125px] p-3 bg-n8n-panel border border-n8n-border rounded-lg shadow-lg flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white">
            <Circle size={16} />
          </div>
          <span className="text-xs font-semibold text-gray-300">HTTP Request</span>
        </div>

        {/* DB Node */}
        <div className="absolute left-[650px] top-[425px] p-3 bg-n8n-panel border border-n8n-border rounded-lg shadow-lg flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center text-white">
            <Square size={16} />
          </div>
          <span className="text-xs font-semibold text-gray-300">Postgres</span>
        </div>

         {/* End Node */}
         <div className="absolute left-[950px] top-[225px] p-3 bg-n8n-panel border border-n8n-border rounded-lg shadow-lg flex items-center gap-2 animate-float" style={{ animationDelay: '2.5s' }}>
          <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white">
            <Circle size={16} />
          </div>
          <span className="text-xs font-semibold text-gray-300">Slack Notify</span>
        </div>
      </div>
    </div>
  );
};

export default NodeBackground;
