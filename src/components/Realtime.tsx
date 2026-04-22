import { useState, useEffect } from 'react';
import './Realtime.css';

interface TimeDisplayProps {
  format?: '24h' | '12h';
  showDate?: boolean;
}

export default function Realtime({ format = '24h', showDate = false }: TimeDisplayProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    if (format === '12h') {
      const period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      return `${hours}:${minutes}:${seconds} ${period}`;
    }

    return `${hours.toString().padStart(2, '0')}:${minutes}:${seconds}`;
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('pl-PL', options);
  };

  return (
    <div className="realtime-container">
      <h2 className="realtime-time">{formatTime(currentTime)}</h2>
      {showDate && <p className="realtime-date">{formatDate(currentTime)}</p>}
    </div>
  );
}
