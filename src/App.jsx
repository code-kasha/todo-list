import { useState } from "react"
import Offline from "./components/Offline"
import Header from "./components/Header"
import ToDoList from "./components/ToDoList"

export default function App() {
	const [todos, setTodos] = useState([])
	const [input, setInput] = useState("")

	function handleAdd() {
		if (input.trim() === "") return
		setTodos([
			...todos,
			{ id: Date.now(), text: input.trim(), completed: false },
		])
		setInput("")
	}

	function handleToggle(id) {
		setTodos(
			todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
		)
	}

	function handleDelete(id) {
		setTodos(todos.filter((t) => t.id !== id))
	}

	function handleEdit(id, newText) {
		setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)))
	}

	return (
		<>
			<Offline />
			<div className="min-h-screen bg-gray-50">
				<Header
					totalTasks={todos.length}
					completedTasks={todos.filter((t) => t.completed).length}
				/>

				{/* add task input */}
				<div className="flex gap-2 px-2 sm:px-4 mt-4">
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => e.key === "Enter" && handleAdd()}
						placeholder="Add a new task..."
						className="flex-1 text-sm border border-gray-200 rounded-xl px-4 py-2.5 outline-none focus:border-indigo-400 bg-white"
					/>
					<button
						onClick={handleAdd}
						className="bg-indigo-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl hover:bg-indigo-700 active:scale-95 transition-all shrink-0"
					>
						Add
					</button>
				</div>

				<ToDoList
					todos={todos}
					onToggle={handleToggle}
					onDelete={handleDelete}
					onEdit={handleEdit}
				/>
			</div>
		</>
	)
}
