import Link from "next/link"

export default function Ex() {
	return (
		<div className="flex gap-2 p-5">
			<Link
				className="p-3"
				href="/example/header"
			>
				Headers
			</Link>
			<Link
				className="p-3"
				href="/example/button"
			>
				Button
			</Link>
			<Link
				className="p-3"
				href="/example/card"
			>
				Card
			</Link>
			<Link
				className="p-3"
				href="/example/textsection"
			>
				TextSection
			</Link>
		</div>
	)
}