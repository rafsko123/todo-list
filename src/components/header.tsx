import styles from './header.module.scss';

export default function Header({ children }: { children: string }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}