import { FormEvent, ChangeEvent} from 'react'

export type AddTodoProps = {
    task: string,
    handleSubmitTodo: (e: FormEvent) => void
    handleChange: (e: ChangeEvent) => void
}

export const AddTodo = ({task, handleSubmitTodo, handleChange}: AddTodoProps) => (
    <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
        <input type="text" name="task" value={task} className="flex-1 rounded shadow p-2 text-grey-dark mr-2" onChange={handleChange}/>
        <button type="submit" aria-label="Add todo">
            Add
        </button>
    </form>
)