'use client';

import { useCallback, useEffect, useState } from 'react';
import { SpringValue, useSpring } from '@react-spring/web';

// @ source https://joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useBoop({
	x = 0,
	y = 0,
	rotation = 0,
	scale = 1,
	timing = 150,
	springConfig = {
		tension: 500,
		friction: 15
	}
}) {
	const prefersReducedMotion = usePrefersReducedMotion();

	const [isBooped, setIsBooped] = useState(false);

	const style = useSpring({
		transform: isBooped
			? `translate(${x}px, ${y}px)
				 rotate(${rotation}deg)
				 scale(${scale})`
			: `translate(0px, 0px)
				 rotate(0deg)
				 scale(1)`,
		config: springConfig
	});

	useEffect(() => {
		if (!isBooped) {
			return;
		}

		const timeoutId = window.setTimeout(() => {
			setIsBooped(false);
		}, timing);

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [isBooped]);

	const trigger = useCallback(() => {
		setIsBooped(true);
	}, []);

	let appliedStyle = prefersReducedMotion ? {} : style;

	return [appliedStyle, trigger] as [
		{ transform: SpringValue<string> } | {},
		() => void
	];
}
