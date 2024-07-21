import React, { useState } from "react";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
import Cart from "../components/Cart";

interface Product {
  name: string;
  price: number;
  category: string;
  quantity: number;
  product_id: string;
  balance: number;
  image: string; // URL of the product image
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
    image:
      "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/40/20/2000007640740/2000007640740_1-20230303123713-.jpg",
  },
  {
    name: "กางเกงออกกำลังกาย",
    price: 300,
    category: "เสื้อผ้า",
    quantity: 12,
    product_id: "A005",
    balance: 12,
    image:
      "https://res.cloudinary.com/trueshopping/image/upload/f_webp,q_auto/v1694505641/product/producr-master/gkuhn7xssh2zcbvubjij.jpg",
  },
  {
    name: "รองเท้าวิ่ง",
    price: 800,
    category: "รองเท้า",
    quantity: 6,
    product_id: "A006",
    balance: 6,
    image:
      "https://res.wemall.com/954888/w_640,h_640,c_thumb/w_640,h_640,c_crop/d6b2576d1d181f8160948fb60cd7c23a/067-078-%E0%B8%94%E0%B8%B3-2.jpg",
  },
  {
    name: "เสื้อเเจ็คเก็ต",
    price: 500,
    category: "เสื้อผ้า",
    quantity: 20,
    product_id: "A007",
    balance: 20,
    image:
      "https://f.btwcdn.com/store-35589/product/2dda86ba-7eee-1a9b-450a-660cccbd5728.jpg ",
  },
  {
    name: "กางเกงยีนส์",
    price: 600,
    category: "เสื้อผ้า",
    quantity: 15,
    product_id: "A008",
    balance: 15,
    image:
      "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/76/20/2000007529076/2000007529076_2-20230925134048-.jpg",
  },
  {
    name: "รองเท้าบูท",
    price: 1200,
    category: "รองเท้า",
    quantity: 10,
    product_id: "A009",
    balance: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9h-i8acumKx0-mqEc0BbK2IZTO6iNPwx8w&s",
  },
  {
    name: "กระเป๋าสะพาย",
    price: 250,
    category: "กระเป๋า",
    quantity: 25,
    product_id: "A0010",
    balance: 25,
    image:
      "https://img.lazcdn.com/g/p/6fbfe0d1b5c45d7c8a1a0e224f6e190d.jpg_720x720q80.jpg",
  },
  {
    name: "เสื้อโปโลสีดำ",
    price: 200,
    category: "เสื้อผ้า",
    quantity: 40,
    product_id: "A011",
    balance: 40,
    image: "https://media.allonline.7eleven.co.th/pdmain/396263_00_gq_polo.jpg",
  },
  {
    name: "กางเกงขาสั้น",
    price: 250,
    category: "เสื้อผ้า",
    quantity: 40,
    product_id: "A0012",
    balance: 40,
    image:
      "https://res.cloudinary.com/trueshopping/image/upload/f_webp,q_auto/v1694506060/product/producr-master/mdbcyu3crz6k8nyic62i.jpg",
  },
  {
    name: "รองเท้าเเตะสีน้ำเงิน",
    price: 100,
    category: "รองเท้า",
    quantity: 20,
    product_id: "A013",
    balance: 20,
    image:
      "https://poloclubthailand.com/pub/media/catalog/product/cache/c7a2609edde15cd194a9cb9af2917d57/2/7/2733-_2_1.jpg",
  },
  {
    name: "กระเป๋าสะพายสีแดง",
    price: 300,
    category: "กระเป๋า",
    quantity: 35,
    product_id: "A014",
    balance: 35,
    image:
      "https://f.btwcdn.com/store-38058/product/53037e65-c423-4e21-9352-5b59d7628227.jpg",
  },
  {
    name: "ถุงเท้า",
    price: 50,
    category: "อุปกรณ์กีฬา",
    quantity: 50,
    product_id: "A015",
    balance: 50,
    image: "https://carson.co.th/wp-content/uploads/2023/04/AB-120-3.jpg",
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
      <div className="mt-24">
        <Cart cart={cart} removeItem={removeItem} addItem={addItem} />
      </div>
      <h1 className="text-2xl font-bold mb-4">สินค้าทั้งหมด</h1>
      <CategoryList />
      <ProductList products={products} addItem={addItem} />
    </div>
  );
};

export default ShoppingCart;
