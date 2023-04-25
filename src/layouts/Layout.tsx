import { FC, ReactNode, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.scss';

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	// useEffect(() => {
	// 	window.addEventListener('scroll', () => {
	// 		if (window.scrollY > 400) {
	// 			console.log();
	// 		} else {
	// 			console.log(false);
	// 		}
	// 	});
	// }, []);

	return (
		<div className={styles.main}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};
export default Layout;
