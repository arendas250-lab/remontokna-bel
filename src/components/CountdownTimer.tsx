"use client";

import { useEffect, useState } from "react";

const DURATION = 60 * 60;

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState(DURATION);

  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((s) => (s <= 0 ? DURATION : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;

  return (
    <span className="font-mono font-bold text-accent">
      {m} м. {s.toString().padStart(2, "0")} с.
    </span>
  );
}
