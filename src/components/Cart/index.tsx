import { useCartStore } from '../../store/CartStore';
import { formatPrice } from '../../utils/format';

export default function Cart() {
	const { cart, removeFromCart } = useCartStore();

	if (!cart.length) return null;

	return (
		<div>
			<h1>Carrinho</h1>

			<ul>
				{cart.map((product) => (
					<li
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							gap: 40,
							marginBottom: 12,
						}}
						key={product.product_id}
					>
						<h2>{product.name}</h2> -{' '}
						<p>{formatPrice(product.price)}</p>
						<p>{product.amount}</p>
						<button
							style={{ padding: 30 }}
							onClick={() => removeFromCart(product.product_id)}
						>
							Remover do carrinho
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
