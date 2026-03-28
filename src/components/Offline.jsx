import { useOnlineStatus } from "../hooks/useOnlineStatus"

export default function Offline() {
	const isOnline = useOnlineStatus()

	if (isOnline) return null

	return (
		<div
			style={{
				position: "fixed",
				inset: 0,
				background: "#4F46E5",
				color: "white",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: "1rem",
				zIndex: 9999,
			}}
		>
			<span style={{ fontSize: "3rem" }}>📡</span>
			<h1 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 500 }}>
				You're offline
			</h1>
			<p style={{ margin: 0, opacity: 0.8, fontSize: "1rem" }}>
				Check your connection and try again.
			</p>
		</div>
	)
}
