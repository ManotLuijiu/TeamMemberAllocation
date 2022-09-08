import Header from './sections/Header';
import Employees from './components/Employees';
import Footer from './sections/Footer';
import './App.css';

import styles from './styles';

export default function App() {
	return (
		<div className="container mx-auto">
			<div className="w-full overflow-hidden">
				<div className={`${styles.paddingX} ${styles.flexCenter}`}>
					<div className={`${styles.boxWidth}`}>
						<Header />
					</div>
				</div>
			</div>
			<Employees />
			<Footer />
		</div>
	);
}
