'use client'

import Link from "next/link"
import { useState } from 'react'
import { Search } from 'lucide-react'
import { ContainerWrapper } from "@/components/shared/container-wrapper"
import { Typography } from "@/components/shared/typography"
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export function PropertySearch() {
	const [lookingFor, setLookingFor] = useState('Buy')
	const [location, setLocation] = useState('London')
	const [propertyType, setPropertyType] = useState('Family House')
	const [bedrooms, setBedrooms] = useState('3 bedrooms')
	const [budget, setBudget] = useState('$500,000')

	return (
		<section className="py-10 lg:pt-25">
			<ContainerWrapper>
				<div className="flex flex-col px-5 gap-15 items-center">
					<div
						className="flex flex-col gap-5 md:max-w-4/5 md:max-w-202"
					>
						<Typography as="h1">
							Find Your Dream Property
						</Typography>
						<Typography as="p" styleVariant="muted">
							We offer modern properties with the best quality that meet all your needs.
						</Typography>
					</div>
					<div className="w-full flex flex-col gap-15 items-center lg:flex-row">
						<div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
							<Select value={lookingFor} onValueChange={setLookingFor}
								span="Looking for">
								<SelectTrigger>
									<SelectValue placeholder="Looking for" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="Buy">Buy</SelectItem>
									<SelectItem value="Rent">Rent</SelectItem>
								</SelectContent>
							</Select>

							<Select value={location} onValueChange={setLocation} span="Location">
								<SelectTrigger>
									<SelectValue placeholder="Location" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="London">London</SelectItem>
									<SelectItem value="Paris">Paris</SelectItem>
									<SelectItem value="New York">New York</SelectItem>
								</SelectContent>
							</Select>

							<Select value={propertyType} onValueChange={setPropertyType} span="Property Type">
								<SelectTrigger>
									<SelectValue placeholder="Property Type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="Family House">Family House</SelectItem>
									<SelectItem value="Apartment">Apartment</SelectItem>
									<SelectItem value="Studio">Studio</SelectItem>
								</SelectContent>
							</Select>

							<Select value={bedrooms} onValueChange={setBedrooms} span="Bedrooms">
								<SelectTrigger>
									<SelectValue placeholder="Bedrooms" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="1 bedroom">1 bedroom</SelectItem>
									<SelectItem value="2 bedrooms">2 bedrooms</SelectItem>
									<SelectItem value="3 bedrooms">3 bedrooms</SelectItem>
								</SelectContent>
							</Select>

							<Select value={budget} onValueChange={setBudget} span="Budget">
								<SelectTrigger>
									<SelectValue placeholder="Budget" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="$200,000">$200,000</SelectItem>
									<SelectItem value="$300,000">$300,000</SelectItem>
									<SelectItem value="$500,000">$500,000</SelectItem>
									<SelectItem value="$1,000,000">$1,000,000</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<Button
							asChild

							className="w-full lg:w-auto lg:size-9"
						>
							<Link
								className="text-base/[140%] font-medium tracking-tight"
								href="/signup"
							>
								<span className="block lg:hidden">Search</span>

								<Search />
								<span className="sr-only">Search</span>
							</Link>
						</Button>
					</div>
				</div>
			</ContainerWrapper>
		</section>
	)
}