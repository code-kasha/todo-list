import { useState } from "react"

export default function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
	const [isEditing, setIsEditing] = useState(false)
	const [editText, setEditText] = useState(todo.text)

	function handleEdit() {
		if (editText.trim() === "") return
		onEdit(todo.id, editText.trim())
		setIsEditing(false)
	}

	function handleKeyDown(e) {
		if (e.key === "Enter") handleEdit()
		if (e.key === "Escape") {
			setEditText(todo.text)
			setIsEditing(false)
		}
	}

	return (
		<li
			className={`group flex items-center gap-3 bg-white border rounded-xl px-4 py-3 transition-all duration-200
			${todo.completed ? "border-gray-100 opacity-60" : "border-gray-200 hover:border-indigo-200 hover:shadow-sm"}`}
		>
			{/* checkbox */}
			<button
				onClick={() => onToggle(todo.id)}
				className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200
					${
						todo.completed
							? "bg-indigo-600 border-indigo-600"
							: "border-gray-300 hover:border-indigo-400"
					}`}
			>
				{todo.completed && (
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none">
						<polyline
							points="1.5,5 4,7.5 8.5,2.5"
							stroke="white"
							strokeWidth="1.8"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
			</button>

			{/* text or edit input */}
			{isEditing ? (
				<input
					type="text"
					value={editText}
					onChange={(e) => setEditText(e.target.value)}
					onKeyDown={handleKeyDown}
					autoFocus
					className="flex-1 text-sm border-b-2 border-indigo-400 outline-none py-0.5 bg-transparent text-gray-700 placeholder:text-gray-300"
				/>
			) : (
				<span
					className={`flex-1 text-sm transition-all duration-200
					${todo.completed ? "line-through text-gray-400" : "text-gray-700"}`}
				>
					{todo.text}
				</span>
			)}

			{/* action buttons */}
			<div
				className={`flex items-center gap-1 shrink-0 transition-opacity duration-200
				${isEditing ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
			>
				{isEditing ? (
					<>
						<button
							onClick={handleEdit}
							className="text-xs bg-indigo-600 text-white font-medium px-3 py-1 rounded-lg hover:bg-indigo-700 transition-colors"
						>
							Save
						</button>
						<button
							onClick={() => {
								setEditText(todo.text)
								setIsEditing(false)
							}}
							className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-lg hover:bg-gray-200 transition-colors"
						>
							Cancel
						</button>
					</>
				) : (
					<>
						<button
							onClick={() => setIsEditing(true)}
							title="Edit"
							className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all"
						>
							<svg
								width="13"
								height="13"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
								<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
							</svg>
						</button>
						<button
							onClick={() => onDelete(todo.id)}
							title="Delete"
							className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
						>
							<svg
								width="13"
								height="13"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polyline points="3 6 5 6 21 6" />
								<path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
								<path d="M10 11v6M14 11v6" />
								<path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
							</svg>
						</button>
					</>
				)}
			</div>
		</li>
	)
}
