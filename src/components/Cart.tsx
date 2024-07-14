import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";

interface CartItem {
  product_id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
}

const Cart: React.FC<CartProps> = ({ cart, addItem, removeItem }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    updateCartDetails();
  }, [cart]);

  const updateCartDetails = () => {
    const totalPriceValue = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const totalItemsValue = cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setTotalPrice(totalPriceValue);
    setTotalItems(totalItemsValue);
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleAddItem = (productId: string) => {
    addItem(productId);
    updateCartDetails();
  };

  return (
    <div className="my-4 flex flex-row-reverse items-center">
      {cart.length === 0 ? (
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-black  rounded-lg  focus:ring-4 focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-auto"
          onClick={handleDialogOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-9"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {totalItems}
          </div>
        </button>
      ) : (
        <button
          type="button"
          className="relative inline-flex items-center p-3 text-sm font-medium text-center text-gray-900  rounded-lg  focus:ring-4 focus:outline-none  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-auto"
          onClick={handleDialogOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-9"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
            {totalItems}
          </div>
        </button>
      )}

      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>ตะกร้าสินค้า</DialogTitle>
        <DialogContent>
          {cart.length === 0 ? (
            <p className="text-gray-500">ไม่มีสินค้าในตะกร้า</p>
          ) : (
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border border-grey-500">
                  <th className="bg-gray-600 p-2 text-white font-bold border text-left">
                    ชื่อสินค้า
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold border text-left">
                    ราคา
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold border text-left">
                    จำนวน
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold border text-left">
                    รวม
                  </th>
                  <th className="bg-gray-600 p-2 text-white font-bold border text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr
                    key={item.product_id}
                    className="bg-gray-300 border border-grey-500"
                  >
                    <td className="p-2 border text-left">{item.name}</td>
                    <td className="p-2 border text-left">{item.price}</td>
                    <td className="p-2 border text-left">{item.quantity}</td>
                    <td className="p-2 border text-left">
                      {item.price * item.quantity}
                    </td>
                    <td className="p-2 border text-left">
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        onClick={() => removeItem(item.product_id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} className="text-right p-2 font-semibold">
                    ราคาทั้งหมด:
                  </td>
                  <td colSpan={2} className="p-2 font-semibold">
                    {totalPrice}
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cart;
