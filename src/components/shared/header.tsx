import Link from "next/link"
import { ContainerWrapper } from "@/components/shared/container-wrapper"
import { BurgerMenu } from "@/components/shared/burger-menu"
import { Icons } from "@/components/shared/icons"
import { Navigation } from "@/components/shared/navigation"
import { SignUpAndSignIn } from "@/components/shared/signup-and-signin"

export function Header() {
	return (
		<header className="sticky top-0 z-50 w-full shadow-lg shadow-black/5 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<ContainerWrapper>
				<div className="container mx-auto px-4 h-13 flex justify-between items-center md:5 md:h-15 lg:h-17">
					<Link
						href="/"
						className="w-[135px]"
					>
						<Icons.logo fill />
					</Link>

					<Navigation className="hidden md:flex" />

					<SignUpAndSignIn className="hidden md:flex" />

					<BurgerMenu />
				</div>
			</ContainerWrapper>
		</header>
	)
}