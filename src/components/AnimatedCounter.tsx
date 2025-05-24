
import React, { useState, useEffect, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const timeRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const step = Math.ceil(end / (duration / 50));
    
    const updateCount = () => {
      countRef.current = Math.min(countRef.current + step, end);
      setCount(countRef.current);
      
      if (countRef.current < end) {
        timeRef.current = setTimeout(updateCount, 50);
      }
    };

    updateCount();

    return () => {
      if (timeRef.current) clearTimeout(timeRef.current);
    };
  }, [end, duration]);

  return (
    <span className="text-riizo-blue font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

export default AnimatedCounter;
