import { FC } from 'react';
import { ICharacterSkills } from '../../../models/ICharacterSkills';
import { BASE_URL } from '../../../utils/constants';
import styles from './CharacterSkill.module.scss';

interface CharacterSkillProps {
	item: ICharacterSkills;
	name: string;
}

const CharacterSkill: FC<CharacterSkillProps> = ({ item, name }) => {
	return (
		<div className={styles.container}>
			<div className={styles.block1}>
				<img
					src={`${BASE_URL}characters/${
						name !== 'yae-miko' &&
						name !== 'sara' &&
						name !== 'yanfei' &&
						name !== 'shikanoin-heizou' &&
						name !== 'tighnari' &&
						name !== 'kuki-shinobu' &&
						name !== 'collei'
							? name
							: 'venti'
					}/constellation-${item.level}`}
					alt={item.name}
					className={styles.image}
				/>
				<div>{item.unlock}</div>
			</div>

			<div className={styles.block2}>
				<h4>{item.name}</h4>
				<div>{item.description}</div>
			</div>
		</div>
	);
};
export default CharacterSkill;
