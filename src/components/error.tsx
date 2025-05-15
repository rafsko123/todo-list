
import Link from 'next/link';
import styles from './error.module.scss';
import BGLayer from '@/assets/svg/bg.svg';

export default function ErrorLayout({ code }: { code: string; }) {
    return (
        <div className={styles.container}>
            <div className={styles.bg}>
                <BGLayer />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.code}>
                    {code}
                </div>
                <p>Strona o podanym adresie nie istnieje!</p>
                <Link href="/">Powrót</Link>
            </div>
        </div>
    )
}