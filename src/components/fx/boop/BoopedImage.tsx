'use client';

import { useBoop } from '@/hooks/useBoop';
import Image from 'next/image';
import { animated } from '@react-spring/web';

const AnimatedImage = animated(Image);

export default function BoopedImage({
	src,
	alt,
	scale,
	rotation,
	timing,
	springConfig,
	x,
	y,
	height,
	width,
	className,
	priority
}: {
	src: string;
	alt: string;
	scale?: number;
	rotation?: number;
	timing?: number;
	springConfig?: { tension: number; friction: number };
	x?: number;
	y?: number;
	height: number;
	width: number;
	className?: string;
	priority?: boolean;
}) {
	const [styles, trigger] = useBoop({
		scale,
		rotation,
		timing,
		springConfig,
		x,
		y
	});
	return (
		<AnimatedImage
			className={className}
			src={src}
			alt={alt}
			style={styles}
			onMouseEnter={trigger}
			height={height}
			width={width}
			priority={priority}
		/>
	);
}
