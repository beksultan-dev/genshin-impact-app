import { Dispatch, FC } from 'react';
import styles from './Search.module.scss';
import { GoSearch } from 'react-icons/go';
import { HiXMark } from 'react-icons/hi2';

interface SearchProps {
	inputValue: string;
	setInputValue: Dispatch<React.SetStateAction<string>>;
}

const Search: FC<SearchProps> = ({ inputValue, setInputValue }) => {
	return (
		<div className={styles.wrap}>
			<input
				type="text"
				placeholder="Search..."
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<GoSearch className={styles.search} />
			<HiXMark
				className={styles.delete}
				onClick={() => setInputValue('')}
			/>
		</div>
	);
};
export default Search;
