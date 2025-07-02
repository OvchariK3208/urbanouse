import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { Icons } from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import { ContainerWrapper } from "@/components/shared/container-wrapper"

export function FirstHome() {
	return (
		<section className="mx-auto h-screen max-h-200 overflow-x-hidden bg-linear-to-t from-white to-[#E6ECF4] lg:max-h-[1024px] dark:from-[#1C2230] dark:to-[#0E1118]">
			<div className="relative inline-block h-full w-full">
				<Image
					src="/test3.png"
					fill
					alt="Picture of the author"
					className="z-10 object-cover"
				/>

				<div className="absolute top-5 left-1/2 w-[1341px] -translate-x-1/2 md:top-10">
					<Icons.homeBg className="fill-foreground" />
				</div>

				<ContainerWrapper className="h-full">
					<div className="flex h-full flex-col items-end justify-end gap-2 px-5 pb-10 text-white sm:flex-row sm:justify-between">
						<div className="z-10 max-w-[320px] self-start text-base sm:self-end md:max-w-1/2 lg:max-w-[475px]">
							Discover meticulously crafted homes and properties, blending
							contemporary aesthetics with sustainable living.
						</div>
						<div className="max-x-50 z-10 flex flex-col justify-end gap-2">
							<div className="flex justify-end gap-0.5">
								<Button
									className="border-primary text-primary"
									size="icon"
									variant="outline"
								>
									<ArrowLeft />
								</Button>
								<Button
									className=""
									size="icon"
								>
									<ArrowRight />
								</Button>
							</div>
							<div className="flex flex-col items-end">
								<div className="font-bold">Silverstone Residence</div>
								<p className="text-end">
									1234 Sunflower Lane
									<br />
									Los Angeles, CA 90001
								</p>
							</div>
						</div>
					</div>
				</ContainerWrapper>
			</div>
		</section>
	)
}