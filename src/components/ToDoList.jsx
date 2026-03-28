import ToDoItem from "./ToDoItem"

export default function ToDoList({ todos, onToggle, onDelete, onEdit }) {
	if (todos.length === 0) {
		return (
			<p className="text-center text-gray-400 mt-8 text-sm">
				No tasks yet. Add one above!
			</p>
		)
	}

	return (
		<ul className="flex flex-col gap-2 px-2 sm:px-4 mt-4">
			{todos.map((todo) => (
				<ToDoItem
					key={todo.id}
					todo={todo}
					onToggle={onToggle}
					onDelete={onDelete}
					onEdit={onEdit}
				/>
			))}
		</ul>
	)
}
