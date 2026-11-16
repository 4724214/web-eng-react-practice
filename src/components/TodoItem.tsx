import type { Todo } from "../types"

type TodoItemProps = {
    todo: Todo;
};


export function TodoItem({ todo }: TodoItemProps){
    const isOverdue = todo.dueDate ? new Date(todo.dueDate) < new Date() : false;
    return (
        <li>
            <strong>{todo.title}</strong>
            <span>{todo.completed ? "(完了)" : "(未完了)"}</span>
            <span style={{ color: isOverdue ? "red" : undefined}}>{todo.dueDate}</span>
        </li>
    )
}

