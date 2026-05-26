
export interface IProduct {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
}
export interface ICartProduct {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  quantity: number;
}

export interface IInitialState {
  products: ICartProduct[];
  addProduct: (data: IProduct) => void;
  removeProduct: (id: string) => void;
  handleIncreaseQuantity: (id: string) => void;
  handleDecreaseQuantity: (id: string) => void;
}
