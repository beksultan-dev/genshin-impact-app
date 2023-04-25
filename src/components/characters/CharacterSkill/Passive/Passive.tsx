import { FC } from 'react';
import { ICharacterSkills } from '../../../../models/ICharacterSkills';
import { BASE_URL } from '../../../../utils/constants';
import styles from './Passive.module.scss';

interface PassiveProps {
	item: ICharacterSkills;
	name: string;
	index: number;
}

const Passive: FC<PassiveProps> = ({ item, name, index }) => {
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
							: 'ayaka'
					}/talent-passive-${index}`}
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
export default Passive;
