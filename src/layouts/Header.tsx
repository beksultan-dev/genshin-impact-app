import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<img
					src="/public/logo.png"
					alt="logo"
					className={styles.logo}
				/>
				<NavLink
					to="/"
					className={({ isActive }) =>
						isActive ? 'active' : 'inactive'
					}
				>
					Characters
				</NavLink>
				<NavLink
					to="/artifacts"
					className={({ isActive }) =>
						isActive ? 'active' : 'inactive'
					}
				>
					Artifacts
				</NavLink>
				<NavLink
					to="/elements"
					className={({ isActive }) =>
						isActive ? 'active' : 'inactive'
					}
				>
					Elements
				</NavLink>
				<NavLink
					to="/enemies"
					className={({ isActive }) =>
						isActive ? 'active' : 'inactive'
					}
				>
					Enemies
				</NavLink>
				<NavLink
					to="/minerals"
					className={({ isActive }) =>
						isActive ? 'active' : 'inactive'
					}
				>
					Materials
				</NavLink>
				<NavLink
					to="/weapons"
					className={({ isActive }) =>
						isActive ? 'active' : 'inactive'
					}
				>
					Weapons
				</NavLink>
			</div>
		</div>
	);
};
export default Header;
