import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/custom';
import { BASE_URL } from '../utils/constants';
import { HiXMark } from 'react-icons/hi2';
import { deleteFromFavorite } from '../store/Reducers/FavoritesSlice';

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const { favoritesList } = useAppSelector((state) => state.favorites);

	const handleClick = (info: string) => {
		if (favoritesList) {
			dispatch(deleteFromFavorite(info));
		}
	};

	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						gap: '195px',
						position: 'relative',
					}}
				>
					<Link to="/">
						<img
							src="/public/logo.png"
							alt="logo"
							className={styles.logo}
						/>
					</Link>
					<BsFillBookmarkHeartFill
						className={styles.favorite}
						onClick={() => setIsOpen((prev) => !prev)}
					/>
					{isOpen && (
						<div className={styles.favorite_modal}>
							{favoritesList.length ? (
								favoritesList.map((item, index) => (
									<div
										className={styles.item}
										key={index}
									>
										<img
											src={`${BASE_URL}characters/${item.info}/icon`}
											alt="icon"
											className={styles.icon}
										/>
										<div style={{ fontSize: '1em' }}>
											{item.name}
										</div>
										<HiXMark
											onClick={() =>
												handleClick(item.info)
											}
										/>
									</div>
								))
							) : (
								<div style={{ textAlign: 'center' }}>
									Empty
								</div>
							)}
						</div>
					)}
				</div>

				<div
					className={styles.navbar}
					onClick={() => setIsOpen(false)}
				>
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
		</div>
	);
};
export default Header;
