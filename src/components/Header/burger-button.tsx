import clsx from 'clsx';

import styles from '../../styles/burger-button.module.css';

type BurgerButtonProps = {
	checked: boolean;
	onClick: () => void;
};

export default function BurgerButton({ checked, onClick }: BurgerButtonProps) {
	return (
		<label className={clsx(styles.hamburger)}>
			<input type="checkbox" checked={checked} readOnly onClick={onClick} />
			<svg viewBox="0 0 32 32">
				<path
					d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
					className={`${styles.line} ${styles['line-top-bottom']}`}
				></path>
				<path d="M7 16 27 16" className={styles.line}></path>
			</svg>
		</label>
	);
}
