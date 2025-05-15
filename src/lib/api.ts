import { TODO_Element } from "@/types/todo";

export async function getTodoList(): Promise<Array<TODO_Element>> {
    try {
        const r = await fetch('https://jsonplaceholder.typicode.com/todos');

        if(!r.ok) throw new Error(`HTTP Error with status ${r.status}`);

        const d = await r.json();
        return d;
    }
     catch (error) {
        console.error(error);
        throw error;
     }
}