import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardSubTitle,
} from "@/components/ui/card"

export function ProductCard() {
	return (
		<Card>
			<CardHeader className="relative w-full aspect-[3/2]">
				<Image
					src="/test6.jpg"
					fill
					alt="Picture of the author"
					className="rounded-xl object-cover"
				/>
				<Badge className="absolute top-2 left-2">for sale</Badge>
			</CardHeader>
			<CardContent>
				<CardTitle>$750,000</CardTitle>
				<CardSubTitle>Golden Leaf Residence</CardSubTitle>
				<CardDescription>
					1012 Oak Avenue
					<br />
					Manchester, M1 1AE, United Kingdom
				</CardDescription>
				<CardDescription>3 beds · 2 bath · 900 sq.ft</CardDescription>
			</CardContent>
		</Card>
	)
}