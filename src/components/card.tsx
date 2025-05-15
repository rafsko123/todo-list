import { TODO_Element } from '@/types/todo';
import styles from './card.module.scss';
import classNames from 'classnames';

type CardType = {
    element: TODO_Element;
    handleChangeStatus: (id: number) => void;
};

export default function Card({ element, handleChangeStatus }: CardType) {
    const inputId = `status-${element.id}`;

    return (
        <label htmlFor={inputId} className={classNames(styles.container, { [styles.completed]: element.completed })}>
            <input
                type="checkbox"
                id={inputId}
                checked={element.completed}
                onChange={() => handleChangeStatus(element.id)}
            />
            <span className={styles.checkboxUI}>&#10003;</span>
            <p>{element.title}</p>
        </label>
    );
}