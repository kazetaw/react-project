import React from "react";

interface Product {
  name: string;
  price: number;
  category: string;
  quantity: number;
  product_id: string;
  balance: number;
  image: string; // URL of the product image
}

interface ProductListProps {
  products: Product[];
  addItem: (productId: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addItem }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {products.map((product) => (
        <div
          key={product.product_id}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md flex flex-col"
        >
          <div className="p-4 flex-grow">
            <div className="w-full h-40 mb-2 overflow-hidden rounded">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
              {product.name}
            </h3>
            <p className="text-gray-600 whitespace-nowrap text-ellipsis">
              ประเภท: {product.category}
            </p>
            <p className="text-gray-600 whitespace-nowrap text-ellipsis">
              คงเหลือ: {product.balance}
            </p>
          </div>
          <div className="flex justify-between items-center p-4 border-t border-gray-200">
            <p className="font-bold text-red-700">{product.price} ฿</p>
            <button
              className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => addItem(product.product_id)}
            >
              เพิ่มไปยังรถเข็น
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
