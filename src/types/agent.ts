export type City = "Madrid" | "London" | "New York"
export type PropertyType = "Apartment" | "Villa" | "Family House"
export type FilteredAgentType = PropertyType | "All Type"

export type AgentType = {
	id: number
	img: string
	rating: number
	location: City
	name: string
	position: string
	propertiesSold: string
	propertyTypes: PropertyType[]
	contact: [
		phone: string,
		email: string,
		workingHours: string
	]
}