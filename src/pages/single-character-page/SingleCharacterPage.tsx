/* eslint-disable no-mixed-spaces-and-tabs */
import CharacterSkill from '../../components/characters/CharacterSkill/CharacterSkill';
import AddFavorite from '../../components/favorites/AddFavorite/AddFavorite';
import { useAppSelector } from '../../hooks/custom';
import { BASE_URL } from '../../utils/constants';
import styles from './SingleCharacterPage.module.scss';

const SingleCharacterPage = () => {
	const { currentCharacter } = useAppSelector(
		(state) => state.character
	);

	const stars = [];

	if (currentCharacter) {
		for (let i = 0; i < currentCharacter?.rarity; i++) {
			stars.push(i);
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.block}>
				<div className={styles.block_wrapper}>
					<div
						className={
							currentCharacter?.rarity === 5
								? styles.img_bg5
								: styles.img_bg4
						}
					>
						<img
							src={`${BASE_URL}characters/${currentCharacter?.info}/icon-big`}
							alt={currentCharacter?.name}
							className={styles.img}
						/>
					</div>
					<div className={styles.info}>
						<h1 className={styles.name}>
							{currentCharacter?.name}
						</h1>

						<div className={styles.stars}>
							{stars.length && stars.length == 5
								? stars.map((_item, index) => (
										<img
											src="/public/rarity_5.png"
											alt="5 star"
											key={index}
										/>
								  ))
								: stars.map((_item, index) => (
										<img
											src="/public/rarity_4.png"
											alt="4 star"
											key={index}
										/>
								  ))}
						</div>
					</div>
				</div>

				<div className={styles.fav}>
					<AddFavorite character={currentCharacter} />
				</div>

				<div className={styles.desc}>
					{currentCharacter?.description}
				</div>

				<div
					style={{
						display: 'flex',
						gap: '10px',
						flexWrap: 'wrap',
						width: '50%',
					}}
				>
					<div className={styles.affiliation}>
						Affiliation: {currentCharacter?.affiliation}
					</div>
					<div className={styles.weapon}>
						Weapon: {currentCharacter?.weapon}
					</div>
					<div className={styles.vision}>
						Vision: {currentCharacter?.vision}
					</div>
					<div className={styles.nation}>
						Nation: {currentCharacter?.nation}
					</div>
				</div>

				<img
					src={`${BASE_URL}elements/${currentCharacter?.vision.toLowerCase()}/icon`}
					alt="vision"
					className={styles.vision_img}
				/>

				<img
					src={`${BASE_URL}nations/${
						currentCharacter?.nation !== 'Sumeru' &&
						currentCharacter?.nation !== 'Snezhnaya'
							? currentCharacter?.nation.toLowerCase()
							: `inazuma`
					}/icon`}
					alt="nation"
					className={styles.nation_img}
				/>

				<div className={styles.big_img}>
					<img
						src={`${BASE_URL}characters/${currentCharacter?.info}/card`}
						alt={currentCharacter?.name}
					/>
				</div>
			</div>

			<h3
				style={{
					fontSize: '24px',
					fontWeight: '500px',
					marginBottom: '10px',
				}}
			>
				{currentCharacter?.name} Constellations
			</h3>
			{currentCharacter?.constellations.map((item, index) => (
				<div className={styles.block_skill} key={index}>
					<CharacterSkill
						item={item}
						key={index}
						name={currentCharacter?.info}
					/>
				</div>
			))}
		</div>
	);
};
export default SingleCharacterPage;
