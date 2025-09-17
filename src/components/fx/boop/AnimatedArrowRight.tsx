import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { animated, SpringValue } from '@react-spring/web';

const AnimatedComponent = animated(ArrowRight);

export default function AnimatedArrowRight({
	className,
	style
}: {
	className?: string;
	style:
		| {}
		| {
				transform: SpringValue<string>;
		  };
}) {
	return (
		<AnimatedComponent
			className={cn('animation-respectful', className)}
			style={style}
		/>
	);
}
