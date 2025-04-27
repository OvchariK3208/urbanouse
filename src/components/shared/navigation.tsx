"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { usePathname } from "next/navigation"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: {
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
				title: "Property 1",
				href: "/properties/property-1",
				role: "link",
			},
			{
				title: "Property 2",
				href: "/properties/property-2",
				role: "link",
			},
			{
				title: "Property 3",
				href: "/properties/property-3",
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

interface Props {
	className?: string
}

export const Navigation: FC<Props> = ({ className }) => {
	const pathname = usePathname()
	return (
		<NavigationMenu orientation="horizontal">
			<NavigationMenuList className={cn("", className)}>
				{components.map(item => (
					<NavigationMenuItem key={item.title}>
						{item.role === "link" && (
							<Link
								href={item.href}
								legacyBehavior
								passHref
							>
								<NavigationMenuLink
									className={cn(
										navigationMenuTriggerStyle(),
										pathname === item.href &&
											"text-popover-foreground font-medium",
									)}
								>
									{item.title}
								</NavigationMenuLink>
							</Link>
						)}

						{item.role === "trigger" && item.children && (
							<>
								<NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid md:grid-cols-2 gap-2 p-2 w-[300px] md:w-[300px] lg:w-[400px]">
										{item.children.map(child => (
											<li key={child.title}>
												<Link
													href={child.href}
													legacyBehavior
													passHref
												>
													<NavigationMenuLink
														className={
															"block select-none rounded-md p-2 text-sm text-center md:text-start"
														}
													>
														{child.title}
													</NavigationMenuLink>
												</Link>
											</li>
										))}
									</ul>
								</NavigationMenuContent>
							</>
						)}
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"