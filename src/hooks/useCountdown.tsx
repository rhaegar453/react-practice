import React, { useEffect, useState } from "react";

/**
 *
 * @param initialValue Enter the number of seconds
 */
const useCountdown = (initialValue: number, duration: number) => {
  const [value, setValue] = useState<number>(initialValue);
  const [done, setDone] = useState<boolean>(false);

  useEffect(() => {
    let time = setInterval(() => {
      setValue((value) => value - 1);
    }, duration);
    if (value === 0) {
      setDone(true);
      clearInterval(time);
    }
    return () => {
      clearInterval(time);
    };
  }, [done, value, duration]);

  return { done, value };
};

export default useCountdown;
