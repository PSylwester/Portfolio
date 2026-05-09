import { useState, useEffect } from 'react';

interface TimeDisplayProps {
  timezone?: string; // Można dodać swoją strefę, np. "Europe/Warsaw"
}

export function Realtime({ timezone = 'Europe/Warsaw' }: TimeDisplayProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pl-PL', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: timezone,
    });
  };

  return (
    <div className="flex items-center gap-3 px-4 py-2 glass rounded-xl border border-white/10 shadow-sm">
      {/* Mała pulsująca kropka sekundy */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
      </span>

      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold leading-none mb-1">
          Local Time (WAW)
        </span>
        <span className="text-sm font-mono font-medium text-white tabular-nums tracking-wider">
          {formatTime(currentTime)}
        </span>
      </div>
    </div>
  );
}
