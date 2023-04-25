import { FC } from 'react';
import { BASE_URL } from '../../../utils/constants';
import { ICharacter } from '../../../models/ICharacter';
import { useAppDispatch } from '../../../hooks/custom';
import { setCurrentCharacter } from '../../../store/Reducers/CharacterSlice';
import { useNavigate } from 'react-router-dom';
import styles from './CharacterItem.module.scss';
import { useInView } from 'react-intersection-observer';

interface SingleCharacterProps {
	item: ICharacter;
}

const CharacterItem: FC<SingleCharacterProps> = ({ item }) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleClick = () => {
		dispatch(setCurrentCharacter(item));
		navigate(`/characters/${item.info}`.toLowerCase());

		window.scrollTo({ top: 0, behavior: 'auto' });
	};

	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	});

	return (
		<div className={styles.item} onClick={handleClick} ref={ref}>
			<div
				className={
					item.rarity === 5 ? styles.img_bg5 : styles.img_bg4
				}
			>
				{inView && (
					<img
						className={styles.img}
						src={`${BASE_URL}characters/${item.info}/icon-big`}
						alt={item.info}
					/>
				)}
			</div>
			<div className={styles.name}>{item.name}</div>
		</div>
	);
};
export default CharacterItem;
