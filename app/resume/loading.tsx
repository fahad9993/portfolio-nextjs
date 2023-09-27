import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-800">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
        <div className="mt-4 text-gray-800 text-center">Loading...</div>
      </div>
    </div>
  );
}
