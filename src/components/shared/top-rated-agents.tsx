"use client"

import { useEffect, useState } from "react"
import { ContainerWrapper } from "@/components/shared/container-wrapper"
import { TextSection } from "@/components/shared/text-section"
import { AgentType } from "@/types/agent"
import { AgentCard } from "@/components/shared/agent-card"
import { Button } from "@/components/ui/button"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	CarouselDots,
} from "@/components/ui/carousel"

export function TopRatedAgents() {
	const [agents, setAgents] = useState<AgentType[]>([])

	useEffect(() => {
		fetch("/api/agents")
			.then(res => res.json())
			.then(setAgents)
	}, [])

	console.log(agents)
	return (
		<section className="py-10 lg:py-20">
			<ContainerWrapper>
				<div className="flex flex-col items-center gap-15 px-5">
					<TextSection
						badge="Top Rate Agents"
						title={"Meet One of Our\nTop-Performing Agents"}
						text="A dedicated section highlighting an agent who’s gone above and beyond"
					/>

					<Carousel className="w-full">
						<CarouselContent>
							{agents.map(
								({
									id,
									name,
									position,
									img,
									rating,
									location,
									propertiesSold,
									propertyTypes,
									contact,
								}) => (
									<CarouselItem
										key={id}
										className="max-w-[280px] basis-full md:basis-1/2 lg:basis-1/4"
									>
										<AgentCard
											key={id}
											id={id}
											name={name}
											position={position}
											img={img}
											rating={rating}
											location={location}
											propertiesSold={propertiesSold}
											propertyTypes={propertyTypes}
											contact={contact}
										/>
									</CarouselItem>
								),
							)}
						</CarouselContent>
						<div className="mt-15 flex items-center justify-center gap-5">
							<CarouselPrevious />
							<CarouselDots />
							<CarouselNext />
						</div>
					</Carousel>
				</div>
			</ContainerWrapper>
		</section>
	)
}