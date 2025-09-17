'use client';

import { cn } from '@/lib/utils';
import './fadein.css';

export default function FadeIn({
	duration = 300,
	delay = 0,
	children,
	className
}: {
	duration?: number;
	delay?: number;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<div
			style={{
				animationDuration: duration + 'ms',
				animationDelay: delay + 'ms',
				animationName: 'fade-in',
				animationFillMode: 'backwards'
			}}
			className={cn('animation-respectful', className)}
		>
			{children}
		</div>
	);
}
