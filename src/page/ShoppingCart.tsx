import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
import Cart from "../components/Cart";

interface Product {
  name: string;
  price: number;
  category: string; // Corrected spelling from 'category' to 'category'
  quantity: number;
  product_id: string;
  balance: number;
}

interface CartItem {
  product_id: string;
  name: string;
  price: number;
  quantity: number;
}

const initialProducts: Product[] = [
  {
    name: "เสื้อกล้าม",
    price: 150,
    category: "เสื้อผ้า",
    quantity: 8,
    product_id: "A004",
    balance: 8,
  },
  {
    name: "กางเกงออกกำลังกาย",
    price: 300,
    category: "เสื้อผ้า",
    quantity: 12,
    product_id: "A005",
    balance: 12,
  },
  {
    name: "รองเท้าวิ่ง",
    price: 800,
    category: "รองเท้า",
    quantity: 6,
    product_id: "A006",
    balance: 6,
  },
  {
    name: "เสื้อเเจ็คเก็ต",
    price: 500,
    category: "เสื้อผ้า",
    quantity: 20,
    product_id: "A007",
    balance: 20,
  },
  {
    name: "กางเกงยีนส์",
    price: 600,
    category: "เสื้อผ้า",
    quantity: 15,
    product_id: "A008",
    balance: 15,
  },
  {
    name: "รองเท้าบูท",
    price: 1200,
    category: "รองเท้า",
    quantity: 10,
    product_id: "A009",
    balance: 10,
  },
  {
    name: "กระเป๋าสะพาย",
    price: 250,
    category: "กระเป๋า",
    quantity: 25,
    product_id: "A0010",
    balance: 25,
  },
  {
    name: "เสื้อโปโลสีดำ",
    price: 200,
    category: "เสื้อผ้า",
    quantity: 40,
    product_id: "A011",
    balance: 40,
  },
  {
    name: "กางเกงขาสั้น",
    price: 250,
    category: "เสื้อผ้า",
    quantity: 40,
    product_id: "A0012",
    balance: 40,
  },
  {
    name: "รองเท้าเเตะสีน้ำเงิน",
    price: 100,
    category: "รองเท้า",
    quantity: 20,
    product_id: "A013",
    balance: 20,
  },
  {
    name: "กระเป๋าสะพายสีแดง",
    price: 300,
    category: "กระเป๋า",
    quantity: 35,
    product_id: "A014",
    balance: 35,
  },
  {
    name: "ถุงเท้า",
    price: 50,
    category: "อุปกรณ์กีฬา",
    quantity: 50,
    product_id: "A015",
    balance: 50,
  },
];

const ShoppingCart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItem = (productId: string) => {
    const product = products.find((item) => item.product_id === productId);
    if (!product || product.balance <= 0) return;

    const existingItem = cart.find((item) => item.product_id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      setCart([
        ...cart,
        {
          product_id: product.product_id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ]);
    }

    product.balance -= 1;
    setProducts([...products]);
  };

  const removeItem = (productId: string) => {
    const index = cart.findIndex((item) => item.product_id === productId);
    if (index === -1) return;

    const removedItem = cart[index];
    if (removedItem.quantity > 1) {
      removedItem.quantity -= 1;
    } else {
      setCart(cart.filter((item) => item.product_id !== productId));
    }

    const productItem = products.find((item) => item.product_id === productId);
    if (productItem) productItem.balance += 1;

    setProducts([...products]);
  };

  return (
    <div className="p-5">
      <Cart
        cart={cart}
        removeItem={removeItem}
        addItem={function (productId: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <h1 className="text-2xl font-bold mb-4">สินค้าทั้งหมด</h1>
      <CategoryList />
      <ProductList products={products} addItem={addItem} />
    </div>
  );
};

export default ShoppingCart;
