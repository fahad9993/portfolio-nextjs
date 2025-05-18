"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [dotCount, setDotCount] = useState(1);
  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 500);

    return () => {
      clearInterval(dotInterval);
    };
  }, []);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mx-auto"></div>
        <div className="mt-4 text-gray-800 text-center text-lg font-semibold">
          Loading{".".repeat(dotCount)}
        </div>
      </div>
    </div>
  );
}
