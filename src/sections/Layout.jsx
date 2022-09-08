import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div className="min-h-screen mx-auto max-w-2x1 flex flex-col">
			<main className="flex-grow container mx-auto px-4 sm:px-6">
				{children}
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
