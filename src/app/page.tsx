import Link from 'next/link'

import Footer from './components/Footer'
import ModernHouse from './components/modern/ModernHouse'

export default function Home() {
	return (
		<div className="h-full w-full flex flex-col items-center justify-between overflow-hidden">
			<div className="flex items-center h-12">
				<Link href="" className="text-lg font-semibold">
					Juan Tutorial
				</Link>
			</div>
			<ModernHouse />
			<Footer />
		</div>
	)
}
