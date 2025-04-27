import { Text } from "@/components/shared/text"

export default function Hed() {
	return (
		<div className="flex flex-col">
			<Text as="h1">Whereas recognition of the inherent dignity</Text>
			<Text as="h2">Whereas recognition of the inherent dignity</Text>
			<Text as="h3">Whereas recognition of the inherent dignity</Text>
			<Text
				as="h3"
				styleVariant="lead"
			>
				Whereas recognition of the inherent dignity
			</Text>
			<Text
				as="h3"
				styleVariant="muted"
			>
				Whereas recognition of the inherent dignity
			</Text>
			<Text as="h4">Whereas recognition of the inherent dignity</Text>
		</div>
	)
}