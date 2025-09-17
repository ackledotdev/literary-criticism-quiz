import Link from '@/components/misc/Link';
import { InstagramProfile } from '@/lib/constants';

export default function Contact() {
	return (
		<>
			<main className='flex flex-col items-center gap-8 px-4 *:text-center'>
				<h1 className='text-3xl'>Contact Me</h1>
				<p className='wordwrap-dynamic px-2 text-xl'>
					Hey there! If you would like to get in touch with me, you're in the
					right place! You can reach me by email at{' '}
					<Link href='mailto:acklemusicdev@gmail.com'>
						acklemusicdev@gmail.com
					</Link>
					. Alternatively, DM me on Instagram (
					<Link href={InstagramProfile}>@acklemusic</Link>). I'll do my best to
					get back to you as soon as I can!
				</p>
			</main>
		</>
	);
}
