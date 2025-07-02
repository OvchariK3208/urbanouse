import { ProductCard } from "@/components/shared/product-card"

export default function CardX() {
	return (
		<>
			<div className="grid grid-cols-4 gap-5 bg-blue-800/20 p-5">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
			<div className="flex flex-wrap justify-center gap-4 bg-pink-700/20 p-5">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</>
	)
}