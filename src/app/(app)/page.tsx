"use client"

import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Icons } from "@/components/shared/icons"
import { Button } from "@/components/ui/button"
import { ContainerWrapper } from "@/components/shared/container-wrapper"

export default function Home() {
	return (
		<div className="h-screen max-h-200 lg:max-h-[1024px] mx-auto overflow-x-hidden bg-linear-to-t from-white to-[#E6ECF4]">
			<div className="relative h-full w-full inline-block">
				<Image
					src="/test3.png"
					fill
					alt="Picture of the author"
					className="z-10 object-cover"
				/>

				<div className="absolute top-5 md:top-10 left-1/2 -translate-x-1/2 w-[1341px]">
					<Icons.homeBg />
				</div>

				<ContainerWrapper className="h-full">
					<div className="h-full px-5 pb-10 flex flex-col sm:justify-between items-end sm:flex-row justify-end gap-2 text-white">
						<div className="max-w-[320px] md:max-w-1/2 lg:max-w-[475px] z-10 text-base self-start sm:self-end">
							Discover meticulously crafted homes and properties, blending
							contemporary aesthetics with sustainable living.
						</div>
						<div className="max-x-50 flex flex-col justify-end gap-2 z-10">
							<div className="flex gap-0.5 justify-end">
								<Button
									className=""
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
		</div>
	)
}