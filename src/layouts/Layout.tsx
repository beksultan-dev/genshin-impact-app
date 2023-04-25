import { FC, ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.scss';

interface LayoutProps {
	children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.main}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};
export default Layout;
