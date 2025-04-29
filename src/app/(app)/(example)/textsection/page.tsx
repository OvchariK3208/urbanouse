import { TextSection } from "@/components/shared/text-section"
import { ModeSwitcher } from "@/components/shared/mode-switcher"
import { Icons } from "@/components/shared/icons"

export default function TextS() {
	return (
		<div>
			<TextSection
				badge="test"
				title="title"
				text="sslslslslslsllslslslls"
				className="bg-pink-300/20 flex-row items-center justify-between"
			/>
			<TextSection
				badge="test"
				title="title"
				text="sslslslslslsllslslslls"
				className="bg-blue-300/20"
			/>
			<TextSection
				title="title"
				text="sslslslslslsllslslslls"
				className="bg-pink-900/20 flex-row items-center justify-between"
			/>
			<TextSection
				title="title"
				text="sslslslslslsllslslslls"
				className="bg-blue-900/20"
			/>
			<ModeSwitcher />
			<Icons.gitHub className="size-9" />
			<Icons.apple className="size-9" />
			<div className="w-[135px]">
				<Icons.logo />
			</div>
		</div>
	)
}