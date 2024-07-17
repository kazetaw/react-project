import React from "react";

const PokemonFailedSkeleton = () => {
  return (
    <div className="container mx-auto animate-pulse">
      <div className="bg-gray-300 py-5">
        <div className="flex justify-between">
          <div className="w-8 h-8 bg-gray-400 rounded-full mt-1"></div>
          <div className="w-8 h-8 bg-gray-400 rounded-full mr-2 mt-2"></div>
        </div>
        <div className="container mx-auto mt-14">
          <div className="text-center">
            <div className="w-40 h-6 bg-gray-400 rounded mx-auto mb-4">
              Failed to fetch details
            </div>
            <div className="w-64 h-64 bg-gray-400 rounded-full mx-auto"></div>
          </div>
        </div>
      </div>
      <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
        <div className="flex justify-center gap-2 mb-4">
          <div className="w-24 h-10 bg-gray-300 rounded-3xl"></div>
          <div className="w-24 h-10 bg-gray-300 rounded-3xl"></div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="w-8 h-8 bg-gray-300 rounded"></div>
          <div className="w-8 h-8 bg-gray-300 rounded"></div>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <div className="w-16 h-8 bg-gray-300 rounded"></div>
          <div className="w-16 h-8 bg-gray-300 rounded"></div>
        </div>
        <div className="space-y-2">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-20 h-6 bg-gray-300 rounded"></div>
              <div className="w-40 h-6 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonFailedSkeleton;
