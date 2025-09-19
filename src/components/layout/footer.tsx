import Link from '../misc/Link';

export default function Footer() {
	return (
		<footer className='bg-background text-foreground flex flex-col items-stretch gap-2 px-4 pt-16 pb-12 text-center text-lg'>
			<hr className='mb-8' />

			<p className='link-nocolor-class leading-loose'>
				This project is{' '}
				<Link href='https://github.com/ackledotdev/literary-criticism-quiz'>
					open source
				</Link>
				.
			</p>
		</footer>
	);
}
