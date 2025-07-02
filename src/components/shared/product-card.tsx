import Image from "next/image"
import { PropertyType } from "@/types/property"
import { Badge } from "@/components/ui/badge"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardSubTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export const ProductCard: React.FC<PropertyType> = ({
	title,
	description,
	img,
	price,
	tags,
}) => {
	return (
		<Card>
			<CardHeader className="relative aspect-[1/1] w-full md:aspect-[3/2]">
				<Image
					src={img}
					fill
					alt={title}
					className="rounded-xl object-cover"
				/>
				<Badge className="absolute top-2 left-2">for sale</Badge>
			</CardHeader>
			<CardContent className="flex flex-1 flex-col">
				<CardSubTitle>{price}</CardSubTitle>
				<CardTitle>{title}</CardTitle>
				<CardDescription className="flex-1">{description}</CardDescription>
				<CardDescription className="flex gap-2">
					{tags.map((item, index) => (
						<>
							<span>{item}</span>
							{index < tags.length - 1 && (
								<Separator
									orientation="vertical"
									className="bg-muted-foreground"
								/>
							)}
						</>
					))}
				</CardDescription>
			</CardContent>
		</Card>
	)
}