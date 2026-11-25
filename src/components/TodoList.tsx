import type { Todo } from "../types"
import { TodoItem } from "./TodoItem"

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
};

export function TodoList({ todos, onToggle }: TodoListProps) {
    return (
        <ul>
            {todos.map((todo: Todo) =>(
                <TodoItem key={todo.id} todo={todo} onToggle={onToggle}/>
            ))}
        </ul>
    )
}