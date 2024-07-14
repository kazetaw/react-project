import React from "react";

const categories = [
  { category: "เสื้อผ้า", amount: 10 },
  { category: "รองเท้า", amount: 5 },
  { category: "กระเป๋า", amount: 10 },
  { category: "อุปกรณ์กีฬา", amount: 10 },
];

const CategoryList: React.FC = () => {
  return (
    <div className="my-4">
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <span
            key={index}
            className={`px-2.5 py-0.5 bg-gray-200 text-gray-700 rounded-full text-xs font-medium 
              category.category
            )}`}
          >
            {category.category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
