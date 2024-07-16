import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="px-6 py-4 text-center justify-center items-center border border-gray-200 shadow-md rounded-lg m-4">
        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700 animate-pulse"></div>
        <div className="font-bold text-sm text-gray-700 mb-2 bg-gray-300 h-6 w-3/4 mx-auto rounded dark:bg-gray-700 animate-pulse"></div>
        <div className="grid grid-cols-7 gap-7 justify-center text-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="grid grid-rows-2 text-center">
              {/* <div className="text-lg text-center bg-gray-300 h-6 w-6 mx-auto rounded dark:bg-gray-700 animate-pulse"></div> */}
              <div className="text-sm bg-gray-300 h-4 w-6 mx-auto rounded dark:bg-gray-700 animate-pulse"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <div className="text-gray-700 text-base"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
