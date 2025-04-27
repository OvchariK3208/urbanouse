"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/shared/navigation"
import { SignUpAndSignIn } from "@/components/shared/signup-and-signin"

export function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(prev => !prev)
	}

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden"
		} else {
			document.body.style.overflow = ""
		}
	}, [isOpen])
	return (
		<>
			<Button
				variant="ghost"
				size="icon"
				onClick={toggleMenu}
				className="md:hidden"
			>
				{isOpen ? <X className="size-full" /> : <Menu className="size-full" />}
			</Button>

			{isOpen && (
				<div className="md:hidden fixed top-13 left-0 right-0 h-screen z-100 py-5 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
					<div className="flex flex-col items-center gap-2.5 px-4">
						<Navigation className="w-full flex-col space-y-2" />
						<SignUpAndSignIn className="flex-col" />
					</div>
				</div>
			)}
		</>
	)
}