import styles from './Footer.module.scss';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
	return (
		<div className={styles.main}>
			<div className={styles.container}>
				<a
					href="https://github.com/beksultan-dev"
					target="_blank"
					className={styles.github}
				>
					<BsGithub />
					<span>Github</span>
				</a>
				<a
					className={styles.api}
					href="https://api.genshin.dev/"
					target="_blank"
				>
					<div>Genshin API</div>
				</a>
			</div>
		</div>
	);
};
export default Footer;
