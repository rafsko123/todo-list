export type TODO_STATUS = ""

export type TODO_Element = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export type TODO_Status = "all" | "completed" | 'pending';