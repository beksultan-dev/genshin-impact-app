import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/custom';
import { ICharacter } from '../../../models/ICharacter';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import {
	addToFavorite,
	deleteFromFavorite,
} from '../../../store/Reducers/FavoritesSlice';
import styles from './AddFavorite.module.scss';

interface AddFavoriteProps {
	character: ICharacter | null;
}

const AddFavorite: FC<AddFavoriteProps> = ({ character }) => {
	const dispatch = useAppDispatch();
	const { favoritesList } = useAppSelector((state) => state.favorites);
	const [isMouseOver, setIsMouseOver] = useState(false);

	const itemInFavorites = favoritesList.some(
		(item) => item.info === character?.info
	);

	const handleAdd = () => {
		if (character && !itemInFavorites) {
			dispatch(addToFavorite(character));
		} else if (character && itemInFavorites) {
			dispatch(deleteFromFavorite(character?.info));
		}
	};

	return (
		<div onClick={handleAdd}>
			{itemInFavorites ? (
				<div
					onMouseEnter={() => setIsMouseOver(true)}
					onMouseLeave={() => setIsMouseOver(false)}
					className={styles.wrap}
				>
					<AiFillHeart className={styles.added} />
					{isMouseOver && (
						<div className={styles.added_div}>Added</div>
					)}
				</div>
			) : (
				<div
					onMouseEnter={() => setIsMouseOver(true)}
					onMouseLeave={() => setIsMouseOver(false)}
				>
					<AiOutlineHeart className={styles.not_added} />
					{isMouseOver && (
						<div className={styles.not_added_div}>Add</div>
					)}
				</div>
			)}
		</div>
	);
};
export default AddFavorite;
