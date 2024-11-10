import * as zustand from 'zustand';

type Product = {
	product_id: number;
	name: string;
	price: number;
	amount?: number;
};

type CartProduct = {
	amount: number;
} & Product;

type CartStore = {
	avaiableProducts: Product[];
	cart: CartProduct[];
	addToCart(product: Product, amount?: number): void;
	removeFromCart: (id: number) => void;
};

const MOCK_PRODUCTS: Product[] = [
	{ name: 'Camiseta', price: 49.9, product_id: 1 },
	{ name: 'Calça Jeans', price: 129.9, product_id: 2 },
	{ name: 'Tênis Esportivo', price: 199.9, product_id: 3 },
	{ name: 'Jaqueta', price: 299.9, product_id: 4 },
	{ name: 'Boné', price: 29.9, product_id: 5 },
];

export const useCartStore = zustand.create<CartStore>((set) => ({
	avaiableProducts: MOCK_PRODUCTS,
	cart: [],
	addToCart: (product, amount) => {
		set((state) => {
			const isInCart = state.cart.find(
				(prod) => prod.product_id == product.product_id
			);

			if (isInCart) {
				return {
					cart: state.cart.map((item) => {
						if (item.product_id == isInCart.product_id) {
							item.amount += amount ?? 1;
						}

						return item;
					}),
				};
			}

			return {
				cart: [...state.cart, { ...product, amount: amount ?? 1 }],
			};
		});
	},
	removeFromCart: (id) =>
		set((state) => ({
			...state,
			cart: state.cart.filter((product) => product.product_id != id),
		})),
}));
