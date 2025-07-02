"use client"

import { useEffect, useState } from "react"
import { ContainerWrapper } from "@/components/shared/container-wrapper"
import { Icons } from "@/components/shared/icons"
import { TextSection } from "@/components/shared/text-section"
import { Typography } from "@/components/shared/typography"
import { TestimonialType } from "@/types/testimonial"
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	CarouselDots,
} from "@/components/ui/carousel"

export function Testimonial() {
	const [testimonials, setTestimonials] = useState<TestimonialType[]>([])

	useEffect(() => {
		fetch("/api/testimonials")
			.then(res => res.json())
			.then(setTestimonials)
	}, [])

	console.log(testimonials)

	return (
		<section className="bg-primary/8 relative overflow-hidden py-10">
			<div className="absolute -top-30 -right-20 -z-5 w-[443px] lg:-top-15">
				<Icons.pattern className="fill-primary/9" />
			</div>
			<div className="absolute -bottom-55 -left-30 -z-5 w-[443px] lg:-bottom-5">
				<Icons.pattern className="fill-primary/9 rotate-60" />
			</div>
			<ContainerWrapper>
				<div className="flex flex-col items-center gap-15 px-5">
					<TextSection
						badge="Testimonial"
						title="What People Are Saying"
						text="Real feedback from clients who’ve experienced the Urbanouse difference."
						className="w-full"
						orientation="vertical"
					/>

					<Carousel className="w-full">
						<CarouselContent>
							{testimonials.map(({ testimonial, author, role }) => (
								<CarouselItem
									key={author}
									className="flex flex-col items-center justify-center"
								>
									<Typography
										as="h4"
										className="mt-8 w-4/5 text-center"
									>
										{`"${testimonial}"`}
									</Typography>
									<Typography
										as="p"
										className="mt-6 text-lg/[150%] font-medium"
									>
										{author}
									</Typography>
									<Typography
										as="p"
										styleVariant="muted"
										className=""
									>
										{role}
									</Typography>
								</CarouselItem>
							))}
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

/*
Testimonial
What People Are Saying
Real feedback from clients who’ve experienced the Urbanouse difference.
“Urbanouse made buying our first home an absolute breeze! Their team was incredibly attentive and guided us through every step. We couldn’t be happier with our new home.”
Sarah & Michael Stone
Homeowners
*/