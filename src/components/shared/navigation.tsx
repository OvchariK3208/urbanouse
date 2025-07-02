"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { navigationRoutes } from "@/config/navigation"
import { usePathname } from "next/navigation"
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

interface Props {
	className?: string
}

export const Navigation: React.FC<Props> = ({ className }) => {
	const pathname = usePathname()
	console.log(pathname)
	return (
		<NavigationMenu
			orientation="horizontal"
			className="md:px-0.5"
		>
			<NavigationMenuList className={cn("", className)}>
				{navigationRoutes.map(item => (
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
									<ul className="grid w-[300px] gap-2 p-2 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
										{item.children.map(child => (
											<li key={child.title}>
												<Link
													href={child.href}
													legacyBehavior
													passHref
												>
													<NavigationMenuLink
														className={cn(
															"block rounded-md p-2 text-center text-sm select-none md:text-start",
															navigationMenuTriggerStyle(),
															pathname === child.href &&
																"text-popover-foreground font-medium",
														)}
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
						"hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
						className,
					)}
					{...props}
				>
					<div className="text-sm leading-none font-medium">{title}</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"