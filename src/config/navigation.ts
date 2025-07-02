export const navigationRoutes: {
	title: string
	href: string
	role: string
	children?: { title: string; href: string; role: string }[]
}[] = [
	{
		title: "Home",
		href: "/",
		role: "link",
	},
	{
		title: "About",
		href: "/about",
		role: "link",
	},
	{
		title: "Properties",
		href: "/properties",
		role: "trigger",
		children: [
			{
				title: "Buy Properties",
				href: "/properties/buy",
				role: "link",
			},
			{
				title: "Property List",
				href: "/properties/list",
				role: "link",
			},
			{
				title: "Property Detail",
				href: "/properties/detail",
				role: "link",
			},
		],
	},
	{
		title: "Agents",
		href: "/agents",
		role: "link",
	},
	{
		title: "Projects",
		href: "/projects",
		role: "link",
	},
	{
		title: "Contacts",
		href: "/contacts",
		role: "link",
	},
]