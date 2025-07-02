"use client"

import { useEffect, useState } from "react"
import { ContainerWrapper } from "@/components/shared/container-wrapper"
import { TextSection } from "@/components/shared/text-section"
import { Button } from "@/components/ui/button"
import { Property } from "@/types/property"
import { ProductCard } from "@/components/shared/product-card"

export function FeturedProperties() {
	const [properties, setProperties] = useState<Property[]>([])
	const [group, setGroup] = useState<string>("All Properties")

	useEffect(() => {
		fetch("/api/properties")
			.then(res => res.json())
			.then(setProperties)
	}, [])

	const filtered =
		group === "All Properties"
			? properties
			: properties.filter(property => property.group === group)

	return (
		<section className="overflow-hidden py-20">
			<ContainerWrapper>
				<div className="flex flex-col items-center gap-15 px-5">
					<TextSection
						badge="Fetured Properties"
						title="Discover Urbanouse Properties"
						text="Explore an exclusive selection of premium properties, meticulously curated to provide you with the best in luxury living and prime real estate investment options, tailored to your needs"
					/>
					<div className="flex max-w-full items-center justify-between overflow-x-scroll">
						<div className="flex items-center gap-2 lg:gap-5">
							{["All Properties", "Family House", "Villa", "Apartment"].map(
								type => (
									<Button
										key={type}
										variant={group === type ? "default" : "outline"}
										onClick={() => setGroup(type)}
										className="transform transition-all duration-300 ease-in-out"
									>
										{type}
									</Button>
								),
							)}
						</div>
					</div>
					<div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
						{filtered
							.slice(0, 8)
							.map(({ id, title, description, img, price, tags, location }) => (
								<ProductCard
									key={id}
									id={id}
									title={title}
									description={description}
									img={img}
									price={price}
									tags={tags}
									location={location}
								/>
							))}
					</div>
				</div>
			</ContainerWrapper>
		</section>
	)
}