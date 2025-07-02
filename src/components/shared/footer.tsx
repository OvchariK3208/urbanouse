import Link from "next/link"
import { MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContainerWrapper } from "@/components/shared/container-wrapper"
import { Icons } from "@/components/shared/icons"
import { TextSection } from "@/components/shared/text-section"
import { Typography } from "@/components/shared/typography"

export function Footer() {
	return (
		<>
			<section className="flex items-center justify-center bg-[linear-gradient(to_top,_rgba(23,23,23)_0%,_rgba(23,23,23,0.9)_50%,_rgba(23,23,23,0.8)_100%),url('/test5.webp')] bg-cover bg-center bg-no-repeat py-10 md:py-14 lg:py-20">
				<ContainerWrapper>
					<div className="flex h-full flex-col items-center justify-center gap-10 px-5">
						<TextSection
							title={"Ready to Find Your\nDream Home with Urbanouse?"}
							text={
								"Join thousands of happy homeowners who found their perfect residence with us. Let’s make your property journey smooth and successful."
							}
							className="w-full text-center"
							orientation="vertical"
							items="center"
							theme="dark"
						/>
						<Button
							asChild
							variant="outline"
							className="border-white text-white dark:border-white dark:text-white"
						>
							<Link
								className="text-base/[140%] font-medium tracking-tight"
								href="/signup"
							>
								Let&#39;s work together
								<MoveRight />
								<span className="sr-only">Let's work together</span>
							</Link>
						</Button>
					</div>
				</ContainerWrapper>
			</section>
			<footer className="overflow-hidden bg-[#171717] py-10">
				<ContainerWrapper>
					<div className="flex flex-col gap-10 px-5">
						<div className="flex flex-col justify-between gap-5 lg:flex-row">
							<div className="flex flex-col gap-3">
								<Typography
									as="p"
									styleVariant="footer"
								>
									<a
										href="https://www.google.com/maps?q=2223+CALLE+DE+ALCALÁ+SALAMANCA+MADRID,+28028"
										target="_blank"
										rel="noopener noreferrer"
									>
										2223 CALLE DE ALCALÁ SALAMANCA
										<br />
										MADRID, 28028
									</a>
								</Typography>
								<Typography
									as="p"
									styleVariant="footer"
								>
									<a href="tel:+34123456789">(+34) 123-456-789</a>
								</Typography>
							</div>
							<div className="flex flex-col gap-1">
								<Typography
									as="p"
									styleVariant="footer"
								>
									GET IN TOUCH
								</Typography>
								<Typography
									as="h3"
									className="text-xl lowercase"
									styleVariant="footer"
								>
									<a
										className="inline-block lg:py-1"
										href="mailto:marketing@urbanouse.com"
									>
										marketing@urbanouse.com
									</a>
								</Typography>
							</div>
						</div>
						<div className="flex justify-between">
							<nav>
								<ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-5">
									<Typography as="li">
										<Typography
											as="p"
											styleVariant="footer"
										>
											<Link
												className="inline-block"
												href="/"
											>
												HOME
											</Link>
										</Typography>
									</Typography>
									<Typography as="li">
										<Typography
											as="p"
											styleVariant="footer"
										>
											<Link href="/about">ABOUT</Link>
										</Typography>
									</Typography>
									<Typography as="li">
										<Typography
											as="p"
											styleVariant="footer"
										>
											<Link href="/properties">PROPERTIES</Link>
										</Typography>
									</Typography>
									<Typography as="li">
										<Typography
											as="p"
											styleVariant="footer"
										>
											<Link href="/agents">AGENTS</Link>
										</Typography>
									</Typography>
									<Typography as="li">
										<Typography
											as="p"
											styleVariant="footer"
										>
											<Link href="/projects">PROJECTS</Link>
										</Typography>
									</Typography>
									<Typography as="li">
										<Typography
											as="p"
											styleVariant="footer"
										>
											<Link href="/contacts">CONTACTS</Link>
										</Typography>
									</Typography>
								</ul>
							</nav>

							{/* Внешние ссылки */}
							<ul className="flex flex-col items-end gap-2 lg:flex-row lg:items-center lg:gap-5">
								<Typography as="li">
									<Typography
										as="p"
										styleVariant="footer"
									>
										<a
											href="https://instagram.com/"
											target="_blank"
											rel="noopener noreferrer"
										>
											INSTAGRAM
										</a>
									</Typography>
								</Typography>
								<Typography as="li">
									<Typography
										as="p"
										styleVariant="footer"
									>
										<a
											href="https://facebook.com/"
											target="_blank"
											rel="noopener noreferrer"
										>
											FACEBOOK
										</a>
									</Typography>
								</Typography>
								<Typography as="li">
									<Typography
										as="p"
										styleVariant="footer"
									>
										<a
											href="https://linkedin.com/company/"
											target="_blank"
											rel="noopener noreferrer"
										>
											LINKEDIN
										</a>
									</Typography>
								</Typography>
								<Typography as="li">
									<Typography
										as="p"
										styleVariant="footer"
									>
										<a
											href="https://youtube.com/"
											target="_blank"
											rel="noopener noreferrer"
										>
											YOUTUBE
										</a>
									</Typography>
								</Typography>
							</ul>
						</div>
						<div className="relative h-[104px] md:h-[216px]">
							<div className="absolute top-0 left-1/2 w-[654px] -translate-x-1/2 md:w-[1341px]">
								<Icons.homeBg className="fill-white" />
							</div>
						</div>

						<div className="flex flex-col-reverse items-center gap-3 lg:flex-row lg:justify-between">
							<Typography
								as="p"
								styleVariant="footer"
							>
								@2025 URBANOUSE. ALL RIGHTS RESERVED
							</Typography>
							<nav>
								<ul className="flex flex-wrap justify-between gap-3 lg:gap-5">
									<Typography
										as="li"
										styleVariant="footer"
									>
										<Typography
											as="p"
											styleVariant="footer"
										>
											<Link href="/privacy-policy">PRIVACY POLICY</Link>
										</Typography>
									</Typography>
									<Typography as="li">
										<Typography
											as="p"
											styleVariant="footer"
										>
											<Link href="/terms-of-use">TERM OF USE</Link>
										</Typography>
									</Typography>
									<Typography as="li">
										<Typography
											as="p"
											styleVariant="footer"
										>
											<Link href="/legal-disclaimer">LEGAL DISCLAIMER</Link>
										</Typography>
									</Typography>
									<Typography as="li">
										<Typography
											as="p"
											styleVariant="footer"
										>
											<Link href="/cookie-policy">COOKIE POLICY</Link>
										</Typography>
									</Typography>
								</ul>
							</nav>
						</div>
					</div>
				</ContainerWrapper>
			</footer>
		</>
	)
}