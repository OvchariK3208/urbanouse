import { ProductCard } from "@/components/shared/product-card"

export default function CardX() {
	return (
		<>
			<div className="p-5 bg-blue-800/20 grid grid-cols-4 gap-5">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
			<div className="p-5 bg-pink-700/20 flex flex-wrap gap-4 justify-center">
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