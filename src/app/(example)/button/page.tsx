import { ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Buttons() {
	return (
		<>
			<div className="flex gap-2 p-10 bg-amber-900/20">
				<Button className="">default @</Button>

				<Button
					className=""
					variant="outline"
				>
					outline @
				</Button>
				<Button
					className=""
					variant="ghost"
				>
					Ghost @
				</Button>

				<Button
					className=""
					size="sm"
				>
					Click @ sm
				</Button>
				<Button
					className=""
					size="lg"
				>
					Click @ lg
				</Button>

				<Button size="icon">
					<ArrowLeft />
				</Button>
				<Button size="icon">
					<ArrowRight />
				</Button>

				<Button
					className="border-white"
					variant="outline"
					size="icon"
				>
					<ArrowLeft className="text-white" />
				</Button>
				<Button
					variant="outline"
					size="icon"
				>
					<ArrowRight />
				</Button>
			</div>
			<div className="flex flex-col gap-2 p-10 bg-amber-900/20">
				<Button className="">default @</Button>

				<Button
					className=""
					variant="outline"
				>
					outline @
				</Button>
				<Button
					className=""
					variant="ghost"
				>
					Ghost @
				</Button>

				<Button
					className=""
					size="sm"
				>
					Click @ sm
				</Button>
				<Button
					className=""
					size="lg"
				>
					Click @ lg
				</Button>
			</div>
		</>
	)
}