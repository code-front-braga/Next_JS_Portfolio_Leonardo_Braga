'use client';

import { useEffect, useState } from 'react';

export default function useScrollDetection() {
	const [isScrolled, setIsScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 0);

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return isScrolled;
}
