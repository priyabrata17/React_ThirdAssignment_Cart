import useCartStore from "../store/cartStore";
import { toast } from "sonner";
import type { ICartProduct } from "../types/type";
import { useState } from "react";
import LoaderButton from "./LoaderButton";

function Cart() {
  const {
    products,
    removeProduct,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
  } = useCartStore((state) => state);

  const totalPrice = products.reduce((prev, curr) => {
    return prev + curr.quantity * curr.price;
  }, 0);

  const [loadingId, setLoadingId] = useState<string | null>(null);
  const handleRemoveProduct = (product: ICartProduct) => {
    setLoadingId(product.id);
    setTimeout(() => {
      removeProduct(product.id);
      toast.success("Item removed succssfully");
      setLoadingId(null);
    }, 1000);
  };

  return (
    <div className="max-w-7xl w-full mx-auto min-h-screen text-white p-6">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left side products */}
        <div className="lg:col-span-2 space-y-4">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800 p-5 rounded-lg border border-gray-700"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{product.title}</h3>

                    <p className="text-gray-400 mt-1">{product.description}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-4 mt-3">
                      <span className="inline-block px-3 py-1 rounded bg-cyan-500">
                        {product.category}
                      </span>

                      <div className="flex items-center bg-gray-700 rounded overflow-hidden">
                        <button
                          onClick={() => handleDecreaseQuantity(product.id)}
                          className="px-3 py-1 bg-red-500 hover:bg-red-400 transition"
                        >
                          -
                        </button>

                        <span className="px-4 font-semibold">
                          {product.quantity}
                        </span>

                        <button
                          onClick={() => handleIncreaseQuantity(product.id)}
                          className="px-3 py-1 bg-green-500 hover:bg-green-400 transition"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="text-cyan-400 font-bold text-lg mb-3">
                      ₹{product.price}
                    </p>

                    <button
                      onClick={() => handleRemoveProduct(product)}
                      className="bg-red-500 px-4 py-2 rounded hover:bg-red-400 transition duration-300 min-w-32.5"
                    >
                      {loadingId === product.id ? <LoaderButton /> : "Remove"}
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-gray-800 p-6 rounded-lg text-center text-gray-400">
              Cart is empty
            </div>
          )}
        </div>

        {/* Right side t */}
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 h-fit">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

          <div className="flex justify-between mb-4">
            <span>Total Items</span>
            <span>{products.length}</span>
          </div>

          <div className="flex justify-between mb-6">
            <span>Total Price</span>

            <span className="text-cyan-400 font-bold">₹{totalPrice}</span>
          </div>

          <button
            className="w-full bg-yellow-500 text-black py-3 rounded 
            hover:bg-yellow-400 transition duration-300"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
