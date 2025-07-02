export type ProjectGroup = "Family House" | "Villa" | "Apartment"

export interface ProjectType {
	id: number
	title: string
	description: string
	count: string
	img: string
	group: ProjectGroup
}