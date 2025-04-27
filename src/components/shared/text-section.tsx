import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Text } from "@/components/shared/text"

type TextProps = {
	badge?: string
	title: string
	text: string
	className?: string
}

export const TextSection: React.FC<TextProps> = ({
	badge,
	title,
	text,
	className,
}) => {
	return (
		<div
			className={cn(
				"max-w-[620px] flex flex-col gap-5 md:max-w-202",
				className,
			)}
		>
			<div className="flex flex-col space-y-2">
				{badge && (
					<Badge
						variant="outline"
						className="text-lg/[150%] tracking-tighter font-medium"
					>
						{" "}
						<svg
							width="12"
							height="13"
							viewBox="0 0 12 13"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle
								cx="6"
								cy="6.5"
								r="6"
								fill="black"
							/>
						</svg>
						{badge}
					</Badge>
				)}

				<Text as="h2">{title}</Text>
			</div>
			<div className="flex">
				<Text
					as="p"
					className="text-xl text-muted-foreground"
				>
					{text}
				</Text>
			</div>
		</div>
	)
}