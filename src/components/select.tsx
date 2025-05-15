import { TODO_Status } from '@/types/todo';
import styles from './select.module.scss';
import classNames from 'classnames';

type SelectType = {
    value: TODO_Status;
    handleSelect: (value: TODO_Status) => void;
    className?: string;
}


export default function Select({ value, handleSelect, className }: SelectType) {
    const options: { label: string; value: TODO_Status }[] = [
        { label: 'Wszystkie', value: 'all' },
        { label: 'Zakończone', value: 'completed' },
        { label: 'W trakcie', value: 'pending' },
    ]

    return (
        <select
            className={classNames(styles.select, className)}
            value={value}
            onChange={(e) => handleSelect(e.target.value as TODO_Status)}
        >
            {options.map(({ label, value }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    )
}