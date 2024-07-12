import React from "react";

const categories = [
  { category: "เสื้อผ้า", amount: 10 },
  { category: "รองเท้า", amount: 5 },
  { category: "กระเป๋า", amount: 10 },
  { category: "อุปกรณ์กีฬา", amount: 10 },
];

const CategoryList: React.FC = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "เสื้อผ้า":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "รองเท้า":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      case "กระเป๋า":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "อุปกรณ์กีฬา":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div className="my-4">
      {/* <h2 className="text-xl font-semibold mb-2">ประเภทสินค้า</h2> */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category, index) => (
          <span
            key={index}
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(
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
