import { ContainerWrapper } from "@/components/shared/container-wrapper"
import { TextSection } from "@/components/shared/text-section"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
	return (
		<section className="py-10">
			<ContainerWrapper>
				<div className="flex flex-col-reverse gap-10 px-5 lg:flex-row lg:justify-between">
					<Accordion
						type="single"
						collapsible
						className="flex h-full w-full flex-col gap-2 lg:w-1/2"
					>
						<AccordionItem value="item-1">
							<AccordionTrigger>
								How do I start searching for a property with Urbanouse?
							</AccordionTrigger>
							<AccordionContent>
								You can start by exploring listings through our smart search
								tool — filter by city, property type (rent or buy), budget,
								number of rooms, and more. Whether you're browsing independently
								or want help from an agent, Urbanouse makes it easy to begin.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-2">
							<AccordionTrigger>
								What services does Urbanouse offer for first-time homebuyers?
							</AccordionTrigger>
							<AccordionContent>
								Urbanouse offers guided support for first-time buyers, including
								agent consultations, market insights, and assistance with
								documentation and negotiations. You can also explore homes
								independently using our search platform and get advice whenever
								needed.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-3">
							<AccordionTrigger>
								Can Urbanouse help me sell my property?
							</AccordionTrigger>
							<AccordionContent>
								Yes! Urbanouse connects sellers with local agents who can
								evaluate your property, create a professional listing, promote
								it on our platform, and handle viewings and offers. You’re also
								welcome to list your property yourself if you prefer a DIY
								approach.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-4">
							<AccordionTrigger>
								What types of properties does Urbanouse specialize in?
							</AccordionTrigger>
							<AccordionContent>
								Urbanouse features a wide variety of properties — from city
								apartments and suburban houses to vacation rentals and
								commercial spaces. Whether you're looking to rent or buy, we
								have listings to suit different lifestyles and budgets.
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-5">
							<AccordionTrigger>
								Can I schedule a visit to view properties?
							</AccordionTrigger>
							<AccordionContent>
								Absolutely. Once you find a property that interests you, just
								click “Schedule a Visit” or contact the listing agent directly.
								Many properties also offer virtual tours if you'd prefer to
								explore remotely first.
							</AccordionContent>
						</AccordionItem>
					</Accordion>

					<TextSection
						badge="FAQ's"
						title="Frequently Asked Questions"
						text="Have questions about buying, selling, or renting with Urbanouse? We’ve got the answers to help guide you through the process."
						className="h-full w-full lg:w-1/2"
						orientation="vertical"
						items="end"
					/>
				</div>
			</ContainerWrapper>
		</section>
	)
}