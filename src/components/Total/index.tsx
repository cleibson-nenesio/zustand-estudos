import { useCartStore } from '../../store/CartStore';
import { formatPrice } from '../../utils/format';

export default function Total() {
	const { cart } = useCartStore();

	const sumCartTotal = cart.reduce(
		(acc, item) => (acc += item.price * item.amount),
		0
	);

	return (
		<div>
			<h1>Total: {formatPrice(sumCartTotal)}</h1>
		</div>
	);
}
