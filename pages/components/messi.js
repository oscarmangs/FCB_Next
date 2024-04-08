import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import classes from '../components/messi.module.css';
import { shouldShowMessiComponent } from '../../optimizely-js-quickstart';

export default function Messi() {
	const [showMessi, setShowMessi] = useState(null);

	useEffect(() => {
		const fetchMessiDecision = async () => {
			const randomUserId = Math.floor(Math.random() * 1000000).toString(); // Generate random user ID
			const decision = await shouldShowMessiComponent(randomUserId);
			setShowMessi(decision);
		};

		fetchMessiDecision();
	}, []);

	const messiRef = useRef(null);
	const [isMirrored, setIsMirrored] = useState(false);
	const keysPressed = useRef({});

	useEffect(() => {
		const handleKeyDown = (event) => {
			keysPressed.current[event.key] = true;
			handleKeys();
		};

		const handleKeyUp = (event) => {
			keysPressed.current[event.key] = false;
			handleKeys();
		};

		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('keyup', handleKeyUp);
		};
	}, []);

	const handleKeys = () => {
		if (messiRef && messiRef.current) {
			const currentTop = parseInt(messiRef.current.style.top) || 300;
			const currentLeft = parseInt(messiRef.current.style.left) || 40;

			if (keysPressed.current['ArrowDown']) {
				messiRef.current.style.top = currentTop + 10 + 'px';
			}

			if (keysPressed.current['ArrowUp']) {
				messiRef.current.style.top = currentTop - 10 + 'px';
			}

			if (keysPressed.current['ArrowRight']) {
				setIsMirrored(false);
				messiRef.current.style.left = currentLeft + 10 + 'px';
			} else if (keysPressed.current['ArrowLeft']) {
				setIsMirrored(true);
				messiRef.current.style.left = currentLeft - 10 + 'px';
			}
		}
	};

	if (showMessi === 'hidden' || showMessi === null) {
		return null;
	}

	if (!showMessi) {
		return null;
	}

	return (
		<Image
			src='/images/messi.png'
			alt='messi'
			className={`${classes.messiPic} ${isMirrored ? classes.mirror : ''}`}
			id='messi'
			ref={messiRef}
			width={200}
			height={200}
		/>
	);
}
