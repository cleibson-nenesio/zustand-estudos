import { useCartStore } from '../../store/CartStore';
import { formatPrice } from '../../utils/format';

export default function AvaiableItems() {
	const { avaiableProducts, addToCart } = useCartStore();

	return (
		<div>
			<h1>Produtos disponíveis</h1>

			<ul>
				{avaiableProducts.map((product) => (
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
						<button
							style={{ padding: 30 }}
							onClick={() => addToCart(product, 5)}
						>
							Adicionar ao carrinho
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
