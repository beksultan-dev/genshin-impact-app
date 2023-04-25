import { useGetDataQuery } from '../../../services/CharactersApi';
import CharacterItem from '../CharacterItem/CharacterItem';
import { useAppDispatch, useAppSelector } from '../../../hooks/custom';
import { getSingleCharacter } from '../../../store/Reducers/ActionCreators';
import { FC, useEffect, useState } from 'react';
import styles from './CharactersList.module.scss';
import Search from '../../search/Search';
import { ICharacter } from '../../../models/ICharacter';

const CharactersList: FC = () => {
	const [inputValue, setInputValue] = useState<string>('');
	const [currentData, setCurrentData] = useState<ICharacter[]>([]); 

	const { data, isLoading } = useGetDataQuery();
	const dispatch = useAppDispatch();
	const { characterList, Loading } = useAppSelector(
		(state) => state.character
	);

	useEffect(() => {
		if (data?.length) dispatch(getSingleCharacter(data));
	}, [dispatch, data]);

	useEffect(() => {
		const newData = characterList.filter((item) =>
			item.name.toLowerCase().includes(inputValue.toLowerCase())
		);
		setCurrentData(newData);
	}, [characterList, inputValue]);

	if (isLoading)
		return (
			<div className={styles.loader_div}>
				<div className={styles.loader}></div>
			</div>
		);

	if (Loading)
		return (
			<div className={styles.loader_div}>
				<div className={styles.loader}></div>
			</div>
		);

	return (
		<div className={styles.container}>
			<div className={styles.wrap}>
				<h1 style={{ fontSize: '30px' }}>Characters</h1>
				<Search
					inputValue={inputValue}
					setInputValue={setInputValue}
				/>
			</div>
			<div className={styles.list}>
				{currentData.length ? (
					currentData.map((item, index) => {
						if (
							!item.info.includes('traveler') &&
							!item.info.includes('aloy')
						)
							return (
								<CharacterItem key={index} item={item} />
							);
					})
				) : (
					<div className={styles.no_char}>No Character</div>
				)}
			</div>
		</div>
	);
};

export default CharactersList;
