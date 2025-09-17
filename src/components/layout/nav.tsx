'use client';

import Link from '@/components/misc/Link';

export default function Nav() {
	const NavLinks: { name: string; href: string }[] = [];

	return (
		<header className='link-nocolor-class mt-2 mb-16 flex w-full flex-col gap-4 px-0 py-2'>
			{/* start logomark */}
			{/* <Link href='/' className='self-center'>
				<BoopedImage
					priority
					src='/logo.svg'
					alt='AP logomark'
					width={48}
					height={48}
					className='border-foreground aspect-square w-12 rounded-xl border-1'
					scale={1.125}
				/>
			</Link> */}

			{/* center menu */}
			<nav
				className='flex h-6 flex-col gap-2 self-stretch md:grid md:gap-0'
				style={{
					gridTemplateColumns: '1fr auto 1fr'
				}}
			>
				<div
					// style={{ gridColumn: 2 }}
					className='link-blank-class flex flex-row items-center justify-center gap-4 md:gap-6 lg:gap-8'
				>
					{NavLinks.map((item, index) => (
						<Link
							key={index}
							className='inline-block px-1 text-center'
							href={item.href}
						>
							{item.name}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
}
