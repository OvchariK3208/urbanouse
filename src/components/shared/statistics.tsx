import { ContainerWrapper } from "@/components/shared/container-wrapper"
import { Typography } from "@/components/shared/typography"

export function Statistics() {
	return (
		<section className="bg-[#171717] py-10 lg:py-40">
			<ContainerWrapper>
				<div className="grid grid-cols-1 gap-5 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
					<div className="flex flex-col items-center sm:items-start">
						<Typography
							as="span"
							styleVariant="muted"
						>
							Home for Rent
						</Typography>
						<Typography
							as="h3"
							className="text-6xl/[120%] font-semibold tracking-tight text-white"
						>
							5300+
						</Typography>
					</div>
					<div className="flex flex-col items-center sm:items-start">
						<Typography
							as="span"
							styleVariant="muted"
						>
							Home to Buy
						</Typography>
						<Typography
							as="h3"
							className="text-6xl/[120%] font-semibold tracking-tight text-white"
						>
							3000+
						</Typography>
					</div>
					<div className="flex flex-col items-center sm:items-start">
						<Typography
							as="span"
							styleVariant="muted"
						>
							Agents
						</Typography>
						<Typography
							as="h3"
							className="text-6xl/[120%] font-semibold tracking-tight text-white"
						>
							120+
						</Typography>
					</div>
					<div className="flex flex-col items-center sm:items-start">
						<Typography
							as="span"
							styleVariant="muted"
						>
							Cities Covered
						</Typography>
						<Typography
							as="h3"
							className="text-6xl/[120%] font-semibold tracking-tight text-white"
						>
							83+
						</Typography>
					</div>
					<div className="flex flex-col items-center sm:items-start">
						<Typography
							as="span"
							styleVariant="muted"
						>
							Total Properties
						</Typography>
						<Typography
							as="h3"
							className="text-6xl/[120%] font-semibold tracking-tight text-white"
						>
							9200+
						</Typography>
					</div>
				</div>
			</ContainerWrapper>
		</section>
	)
}