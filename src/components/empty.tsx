import { TODO_Status } from '@/types/todo';
import styles from './empty.module.scss';

export default function Empty({ search, filter }: { search: string; filter: TODO_Status }) {

    const renderEmptyMessage = () => {
        if (search.trim()) {
            return `Brak wyników dla: "${search.trim()}"`;
        }

        switch (filter) {
            case "completed":
                return "Lista ukończonych zadań jest pusta.";
            case "pending":
                return "Lista nieukończonych zadań jest pusta."
            default:
                return "Lista zadań jest pusta."
        }
    }


    return (
        <p className={styles.container}>{renderEmptyMessage()}</p>
    )
}