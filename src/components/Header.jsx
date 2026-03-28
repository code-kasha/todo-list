export default function Header() {
	return (
		<header className="flex items-center justify-center gap-2 sm:gap-4 bg-indigo-600 px-4 sm:px-8 py-4 sm:py-5">
			{/* icon */}
			<div className="flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 bg-white/20 rounded-xl shrink-0">
				<svg
					width="18"
					height="18"
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					strokeWidth="2.2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<rect x="3" y="3" width="18" height="18" rx="3" />
					<polyline points="9,12 11,14 15,10" />
				</svg>
			</div>

			{/* text */}
			<div className="min-w-0">
				<h1 className="text-white text-base sm:text-xl font-semibold tracking-tight leading-none truncate">
					Todo List
				</h1>
				<p className="text-white/60 text-xs sm:text-sm mt-1 truncate">
					&nbsp;&nbsp;What's up?
				</p>
			</div>
		</header>
	)
}
