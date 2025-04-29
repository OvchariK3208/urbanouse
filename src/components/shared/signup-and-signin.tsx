import Link from "next/link"

import { cn } from "@/lib/utils"
import { ModeSwitcher } from "@/components/shared/mode-switcher"
import { Button } from "@/components/ui/button"

interface Props {
	className?: string
}

export const SignUpAndSignIn: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn("flex items-center gap-2.5 w-full md:w-auto", className)}
		>
			<Button
				asChild
				variant="outline"
				className="w-full md:w-auto"
			>
				<Link
					className="text-base/[140%] font-medium tracking-tight"
					href="/signup"
				>
					Sign Up
					<span className="sr-only">Sign Up</span>
				</Link>
			</Button>

			<Button
				asChild
				className="w-full md:w-auto"
			>
				<Link
					className=" text-base/[140%] font-medium tracking-tight"
					href="/signin"
				>
					Sign In
				</Link>
			</Button>

			<ModeSwitcher />
		</div>
	)
}