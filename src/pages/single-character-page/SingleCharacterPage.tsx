import CharacterSkill from '../../components/characters/CharacterSkill/CharacterSkill';
import { useAppSelector } from '../../hooks/custom';
import { BASE_URL } from '../../utils/constants';
import styles from './SingleCharacterPage.module.scss';

const SingleCharacterPage = () => {
	const { currentCharacter } = useAppSelector(
		(state) => state.character
	);

	return (
		<div className={styles.container}>
			<div className={styles.block}>
				<div className={styles.block_wrapper}>
					<div className={styles.img_bg}>
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
						<div style={{ display: 'flex', gap: '10px' }}>
							<div className={styles.weapon}>
								{currentCharacter?.weapon}
							</div>
							<div className={styles.vision}>
								{currentCharacter?.vision}
							</div>
						</div>
					</div>
				</div>

				<div className={styles.desc}>
					{currentCharacter?.description}
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
