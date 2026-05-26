import { create } from "zustand";
import type { IInitialState, IProduct, ICartProduct } from "../types/type";

const useCartStore = create<IInitialState>((set) => {
  return {
    products: [],
    addProduct: (data: IProduct) => {
      set((state) => {
        const existingProduct = state.products.find(
          (product) => product.id === data.id,
        );
        if (existingProduct) {
          return {
            products: state.products.map((product) =>
              product.id === data.id
                ? { ...product, quantity: product.quantity + 1 }
                : product,
            ),
          };
        } else {
          return { products: [...state.products, { ...data, quantity: 1 }] };
        }
      });
    },
    removeProduct: (id: string) => {
      set((state) => ({
        products: state.products.filter(
          (product: ICartProduct) => product.id !== id,
        ),
      }));
    },
    handleIncreaseQuantity: (id: string) => {
      set((state) => ({
        products: state.products.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        ),
      }));
    },
    handleDecreaseQuantity: (id: string) => {
      set((state) => ({
        products: state.products.map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: Math.max(1, product.quantity - 1),
              }
            : product,
        ),
      }));
    },
  };
});

export default useCartStore;
