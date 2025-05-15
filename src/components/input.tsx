import classNames from 'classnames';
import styles from './input.module.scss';

type InputType = {
    className?: string;
    value: string;
    handleGetValue: (value: string) => void;
};

export default function Input({ value, handleGetValue, className }: InputType) {
    return (
        <input
            type="text"
            className={classNames(styles.input, className)}
            value={value}
            onChange={(e) => handleGetValue(e.target.value)}
            placeholder="Wyszukaj zadanie"
        />
    );
}