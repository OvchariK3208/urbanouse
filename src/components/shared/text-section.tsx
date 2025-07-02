import { Dot } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Typography } from "@/components/shared/typography"

type TextProps = {
	badge?: string
	title: string
	text: string
	className?: string
	orientation?: "horizontal" | "vertical"
	items?: "start" | "center" | "end"
	theme?: "light" | "dark"
}

export const TextSection: React.FC<TextProps> = ({
	badge,
	title,
	text,
	className,
	orientation = "horizontal",
	items = "start",
	theme = "light",
}) => {
	return (
		<div
			className={cn("flex flex-col gap-5 md:max-w-4/5 md:max-w-202", className)}
		>
			<div
				className={cn(
					"flex w-full flex-col items-start gap-2 text-start",
					items === "center" && "items-center text-center",
					items === "end" && "items-end text-end",
				)}
			>
				{badge && (
					<Badge
						variant="outline"
						className="text-lg/[150%] font-medium tracking-tighter"
					>
						{" "}
						<Dot className="stroke-14 md:stroke-[16] lg:stroke-[18]" />
						<Typography as="p">{badge}</Typography>
					</Badge>
				)}

				<Typography
					as="h2"
					className={cn("", theme === "dark" && "text-white")}
				>
					{title}
				</Typography>
			</div>
			<div
				className={cn(
					"flex",
					orientation === "horizontal" && "", //"llg:max-w-1/3 lg:p-5 lg:pl-10 w-full",
					items === "center" && "text-center",
					items === "end" && "text-end",
				)}
			>
				<Typography
					as="p"
					className={cn("text-xl", theme === "dark" && "text-[#a1a1a1]")}
					styleVariant="muted"
				>
					{text}
				</Typography>
			</div>
		</div>
	)
}