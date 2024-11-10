import './App.css';
import AvaiableItems from './components/AvaiableItems';
import Cart from './components/Cart';
import Total from './components/Total';

function App() {
	return (
		<>
			<Total />
			<AvaiableItems />
			<Cart />
		</>
	);
}

export default App;
