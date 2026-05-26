import useCartStore from "../store/cartStore";
import type { IProduct } from "../types/type";
import { useState } from "react";
import { toast } from "sonner";
import LoaderButton from "./LoaderButton";

const allProducts: IProduct[] = [
  {
    id: "1",
    title: "Apple",
    description: "Fresh red apples",
    category: "Fruits",
    price: 19,
  },
  {
    id: "2",
    title: "Milk",
    description: "Full cream milk",
    category: "Dairy",
    price: 40,
  },
  {
    id: "3",
    title: "Bread",
    description: "Whole wheat bread",
    category: "Bakery",
    price: 30,
  },
  {
    id: "4",
    title: "Rice",
    description: "Premium basmati rice",
    category: "Grains",
    price: 80,
  },
  {
    id: "5",
    title: "Eggs",
    description: "Pack of 12 farm eggs",
    category: "Dairy",
    price: 70,
  },
  {
    id: "6",
    title: "Banana",
    description: "Fresh yellow bananas",
    category: "Fruits",
    price: 25,
  },
  {
    id: "7",
    title: "Orange",
    description: "Sweet juicy oranges",
    category: "Fruits",
    price: 35,
  },
  {
    id: "8",
    title: "Tomato",
    description: "Fresh organic tomatoes",
    category: "Vegetables",
    price: 28,
  },
  {
    id: "9",
    title: "Potato",
    description: "Premium potatoes",
    category: "Vegetables",
    price: 20,
  },
  {
    id: "10",
    title: "Onion",
    description: "Fresh onions",
    category: "Vegetables",
    price: 30,
  },
  {
    id: "11",
    title: "Chicken",
    description: "Fresh chicken meat",
    category: "Meat",
    price: 220,
  },
  {
    id: "12",
    title: "Fish",
    description: "Fresh river fish",
    category: "Seafood",
    price: 180,
  },
  {
    id: "13",
    title: "Cheese",
    description: "Cheddar cheese block",
    category: "Dairy",
    price: 120,
  },
  {
    id: "14",
    title: "Butter",
    description: "Salted butter pack",
    category: "Dairy",
    price: 90,
  },
  {
    id: "15",
    title: "Sugar",
    description: "Refined white sugar",
    category: "Groceries",
    price: 45,
  },
  {
    id: "16",
    title: "Salt",
    description: "Iodized table salt",
    category: "Groceries",
    price: 20,
  },
  {
    id: "17",
    title: "Tea",
    description: "Premium tea leaves",
    category: "Beverages",
    price: 150,
  },
  {
    id: "18",
    title: "Coffee",
    description: "Instant coffee powder",
    category: "Beverages",
    price: 180,
  },
  {
    id: "19",
    title: "Noodles",
    description: "Instant noodles pack",
    category: "Snacks",
    price: 35,
  },
  {
    id: "20",
    title: "Biscuits",
    description: "Chocolate cream biscuits",
    category: "Snacks",
    price: 25,
  },
];

function Home() {
  const { addProduct } = useCartStore((state) => state);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const handleAddProduct = (product: IProduct) => {
    setLoadingId(product.id);
    setTimeout(() => {
      addProduct(product);
      toast.success("Item added succssfully");
      setLoadingId(null);
    }, 1000);
  };
  return (
    <div className="max-w-7xl w-full mx-auto min-h-screen text-white p-6">
      <h2 className="text-3xl font-bold mb-8">All Products</h2>

      {allProducts.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts.map((product) => (
            <li
              key={product.id}
              className="bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all
              hover:scale-105 cursor-pointer duration-200 delay-100"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Placeholder */}
                <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center text-xl font-bold">
                  {product.title[0]}
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{product.title}</h3>

                  <p className="text-cyan-400 font-bold">₹{product.price}</p>
                </div>
              </div>

              <p className="text-gray-300 mb-3">{product.description}</p>

              <div className="flex justify-between items-center">
                <span className="px-3 py-1 text-center rounded bg-rose-500">
                  {product.category}
                </span>
                <button
                  disabled={loadingId === product.id}
                  onClick={() => handleAddProduct(product)}
                  className="min-w-32.5 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition 
              duration-300 cursor-pointer disabled:opacity-65 disabled:cursor-not-allowed"
                >
                  {loadingId === product.id ? <LoaderButton /> : "Add to cart"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-400 text-xl">
          No Product Found
        </div>
      )}
    </div>
  );
}

export default Home;
