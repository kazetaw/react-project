import React from "react";

interface Product {
  name: string;
  price: number;
  category: string;
  quantity: number;
  product_id: string;
  balance: number;
}

interface ProductListProps {
  products: Product[];
  addItem: (productId: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addItem }) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.product_id}
          className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md"
        >
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600">ราคา: {product.price} ฿</p>
            <p className="text-gray-600">ประเภท: {product.category}</p>
            {/* <p className="text-gray-600">สินค้าทั้งหมด: {product.quantity}</p> */}
            <p className="text-gray-600">คงเหลือ: {product.balance}</p>
          </div>
          <div className="p-4 flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => addItem(product.product_id)}
            >
              เพิ่มลงในตะกร้า
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
