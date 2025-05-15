"use client"

import { TODO_Element, TODO_Status } from '@/types/todo';
import styles from './list.module.scss';
import { useState } from 'react';
import Input from './input';
import Select from './select';
import Card from './card';
import Empty from './empty';

type ListType = {
    initialData: Array<TODO_Element>;
}

export default function List({ initialData }: ListType) {
    const [data, setData] = useState<Array<TODO_Element>>(initialData);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState<TODO_Status>('all');


    // # FILTER DATA BY STATUS
    const dataFiltered = data.filter(element => {
        if (filter === 'completed') return element.completed;
        if (filter === 'pending') return !element.completed;
        return true;
    })

    // # FILTER DATA BY SEARCH VALUE
    const dataFilterAndSearch = dataFiltered.filter(element => element.title.toLowerCase().includes(search.trim().toLowerCase()));


    // # CHANGE TASK STATUS
    const handleChangeStatus = (id: number) => {
        setData(prev => prev.map((element) => {
            if (element.id === id) {
                return { ...element, completed: !element.completed }
            }
            return element
        }))
    }


    return (
        <div className={styles.container}>
            <div className={styles.filters}>
                <Input value={search} handleGetValue={setSearch} className={styles.input} />
                <Select value={filter} handleSelect={setFilter} className={styles.select} />
            </div>
            {dataFilterAndSearch.length ? (
                <div className={styles.list}>
                    {dataFilterAndSearch.map((element) => <Card key={element.id} element={element} handleChangeStatus={handleChangeStatus} />)}
                </div>
            ) : <Empty search={search} filter={filter} />}
        </div>
    )
}