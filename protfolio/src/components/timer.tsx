// Timer.tsx
import React, { useEffect, useState } from "react";

interface TimerProps {
  durationInSeconds: number;
  onTimeExpired: () => void;
}

const Timer: React.FC<TimerProps> = ({ durationInSeconds, onTimeExpired }) => {
  const [timeLeft, setTimeLeft] = useState(durationInSeconds);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeExpired();
    } else {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, onTimeExpired]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="text-lg font-semibold text-center bg-gray-100 text-gray-800 rounded-md py-2 px-4 shadow-md hover:bg-gray-200 transition-colors duration-300">
      Time Left: {formatTime(timeLeft)}
    </div>
  );
};

export default Timer;
