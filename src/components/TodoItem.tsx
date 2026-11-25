import type { Todo } from "../types"

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
};


export function TodoItem({ todo, onToggle }: TodoItemProps){
    const isOverdue = todo.dueDate ? new Date(todo.dueDate) < new Date() : false;
    return (
        <li>
            <strong>{todo.title}</strong>
            <span>{todo.completed ? "(完了)" : "(未完了)"}</span>
            <span style={{ color: isOverdue ? "red" : undefined}}>{todo.dueDate}</span>
            <button type="button" onClick={() => onToggle(todo.id)}>
                {todo.completed ? "未完了に戻す" : "完了にする"}
            </button>
        </li>
    )
}

